import crate from '../assets/premium-nobg.png'

function PremiumHome() {
    return (
        <section id='premium-home'>
            <div className='premium-home-content'>
                <h1>Premium Membership for Premium Customers</h1>
                <p>
                    Discover the membership that suits your learning needs,
                    flexible cancellation.
                </p>
                {/* <h2>₹899.00/mo.</h2> */}
                <button>Get Started</button>
            </div>
            <div className='premium-crate-img'>
                <img src={crate} alt="premium crate" />
            </div>
        </section>
    )
}

export default PremiumHome