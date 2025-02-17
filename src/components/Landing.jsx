import React from "react";
import landing from "../assets/landing.jpg";
import why1 from "../assets/11.png";
import why2 from "../assets/33.png";
import why3 from "../assets/landing2.png";

function Landing() {
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
          <button>Get Started</button>
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
            interactive learning experiences
          </p>
        </div>
        <div className="cards-container">
          <div className="card">
            <div className="card-image">
              <img src={why1} alt="High-Quality Courses" />
            </div>
            <div className="card-content">
              <h3>Wisdom at Your Fingertips</h3>
              <p>
                Explore a vast collection of enriching courses designed to
                deepen understanding and expand knowledge.
              </p>
              <a href="#">Learn More</a>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <img src={why2} alt="Learn with Experts" />
            </div>
            <div className="card-content">
              <h3>Learn from Experts</h3>
              <p>
                Gain insights from seasoned scholars, thought leaders, and
                industry professionals who bring real-world experience into
                learning.
              </p>
              <a href="#">Learn More</a>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <img src={why3} alt="Affordable Learning" />
            </div>
            <div className="card-content">
              <h3>A Thriving Learning Community</h3>
              <p>
                Connect with like-minded seekers, engage in discussions, and
                build meaningful relationships
              </p>
              <a href="#">Learn More</a>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <img src={why3} alt="Holistic Education" />
            </div>
            <div className="card-content">
              <h3>Holistic Education</h3>
              <p>
                Whether you seek personal growth, spiritual wisdom, or career
                advancement, we provide a well-rounded learning
                experience tailored to your needs.
              </p>
              <a href="#">Learn More</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Landing;
