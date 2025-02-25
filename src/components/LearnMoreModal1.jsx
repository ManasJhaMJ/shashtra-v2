import React from "react";

const LearnMoreModal1 = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>What Sets Our Courses Apart?</h2>
        <ul>
          <li><strong>Engaging & Interactive</strong> – Experience dynamic lessons, including visual storytelling, quizzes, and hands-on exercises.</li>
          <li><strong>Comprehensive Learning</strong> – Our structured courses cover everything from foundational concepts to advanced topics.</li>
          <li><strong>Real-World Application</strong> – Apply what you learn immediately to your personal, academic, and professional life.</li>
          <li><strong>Flexible Learning Pace</strong> – Choose from self-paced or live sessions that fit your schedule.</li>
          <li><strong>Exclusive Learning Resources</strong> – Gain access to study guides, downloadable materials, and practical exercises.</li>
        </ul>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default LearnMoreModal1;