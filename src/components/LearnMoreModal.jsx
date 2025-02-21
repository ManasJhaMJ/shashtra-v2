import React from "react";

const LearnMoreModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Don't render if not open

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          ✖
        </button>

        <h1>High-Quality Courses</h1>
        <p>
          At Shashtra, we believe that education is more than just acquiring knowledge—it’s about transformation. 
          Our courses are thoughtfully designed to ensure deep learning, engagement, and real-world application.
        </p>
        
        <h2>What Sets Our Courses Apart?</h2>
        <ul>
          <li><strong>Engaging & Interactive</strong> – Experience dynamic lessons, including visual storytelling, quizzes, and hands-on exercises.</li>
          <li><strong>Comprehensive Learning</strong> – Our structured courses cover everything from foundational concepts to advanced topics.</li>
          <li><strong>Real-World Application</strong> – Apply what you learn immediately to your personal, academic, and professional life.</li>
          <li><strong>Flexible Learning Pace</strong> – Choose from self-paced or live sessions that fit your schedule.</li>
          <li><strong>Exclusive Learning Resources</strong> – Gain access to study guides, downloadable materials, and practical exercises.</li>
        </ul>
        <p><strong>Unlock your full potential—enroll today!</strong></p>

        <h1>Learn with Experts</h1>
        <p>
          Shashtra connects you with some of the brightest minds across various disciplines. 
          Learn directly from seasoned educators, thought leaders, and industry experts.
        </p>

        <h2>Expert Guidance</h2>
        <ul>
          <li><strong>Live Webinars & Interactive Sessions</strong> – Participate in discussions and Q&A sessions for deeper understanding.</li>
          <li><strong>Cutting-Edge Knowledge</strong> – Stay updated with the latest insights and innovations.</li>
          <li><strong>Personalized Learning Paths</strong> – Get tailored recommendations that align with your goals.</li>
        </ul>
        <p><strong>Join today and gain the confidence to master new skills with expert mentorship.</strong></p>

        <h1>Affordable Learning for Everyone</h1>
        <p>
          At Shashtra, we believe quality education should be accessible to all. That’s why we offer premium learning experiences at an affordable price.
        </p>

        <h2>What You Get:</h2>
        <ul>
          <li> <strong>Value-Packed Courses</strong> – Access top-quality education at a fraction of the traditional cost.</li>
          <li> <strong>Flexible Payment Options</strong> – Choose between subscriptions, pay-per-course, or bundled offers to suit your budget.</li>
          <li> <strong>Community Learning</strong> – Engage with fellow learners, exchange ideas, and grow together.</li>
          <li> <strong>Guidance from Experts</strong> – Receive personalized mentorship to overcome challenges and stay motivated.</li>
        </ul>
        <p><strong>Education should empower, not burden. Start your learning journey with Shashtra today!</strong></p>
      </div>
    </div>
  );
};

export default LearnMoreModal;