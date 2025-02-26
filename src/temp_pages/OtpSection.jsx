import React, { useEffect, useState, useRef } from "react";
import "./OtpSection.css";
import otpImage from "../assets/image.png";
import { useNavigate, useLocation } from "react-router-dom";

const OtpSection = ({ userEmail, setuserEmail }) => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [verifyotp, setverifyotp] = useState(null);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const otpAlertShown = useRef(false); // ✅ Prevent multiple alerts

  // Extract email from URL
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const emailFromUrl = queryParams.get("email");
    if (emailFromUrl) setEmail(emailFromUrl);
  }, [location]);

  // Generate OTP
  const generateOTP = () => Math.floor(1000 + Math.random() * 9000).toString();

  useEffect(() => {
    if (!otpAlertShown.current) {
      const yotp = generateOTP();
      alert("Your OTP is " + yotp);
      setverifyotp(yotp);
      otpAlertShown.current = true; // ✅ Set flag after first alert
    }
  }, []);

  const handleChange = (index, value) => {
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 3) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredOtp = otp.join("");
    if (enteredOtp === verifyotp) {
      setuserEmail(email);
      navigate("/");
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  const sendOtp = () => {
    const yotp = generateOTP();
    alert("Your OTP is: " + yotp);
    setverifyotp(yotp);
  };
  return (
    <div className="otp-container">
      <div className="otp-card">
        <div className="otp-image">
          <img src={otpImage} alt="OTP Verification" />
        </div>
        <h2 className="otp-title">OTP Verification</h2>
        <p className="otp-subtitle">Enter the OTP sent to {email}</p>

        <form onSubmit={handleSubmit} className="otp-form">
          <div className="otp-inputs">
            {otp.map((value, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                maxLength="1"
                value={value}
                onChange={(e) => handleChange(index, e.target.value)}
                className="otp-input"
              />
            ))}
          </div>

          <p className="otp-resend">
            Didn't receive the OTP?{" "}
            <a href="#" onClick={sendOtp}>
              Resend OTP
            </a>
          </p>

          <button type="submit" className="otp-submit">
            Verify
          </button>
        </form>
      </div>
    </div>
  );
};

export default OtpSection;
