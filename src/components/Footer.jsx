import React from "react";
import logoName from "../assets/shashtra-font-nobg.png";
import { FaYoutube, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-group">
        <div className="footer-logo">
          <img src={logoName} alt="Shashtra Logo" />
        </div>
        <div className="social-media">
          <a
            href="https://youtube.com/@shashtraeducation?si=cVi2t0wNdn6RhfGh"
            target="_blank"
            rel="noreferrer"
          >
            <FaYoutube fill="#6D3E0F" size={25} />
          </a>
          <a
            href="https://www.linkedin.com/in/shashtra-education-5a49772a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin fill="#6D3E0F" size={25} />
          </a>
          <a
            href="https://www.instagram.com/shashtraeducation?igsh=MTIxM21zcnBkZHg0eg=="
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram fill="#6D3E0F" size={25} />
          </a>
        </div>
      </div>

      <hr />

      <div className="footer-group">
        <div className="footer-text">© 2025 Shashtra | All Rights Reserved</div>
      </div>
    </div>
  );
}

export default Footer;