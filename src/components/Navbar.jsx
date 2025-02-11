import logo from '../assets/logo.png';
import logofont from '../assets/shashtra-font-nobg.png';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

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
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about'>About Us</NavLink>
                    </li>
                    <li>
                        <NavLink to='/courses'>Courses</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact'>Contact Us</NavLink>
                    </li>
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
                        <li>
                            <NavLink to='/' onClick={() => setNav(false)}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/about' onClick={() => setNav(false)}>About Us</NavLink>
                        </li>
                        <li>
                            <NavLink to='/courses' onClick={() => setNav(false)}>Courses</NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact' onClick={() => setNav(false)}>Contact Us</NavLink>
                        </li>
                        <NavLink to='/'><button className="google-button"></button></NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;