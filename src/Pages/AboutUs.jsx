import React from "react";
import { FaBookOpen, FaLightbulb, FaUsers, FaGraduationCap } from "react-icons/fa";

function AboutUs() {
  return (
    <section className="about-us">
      <div className="about-container">
        <h2 className="section-title">About Us</h2>

        {/* Our Message */}
        <div className="about-message">
          <h3>Our Message</h3>
          <p>
            At <strong>Shashtra</strong>, we believe learning is not just about acquiring information—
            it’s about transformation. Rooted in timeless wisdom and complemented by modern insights, 
            we bridge the gap between the past and the present, helping learners achieve intellectual, 
            personal, and spiritual growth.
          </p>
          <p>
            In a world where learning often feels mechanical, <strong>Shashtra</strong> redefines education as 
            a meaningful and engaging experience. Whether you're looking for personal development, 
            structured learning, or deeper insights into life, we are here to illuminate your path.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="mission-vision">
          <h3>Our Mission & Vision</h3>
          <div className="mission">
            <FaLightbulb className="icon" />
            <p><strong>Mission:</strong> To preserve and promote timeless wisdom in an accessible and engaging way.</p>
          </div>
          <div className="vision">
            <FaBookOpen className="icon" />
            <p><strong>Vision:</strong> To establish Shashtra as a global hub for lifelong learning and spiritual wisdom.</p>
          </div>
        </div>

        {/* Our Core Values */}
        <div className="core-values">
          <h3>We Strive To:</h3>
          <ul>
            <li>
              <FaGraduationCap className="icon" />
              <span>Bridge Tradition with Modern Learning – Integrating ancient knowledge with contemporary education.</span>
            </li>
            <li>
              <FaLightbulb className="icon" />
              <span>Inspire Personal Growth – Encouraging clarity, reflection, and transformation.</span>
            </li>
            <li>
              <FaUsers className="icon" />
              <span>Foster a Learning Community – Connecting seekers worldwide.</span>
            </li>
            <li>
              <FaBookOpen className="icon" />
              <span>Empower Every Learner – Providing tailored resources for all.</span>
            </li>
          </ul>
        </div>

        <p className="closing-statement">
          At <strong>Shashtra</strong>, learning is a journey—discover, engage, and grow with us.
        </p>
      </div>
    </section>
  );
}

export default AboutUs;
