import React from 'react'
import landing from '../assets/landing.jpg'
import why1 from '../assets/11.png'
import why2 from '../assets/33.png'
import why3 from '../assets/landing2.png'

function Landing() {
    return (
        <>
            <section id="landing">
                <div className="content">
                    <h1>Unlock Your Learning Potential</h1>
                    <p>We believe in the power of knowledge and aim to provide quality education to everyone. Our courses are designed to help you learn new skills and grow in your career.</p>
                    <button>Get Started</button>
                </div>
                <div className='landing-image'>
                    <img src={landing} alt="" />
                </div>
            </section>
            <section id="live-sessions">
                <div className="section-header">
                    <h2>Why Choose Shashtra?</h2>
                    <p>Live sessions provide an opportunity for real-time engagement and interactive learning experiences</p>
                </div>
                <div className="cards-container">
                    <div className="card">
                        <div className="card-image">
                            <img src={why1} alt="High-Quality Courses" />
                        </div>
                        <div className="card-content">
                            <h3>High-Quality Courses</h3>
                            <p>Master key concepts and boost your retention with our interactive flashcards feature that supports eyes and brain coordination.</p>
                            <a href="#">Learn More</a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-image">
                            <img src={why2} alt="Learn with Experts" />
                        </div>
                        <div className="card-content">
                            <h3>Learn with Experts</h3>
                            <p>Join live webinars conducted by subject matter experts, where they delve into specific topics, and answer questions from participants.</p>
                            <a href="#">Learn More</a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-image">
                            <img src={why3} alt="Affordable Learning" />
                        </div>
                        <div className="card-content">
                            <h3>Affordable Learning</h3>
                            <p>Participate in live Q&A sessions with experienced educators who are available to address your queries and encourage active learning.</p>
                            <a href="#">Learn More</a>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Landing