import React from "react";
import { useNavigate } from "react-router-dom";

const courses = [
    {
        id: 1,
        title: "React for Beginners",
        image: "https://jainjyotishrashi.com/public/uploads/service/1650273954.jpg",
    },
    {
        id: 2,
        title: "Advanced JavaScript",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7QKgP-S-q-BOHVoMXb3V9MppO-pMH9tIpRfChvGGCRmdZ9Xt6e0dGlWjYqXsaiD1bMJ8&usqp=CAU",
    },
    {
        id: 3,
        title: "Web Development Bootcamp",
        image: "https://content.jdmagicbox.com/comp/def_content_category/astrologers-for-share-market/360-f-650745024-j7rbwlsxyfo0yrsfo1vykcjg7vljxmim-astrologers-for-share-market-1-g5f8h.jpg",
    },
    {
        id: 4,
        title: "React for Beginners",
        image: "https://jainjyotishrashi.com/public/uploads/service/1650273954.jpg",
    },
    {
        id: 5,
        title: "Advanced JavaScript",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7QKgP-S-q-BOHVoMXb3V9MppO-pMH9tIpRfChvGGCRmdZ9Xt6e0dGlWjYqXsaiD1bMJ8&usqp=CAU",
    },
    {
        id: 6,
        title: "Web Development Bootcamp",
        image: "https://content.jdmagicbox.com/comp/def_content_category/astrologers-for-share-market/360-f-650745024-j7rbwlsxyfo0yrsfo1vykcjg7vljxmim-astrologers-for-share-market-1-g5f8h.jpg",
    },
    {
        id: 7,
        title: "React for Beginners",
        image: "https://jainjyotishrashi.com/public/uploads/service/1650273954.jpg",
    },
    {
        id: 8,
        title: "Advanced JavaScript",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7QKgP-S-q-BOHVoMXb3V9MppO-pMH9tIpRfChvGGCRmdZ9Xt6e0dGlWjYqXsaiD1bMJ8&usqp=CAU",
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