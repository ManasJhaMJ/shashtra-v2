import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import Courses from "./pages/Courses";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import OtpSection from "./pages/OtpSection";
import CourseDetails from "./components/CourseDetails";
import PaymentGateway from "./pages/PaymentGateway";
import { useState } from "react";

const App = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  
  const [userEmail, setuserEmail]=useState(localStorage.getItem("userEmail") || null);

  useEffect(()=>{
    if(userEmail){
      localStorage.setItem("userEmail", userEmail);
    }
  },[userEmail]);
  return (
    <Router>
      <Navbar  userEmail={userEmail} setuserEmail={setuserEmail}/>
      <Routes>
      <Route path='/' element={<HomePage  userEmail={userEmail}/>} />
        <Route path='/courses' element={<Courses  userEmail={userEmail}/>} />
        <Route path='/contact' element={<ContactUs  userEmail={userEmail}/>} />
        <Route path='/about' element={<AboutUs  userEmail={userEmail}/>} />
        <Route path="/course/:id" element={<CourseDetails  userEmail={userEmail}/>} />
        <Route path='/signup' element={<Signup userEmail={userEmail} setuserEmail={setuserEmail}/>} />
        <Route path='/signin' element={<Signin userEmail={userEmail} setuserEmail={setuserEmail}/>} />
        <Route path='/otp' element={<OtpSection  userEmail={userEmail} setuserEmail={setuserEmail}/>} />
        <Route path="/paymentgateway" element={<PaymentGateway  userEmail={userEmail}/>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
