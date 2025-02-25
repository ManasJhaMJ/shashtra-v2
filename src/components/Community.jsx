import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Community = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch("/images.json")
            .then((response) => response.json())
            .then((data) => setImages(data));
    }, []);

    return (
        <div className="community-container">
            <div className="community-images">
                {images.map((image) => (
                    <img
                        key={image.id}
                        src={image.src}
                        alt={image.alt}
                        loading="lazy" // Improves performance
                    />
                ))}
            </div>
            <div className="community-content">
                <p>
                    Begin the journey of your dream career today by joining our expansive
                    community of students and mentors
                </p>
                <button className="community-button">
                    <Link to="/courses">Join Now</Link>
                </button>
            </div>
        </div>
    );
};

export default Community;