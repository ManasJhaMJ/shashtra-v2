import React from "react";
import { useParams } from "react-router-dom";
import { MdWorkspacePremium } from "react-icons/md";
import { LuPyramid } from "react-icons/lu";

const courseData = {
    1: {
        title: "React for Beginners",
        trailer: "https://www.youtube.com/embed/dGcsHMXbSOA",
        description: "Learn React from scratch with hands-on projects and real-world examples.",
        features: ["State Management", "Hooks", "Component Lifecycle"],
        pricing: {
            basic: { price: "$29.99", benefits: ["Access to course", "Community Support", "No Mentorship", "No Certificate"] },
            premium: { price: "$59.99", benefits: ["Access to course", "Community Support", "One-on-One Mentorship", "Certificate"] }
        }
    },
    2: {
        title: "Advanced JavaScript",
        trailer: "https://www.youtube.com/embed/NCwa_xi0Uuc",
        description: "Master JavaScript with in-depth knowledge of advanced concepts.",
        features: ["Closures", "Asynchronous JS", "Design Patterns"],
        pricing: {
            basic: { price: "$39.99", benefits: ["Access to course", "Community Support", "No Mentorship", "No Certificate"] },
            premium: { price: "$69.99", benefits: ["Access to course", "Community Support", "Expert Sessions", "Certificate"] }
        }
    }
};

const CourseDetails = () => {
    const { id } = useParams();
    const course = courseData[id];

    if (!course) {
        return <h2>Course not found</h2>;
    }

    return (
        <div className="course-details-container">
            <iframe
                className="course-video"
                src={course.trailer}
                title={course.title}
                allowFullScreen
            ></iframe>
            <h1 className="course-title">{course.title}</h1>
            <p className="course-description">{course.description}</p>
            <h2>Features</h2>
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
                    <button>
                        Enroll Now
                    </button>
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
                    <button>
                        Enroll Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;