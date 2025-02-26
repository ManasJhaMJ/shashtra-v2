import React, { useState } from "react";
import "./Signup.css";
import { FaGoogle } from "react-icons/fa";
import flag from "../Pages/th.jpeg";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider, db } from "../firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

const Signup = ({ setuserEmail }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Store user details in Firestore
  const saveUserToFirestore = async (user, additionalData) => {
    try {
      await setDoc(doc(db, "users", user.email), {
        uid: user.uid,
        name: additionalData.name || user.displayName || "",
        email: user.email,
        phone: additionalData.phone || "",
        photoURL: user.photoURL || "",
        createdAt: new Date(),
      });
      console.log("User saved to Firestore");
    } catch (error) {
      console.error("Error saving user to Firestore:", error);
    }
  };

  // ✅ Handle email/password signup
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, name, phone } = formData;
    setError("");

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await saveUserToFirestore(user, { name, phone });

      localStorage.setItem("userEmail", email);
      setuserEmail(email);
      navigate("/");
    } catch (error) {
      setError("Signup failed: " + error.message);
      console.error("Signup error:", error);
    }
  };

  // ✅ Handle Google signup
  const handleGoogleSignup = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      const userDocRef = doc(db, "users", user.email);
      const docSnap = await getDoc(userDocRef);

      if (!docSnap.exists()) {
        await saveUserToFirestore(user, {});
      }

      localStorage.setItem("userEmail", user.email);
      setuserEmail(user.email);
      navigate("/");
    } catch (error) {
      console.error("Google Sign-In error: ", error.message);
      alert("Google Sign-In failed. Try again.");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2 className="signup-title">Create Account</h2>
        <p className="signup-subtitle">Create an account to explore all the existing jobs</p>

        {error && <p className="error-message">{error}</p>}

        <form className="signup-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input-field"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input-field"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input-field"
            value={formData.password}
            onChange={handleChange}
          />

          <div className="phone-input">
            <span className="flag">
              <img src={flag} alt="Flag" /> +91
            </span>
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input-field phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="signup-btn">Sign up</button>
        </form>

        <div className="extra">
          <p className="signin-link">
            <a href="/signin">Already have an account?</a>
          </p>
          <p className="continue-with">Or continue with</p>
        </div>

        <div className="social-login">
          <div className="social-box" onClick={handleGoogleSignup}>
            <FaGoogle className="social-Google" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
