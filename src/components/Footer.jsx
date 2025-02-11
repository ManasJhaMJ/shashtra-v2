import React from 'react'
import logoName from '../assets/shashtra-font-nobg.png'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-group'>
                <div className='footer-logo'>
                    <img src={logoName} alt="" />
                </div>
                <div className='social-media'>
                    <a href='https://www.twitter.com/shashtra/' target='_blank' rel='noreferrer'>
                        <FaTwitter fill='#5c2e00' size={23} />
                    </a>
                    <a href='https://www.instagram.com/shashtra/' target='_blank' rel='noreferrer'>
                        <FaInstagram fill='#5c2e00' size={23} />
                    </a>
                    <a href='https://www.facebook.com/shashtra/' target='_blank' rel='noreferrer'>
                        <FaFacebook fill='#5c2e00' size={23} />
                    </a>
                </div>
            </div>

            <hr />

            <div className='footer-group'>
                <div className='footer-text'>
                    @2025 Shashtra | All Rights Reserved
                </div>
                <div className='footer-links'>
                    <Link to='/about'>About Us</Link>
                    <Link to='/courses'>Courses</Link>
                    <Link to='/contact'>Contact Us</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer