import React, { useState } from "react";
import LearnMoreModal1 from "./LearnMoreModal1";
import LearnMoreModal2 from "./LearnMoreModal2";
import LearnMoreModal3 from "./LearnMoreModal3";

import landing from "../assets/landing.jpg";
import why1 from "../assets/11.png";
import why2 from "../assets/33.png";
import why3 from "../assets/landing2.png";
import { Link } from "react-router-dom";

function Landing() {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalNumber) => {
    setActiveModal(modalNumber);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <>
      <section id="landing">
        <div className="content">
          <h1>Unlock Your Learning Potential with Value</h1>
          <p>
            Choose from thousands of value-based courses that nurture your
            academic, moral, and spiritual growth. Embark on a journey of
            wisdom, self-discovery, and transformation with Shashtra.
          </p>
          <button>
            <Link to="/courses">Get Started</Link>
          </button>
        </div>
        <div className="landing-image">
          <img src={landing} alt="" />
        </div>
      </section>
      <section id="live-sessions">
        <div className="section-header">
          <h2>Why Choose Shashtra?</h2>
          <p>
            Live sessions provide an opportunity for real-time engagement and
            interactive learning experiences.
          </p>
        </div>
        <div className="cards-container">
          <div className="card">
            <div className="card-image">
              <img src={why1} alt="High-Quality Courses" />
            </div>
            <div className="card-content">
              <h3>High-Quality Courses</h3>
              <p>We believe that education is more than just acquiring knowledge. Our courses are thoughtfully designed to ensure deep learning, 
engagement, and real-world application. </p>
              <button onClick={() => openModal(1)}>Learn More</button>
            </div>
          </div>

          <div className="card">
            <div className="card-image">
              <img src={why2} alt="Learn from Experts" />
            </div>
            <div className="card-content">
              <h3>Learn from Experts</h3>
              <p>Shashtra connects you with some of the brightest minds across various disciplines. Learn 
              directly from seasoned educators, thought leaders, and industry experts. </p>
              <button onClick={() => openModal(2)}>Learn More</button>
            </div>
          </div>

          <div className="card">
            <div className="card-image">
              <img src={why3} alt="Affordable Learning" />
            </div>
            <div className="card-content">
              <h3>Affordable Learning</h3>
              <p>At Shashtra, we believe quality education should be accessible to all. That is why we offer 
              premium learning experiences at an affordable price range.</p>
              <button onClick={() => openModal(3)}>Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Modals */}
      <LearnMoreModal1 isOpen={activeModal === 1} onClose={closeModal} />
      <LearnMoreModal2 isOpen={activeModal === 2} onClose={closeModal} />
      <LearnMoreModal3 isOpen={activeModal === 3} onClose={closeModal} />
    </>
  );
}

export default Landing;