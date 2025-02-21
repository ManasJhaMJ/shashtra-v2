import React, { useState } from "react";
import LearnMoreModal from "./LearnMoreModal";
import landing from "../assets/landing.jpg";
import why1 from "../assets/11.png";
import why2 from "../assets/33.png";
import why3 from "../assets/landing2.png";

function Landing() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const openModal = (content) => {
    setModalContent(content);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
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
            interactive learning experiences.
          </p>
        </div>
        <div className="cards-container">
          {[
            {
              img: why1,
              title: "Wisdom at Your Fingertips",
              content:
                "Explore a vast collection of enriching courses designed to deepen understanding and expand knowledge.",
            },
            {
              img: why2,
              title: "Learn from Experts",
              content:
                "Gain insights from seasoned scholars, thought leaders, and industry professionals.",
            },
            {
              img: why3,
              title: "A Thriving Learning Community",
              content:
                "Connect with like-minded seekers, engage in discussions, and build meaningful relationships.",
            },
            {
              img: why1,
              title: "Holistic Education",
              content:
                "Whether for personal growth, spiritual wisdom, or career advancement, we offer a well-rounded experience.",
            },
          ].map((item, index) => (
            <div className="card" key={index}>
              <div className="card-image">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="card-content">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <button onClick={() => openModal(item.content)}>Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <LearnMoreModal isOpen={isModalOpen} onClose={closeModal} content={modalContent} />
    </>
  );
}

export default Landing;