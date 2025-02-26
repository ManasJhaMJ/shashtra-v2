import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaYoutube, FaLinkedin, FaInstagram } from "react-icons/fa";

function ContactUs() {
  return (
    <section className="contact-us">
      <div className="contact-container">
        <h2 className="section-title">Contact Us</h2>

        {/* Contact Details */}
        <div className="contact-details">
          <div className="contact-item">
            <FaEnvelope className="icon" />
            <p><strong>Official Email:</strong> <a href="mailto:education@shashtra.in">education@shashtra.in</a></p>
          </div>
          <div className="contact-item">
            <FaEnvelope className="icon" />
            <p><strong>Gmail:</strong> <a href="mailto:shashtraeducation@gmail.com">shashtraeducation@gmail.com</a></p>
          </div>
          <div className="contact-item">
            <FaPhone className="icon" />
            <p><strong>Contact:</strong> <a href="tel:+917898452013">+91 7898452013</a></p>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt className="icon" />
            <p><strong>Address:</strong> Sarkanda, Bilaspur, Chhattisgarh</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="social-links">
          <h3>Connect with us on</h3>
          <div className="social-icons">
            <a href="https://youtube.com/@shashtraeducation?si=cVi2t0wNdn6RhfGh" target="_blank" rel="noreferrer">
              <FaYoutube className="contact-social-icon youtube" /> YouTube
            </a>
            <a href="https://www.linkedin.com/in/shashtra-education-5a49772a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer">
              <FaLinkedin className="contact-social-icon linkedin" /> LinkedIn
            </a>
            <a href="https://www.instagram.com/shashtraeducation?igsh=MTIxM21zcnBkZHg0eg==" target="_blank" rel="noreferrer">
              <FaInstagram className="contact-social-icon instagram" /> Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;