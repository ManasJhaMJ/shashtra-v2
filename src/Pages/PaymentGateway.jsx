import React, { useState } from 'react';
import './PaymentGateway.css';
import creditCardIcon from '../Pages/mastercard.png';
import paypalIcon from '../Pages/paypal.png';
import googlePayIcon from '../Pages/Google.png';
import axios from "axios";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase"; // Ensure your firebase config is imported

const PaymentGateway = ({userEmail}) => {
  const [selectedMethod, setSelectedMethod] = useState('credit-card');

  const paymentOptions = [
    { id: 'credit-card', label: 'Credit Card', icon: creditCardIcon },
    { id: 'paypal', label: 'PayPal', icon: paypalIcon },
    { id: 'google-pay', label: 'Google Pay', icon: googlePayIcon },
  ];

  const razorpayKey = import.meta.env.VITE_RAZORPAY_KEY_ID;

  const [formData, setFormData] = useState({
    cardHolderName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePayment = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("http://localhost:5000/api/payment", {
        amount: 100, // 1 INR (Amount in paise, 100 paise = 1 INR)
        currency: "INR",
      });

      const options = {
        key: razorpayKey,
        amount: data.amount,
        currency: data.currency,
        order_id: data.id,
        name: "Shastra Payment",
        description: "Test transaction",
        handler: async (response) => {
          alert("Payment successful: " + response.razorpay_payment_id);
  
          try {
            // Step 2: Update Firestore after successful payment
            const userRef = doc(db, "users", userEmail);
            await setDoc(userRef, { payment: true }, { merge: true });
  
            console.log("Payment status updated in Firestore.");
          } catch (error) {
            console.error("Error updating Firestore:", error);
          }
        },
        prefill: {
          name: formData.cardHolderName,
          contact: "9999999999",
          email: "test@example.com",
        },
        theme: { color: "#3399cc" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Error initiating payment:", error);
    }
  };

  const handlePaypalPayment = async () => {
    
    try {
      // Send a request to your backend to create a Razorpay order
      const { data } = await axios.post("http://localhost:5000/api/payment", {
        amount: 100, // 1 INR (Amount in paise, 100 paise = 1 INR)
        currency: "INR",
      });
  
      // Razorpay payment options
      const options = {
        key: razorpayKey, // Use your Razorpay Key ID from the .env file
        amount: data.amount,
        currency: data.currency,
        order_id: data.id,
        name: "Shastra Payment",
        description: "Test transaction",
        handler: async (response) => {
          alert("Payment successful: " + response.razorpay_payment_id);
  
          try {
            // Step 2: Update Firestore after successful payment
            const userRef = doc(db, "users", userEmail);
            await setDoc(userRef, { payment: true }, { merge: true });
  
            console.log("Payment status updated in Firestore.");
          } catch (error) {
            console.error("Error updating Firestore:", error);
          }
        },
        prefill: {
          name: "User Name",
          contact: "9999999999",
          email: "test@example.com",
        },
        theme: { color: "#3399cc" },
      };
  
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Error initiating payment:", error);
    }
  };
  


  return (
    <div className="payment-container">
  <div className="header">
    
    <h3>My profile</h3>
    <button className="profile-icon">👤</button>
  </div>

  <h2>Select Payment Method</h2>


      <div className="payment-options">
        {paymentOptions.map((option) => (
          <div
            key={option.id}
            className={`payment-option ${selectedMethod === option.id ? 'selected' : ''}`}
            onClick={() => setSelectedMethod(option.id)}
          >
            <img src={option.icon} alt={option.label} className="payment-logo" />
            <span className="payment-label">{option.label}</span>
            <input
              type="radio"
              name="payment-method"
              value={option.id}
              checked={selectedMethod === option.id}
              onChange={() => setSelectedMethod(option.id)}
              className="radio-input"
            />
            <span className="custom-radio"></span>
          </div>
        ))}
      </div>
      <div >

      </div>
      {selectedMethod === "credit-card" ? (
        <form className="payment-form"  onSubmit={handlePayment}>
       
        <input
          type="text"
          id="cardHolder"
          
         
          className="input-field"
          name="cardHolderName"
        placeholder="Card Holder Name"
        value={formData.cardHolderName}
        onChange={handleChange}
          required
        />
      
        
        <input
          type="text"
          id="cardNumber"
          
          placeholder="4111    1111    1111    1111"
          className="input-field"
          maxLength="19"
          name="cardNumber"
        
        value={formData.cardNumber}
        onChange={handleChange}
          required
        />
      
        <div className="input-row">
          <div className="input-group">
            
            <input
              type="text"
              id="expiryDate"
             
              placeholder="MM/YY"
              className="input-field small-field"
              name="expiryDate"
     
        value={formData.expiryDate}
        onChange={handleChange}
              required
            />
          </div>
      
          <div className="input-group">
          
            <input
              type="text"
              id="cvv"
              name="cvv"
              placeholder="123"
              className="input-field small-field"
              maxLength="3"
              
       
        value={formData.cvv}
        onChange={handleChange}
              required
            />
          </div>
        </div>
      
        <button type="submit" className="confirm-btn">Confirm</button>
      </form>
      ):      
      (selectedMethod === "paypal" ? (
        <div>
          <button type="submit" className="confirm-btn" onClick={()=>handlePaypalPayment()}>Pay</button>
        </div>
      ):
      ( selectedMethod === "google-pay" ? (
        <div>
          <button type="submit" className="confirm-btn" onClick={()=>handlePaypalPayment()}>PayBy GooglePay</button>
        </div>
      ): (
        <div><p>Kumar</p></div>
      )))}
    </div>
  );
};

export default PaymentGateway;
