import React from "react";

const Card = ({ image, heading, author, price, badge }) => {
    return (
        <div className="ccard">
            {/* Image Section */}
            <div className="card-image-container">
                <img className="ccard-image" src={image} alt={heading} />
                <button className="play-button">▶</button>
            </div>

            {/* Content Section */}
            <div className="ccard-content">
                <h3 className="card-heading">{heading}</h3>
                <p className="card-author">{author}</p>
                {/* <p className="card-price">₹{price}</p> */}
                {badge && <span className="card-badge">{badge}</span>}
            </div>
        </div>
    );
};

export default Card;
