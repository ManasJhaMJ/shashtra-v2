import logo from '../assets/logo.png';
import logofont from '../assets/shashtra-font-nobg.png';
import { useState } from 'react';

function Navbar() {
    const [nav, setNav] = useState(false);

    return (
        <nav>
            <div>
                <img className="logo" src={logo} alt="shashtra logo" />
                <img className="logo-name" src={logofont} alt="shashtra font" />
            </div>
            {/* Desktop Navigation */}
            <div className="desktop">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Courses</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className="desktop">
                <button className="google-button"></button>
            </div>
            {/* Mobile Navigation */}
            <div className="mobile">
                <button className="hamburger" onClick={() => setNav(!nav)}>
                    {/* Hamburger Icon */}
                    <span className={nav ? 'line active' : 'line'}></span>
                    <span className={nav ? 'line active' : 'line'}></span>
                    <span className={nav ? 'line active' : 'line'}></span>
                </button>
                <div className={nav ? 'nav-links active' : 'nav-links'}>
                    <ul>
                        <li onClick={() => setNav(false)}>Home</li>
                        <li onClick={() => setNav(false)}>About Us</li>
                        <li onClick={() => setNav(false)}>Courses</li>
                        <li onClick={() => setNav(false)}>Contact Us</li>
                        <button className="google-button"></button>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;