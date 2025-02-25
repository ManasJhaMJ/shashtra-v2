import React from "react";
import { useParams } from "react-router-dom";
import { MdWorkspacePremium } from "react-icons/md";
import { LuPyramid } from "react-icons/lu";
import bhagvadGeeta from '../assets/bhagvadGeeta.jpg';

const courseData = {
  1: {
    title: "Shrimad Bhagavad Gita",
    trailer: "https://www.youtube.com/embed/dGcsHMXbSOA",
    description:
      "Embark on a transformative 30-day journey through the wisdom of the Bhagavad Gita! This immersive course, available in Hindi and English, brings the teachings to life through engaging storytelling and practical applications.",
    features: [
      "✔ Overcome fear and self-doubt",
      "✔ Manage stress and anxiety with ease",
      "✔ Find clarity and purpose in life",
      "✔ Make better decisions with spiritual guidance",
      "✔ Rise above negativity and cultivate inner peace",
    ],
    pricing: {
      basic: {
        price: "₹699 (Hindi Only)",
        benefits: [
          "✔ Live & Recorded Classes - Covering all 18 chapters & 700 shlokas",
          "✔ 1-Year Course Access - Revisit lessons anytime",
          "✔ Soft Copy Course Summary - Downloadable key teachings",
          "✔ Weekly Quizzes & Prizes - Participate and win exciting rewards",
          "✔ 3D Animation Videos - Engaging lessons that simplify complex ideas",
          "✔ Community Support - Interact with fellow learners",
        ],
      },
      premium: {
        price: "₹2499 (Hindi & English)",
        benefits: [
          "✔ 3-Year Course Access - Extended learning support",
          "✔ Premium Learning Kit Includes -",
          "• Krishna Embroidery Cloth - A sacred spiritual keepsake",
          "• Discount Coupons - Special savings on future courses",
          "• Welcome Letter - A personal guide to your journey",
          "• Palm Leaf Course Summary - A beautifully designed keepsake",
          "• Special Edition Shrimad Bhagavad Gita Book (By Shashtra & ISKCON)",
          "• Completion Certificate (Shashtra & ISKCON-certified)",
          "✔ Exclusive Live Q&A Sessions - Get direct insights from spiritual experts",
          "✔ Enhanced 3D Animations - More engaging, visually immersive lessons",
          "✔ Stronger Community Support - Join a dedicated space for deeper discussions"
        ],
      },
    },
  },
};

const CourseDetails = () => {
  const { id } = useParams();
  const course = courseData[id];

  if (!course) {
    return <h2>Course not found</h2>;
  }

  return (
    <div className="course-details-container">
      {/* <iframe
        className="course-video"
        src={course.trailer}
        title={course.title}
        allowFullScreen
      ></iframe> */}
      <img src={bhagvadGeeta} alt="" />
      <h1 className="course-title">{course.title}</h1>
      <p className="course-description">{course.description}</p>
      <h2>What You'll Learn</h2>
      <ul className="course-features">
        {course.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <div className="pricing-container">
        <div className="pricing-card basic">
          <LuPyramid size={100} className="icon" />
          <h3>Basic Plan</h3>
          <p className="price">{course.pricing.basic.price}</p>
          <ul>
            {course.pricing.basic.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
          <button>Enroll Now</button>
        </div>
        <div className="pricing-card premium">
          <MdWorkspacePremium size={100} className="icon" />
          <h3>Premium Plan</h3>
          <p className="price">{course.pricing.premium.price}</p>
          <ul>
            {course.pricing.premium.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
          <button>Enroll Now</button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;