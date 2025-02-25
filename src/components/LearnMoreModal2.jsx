import React from "react";

const LearnMoreModal2 = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Learn from Experts</h2>
        <ul>
          <li><strong>Expert Guidance</strong> – Gain wisdom from specialists with years of experience in their fields.</li>
          <li><strong>Live Webinars & Interactive Sessions</strong> – Participate in discussions and Q&A sessions for deeper understanding.</li>
          <li><strong>Cutting-Edge Knowledge</strong> – Stay updated with the latest insights and innovations.</li>
          <li><strong>Personalized Learning Paths</strong> – Get tailored recommendations that align with your goals.</li>
        </ul>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default LearnMoreModal2;