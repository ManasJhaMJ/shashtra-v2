import React from "react";
import { useNavigate } from "react-router-dom";
import comingsoon from "../assets/ComingSoon.png";

const courses = [
    {
        id: 1,
        title: "Shrimad Bhagavad Gita",
        image: "https://wallpapers.com/images/hd/bhagavad-gita-hindu-scripture-xn28v142sg55tq85.jpg",
    },
    {
        id: 2,
        title: "Coming Soon",
        image: comingsoon,
    },
    {
        id: 3,
        title: "Coming Soon",
        image: comingsoon,
    },
];

const CoursePage = () => {
    const navigate = useNavigate();

    const handleCourseClick = (id) => {
        navigate(`/course/${id}`);
    };

    return (
        <section id="courses">
            <h1>
                Our <span className="highlight">Courses</span>
            </h1>
            <p>
                Choose the course that you want to learn from our wide range of courses
            </p>
            <div className="course-container">
                {courses.map((course) => (
                    <div
                        key={course.id}
                        className="course-card"
                        onClick={() => handleCourseClick(course.id)}
                    >
                        <img src={course.image} alt={course.title} className="course-image" />
                        <h3 className="course-title">{course.title}</h3>
                        <button className="course-button">Click for More Info</button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CoursePage