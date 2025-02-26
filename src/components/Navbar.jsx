import logo from "../assets/logo.png";
import logofont from "../assets/shashtra-font-nobg.png";
import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar({ userEmail, setuserEmail }) {
  const [nav, setNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigate = useNavigate();

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    setuserEmail(null);
    navigate("/");
  };

  return (
    <nav className={isScrolled ? "navbar sticky" : "navbar"}>
      <div>
        <img className="logo" src={logo} alt="shashtra logo" />
        <img className="logo-name" src={logofont} alt="shashtra font" />
      </div>

      {/* Desktop Navigation */}
      <div className="desktop">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/courses">Courses</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
        </ul>
      </div>

      <div className="desktop">
        <button className="google-button">
          <span className="tooltip">Launching soon!</span>
        </button>
      </div>

      {/* Logout Button - Only visible when logged in */}
      {userEmail && (
        <div className="logout-container">
          <button className="log-out" onClick={handleLogout}>
            Log out
          </button>
        </div>
      )}

      {/* Mobile Navigation */}
      <div className="mobile">
        <button className="hamburger" onClick={() => setNav(!nav)}>
          <span className={nav ? "line active" : "line"}></span>
          <span className={nav ? "line active" : "line"}></span>
          <span className={nav ? "line active" : "line"}></span>
        </button>
        <div className={nav ? "nav-links active" : "nav-links"}>
          <ul>
            <li>
              <NavLink to="/" onClick={() => setNav(false)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={() => setNav(false)}>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/courses" onClick={() => setNav(false)}>
                Courses
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={() => setNav(false)}>
                Contact Us
              </NavLink>
            </li>
            <li>
              <button className="google-button">
                <span className="tooltip">Launching soon!</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;