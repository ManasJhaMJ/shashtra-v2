import React, { useState } from "react";
import "./Signin.css";
import { FaGoogle } from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { googleProvider, db } from "../firebase";
import { doc, setDoc, getDoc, collection, query, where, getDocs } from "firebase/firestore";

const Signin = ({userEmail, setuserEmail}) => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    try {
      // Authenticate user with Firebase
      await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("userEmail", email);
      setuserEmail(email);
      navigate("/"); // Redirect to Dashboard on success
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        setError("User not found. Please sign up.");
      } else if (error.code === "auth/wrong-password") {
        setError("Invalid password. Try again.");
      } else {
        setError("Login failed. Please try again.");
      }
      console.error("Login Error:", error.message);
    }
  };

  const handleGoogleSignup = async () => {
      try {
        const result = await signInWithPopup(auth, googleProvider);
        const user = result.user;
  
        const userDocRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(userDocRef);
  
        if (!docSnap.exists()) {
          await setDoc(userDocRef, {
            uid: user.uid,
            name: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            createdAt: new Date(),
          });
        }

        localStorage.setItem("userEmail",user.email);
        setuserEmail(user.email);
  
        alert(`Welcome, ${user.displayName}!`);
        navigate("/"); // ✅ Redirect after Google Sign-In
      } catch (error) {
        console.error("Error during Google Sign-In: ", error.message);
        alert("Google Sign-In failed. Try again.");
      }
    };

  const handleCloseError = () => {
    setError("");
  };

  const handleForgot = async () => {
    const email = document.querySelector('input[name="email"]').value;
  
    if (!email) {
      alert("Please enter your email to receive OTP.");
      return;
    }
  
    try {
      // Check if the email exists in Firestore
      const usersRef = collection(db, "users");
      const q = query(usersRef, where("email", "==", email));
      const querySnapshot = await getDocs(q);
  
      if (querySnapshot.empty) {
        setError("User not found. Please sign up.");
       
        
      }else{
        navigate(`/otp?email=${encodeURIComponent(email)}`);
      }
  
      // Navigate to OTP page if the email exists
      
    } catch (error) {
      console.error("Error checking email: ", error.message);
      alert("Error verifying email. Try again.");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2 className="signup-title">Login Here</h2>
        <p className="signup-subtitle">Welcome back! You have been missed!</p>

        {error && (
          <div className="error-popup">
            <span className="close-error" onClick={handleCloseError}>✖</span>
            <span>{error}</span>
          </div>
        )}

        <form className="signup-form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input-field"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input-field"
          />

<div className="forgot-password">
  <a href="#" onClick={handleForgot}>Forgot Password?</a>
</div>


          <button type="submit" className="signup-btn">Sign In</button>
        </form>

        <div className="extra">
          <p className="signin-link"><a href="/signup">Create a new account</a></p>
          <p className="continue-with">Or continue with</p>
        </div>

        <div className="social-login">
                  <div className="social-box" onClick={handleGoogleSignup}>
                    <div className="Google">
                      <FaGoogle className="social-Google" />
                    </div>
                  </div>
                </div>
      </div>
    </div>
  );
};

export default Signin;
