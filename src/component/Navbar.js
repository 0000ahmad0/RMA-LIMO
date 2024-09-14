import React from 'react';
import { FaInstagram,FaPhone, FaSnapchatGhost, FaFacebookF, FaTwitter } from 'react-icons/fa'; // Correct Font Awesome icons
import NavbarLinks from './NavbarLinks'
import '../App.css';

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-social">
          <a href="https://instagram.comm" className="social-icon"><FaInstagram /></a>
          <a href="https://snapchat.comm" className="social-icon"><FaSnapchatGhost /></a>
          <a href="https://facebook.com" className="social-icon"><FaFacebookF /></a>
          <a href="https://twitter.com" className="social-icon"><FaTwitter /></a>
        </div>
        <ul className="navbar-menu">
          <button className="navbar-button">LOGIN</button>
          <button className="navbar-button">SIGN IN</button>
          <button className="navbar-button">GET A QUOTE</button>
          <button className="navbar-button">QUICK RECEIPT</button>
          <button className="navbar-button">INVOICES</button>
        </ul>
        <div className="navbar-social">
        <a href="https://Call.com" className="social-icon"><FaPhone /></a>
        </div>
      </nav>
      <NavbarLinks />
    </>
  );
}

export default Navbar;
