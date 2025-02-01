const Subscribe = () => {
    return (
        <div className="subscribe-container">
            <h1>Subscribe to get Latest updates!</h1>
            <p>
                Stay informed and ahead of the curve by subscribing to our updates. Be
                the first to know about new courses, special offers, and learning
                opportunities.
            </p>
            <div className="subscribe-form">
                <input
                    type="email"
                    placeholder="Enter Your Mail Here"
                    className="subscribe-input"
                />
                <button className="subscribe-button">Subscribe</button>
            </div>
        </div>
    );
};

export default Subscribe