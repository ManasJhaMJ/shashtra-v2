import React from "react";

const LearnMoreModal3 = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>What You Get</h2>
        <ul>
          <li><strong>✔ Value-Packed Courses</strong> – Access top-quality education at a fraction of the traditional cost.</li>
          <li><strong>✔ Flexible Payment Options</strong> – Choose between subscriptions, pay-per-course, or bundled offers to suit your budget.</li>
          <li><strong>✔ Community Learning</strong> – Engage with fellow learners, exchange ideas, and grow together.</li>
          <li><strong>✔ Guidance from Experts</strong> – Receive personalized mentorship to overcome challenges and stay motivated.</li>
        </ul>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default LearnMoreModal3;