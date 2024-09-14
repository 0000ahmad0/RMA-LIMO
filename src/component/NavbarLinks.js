import '../App.css';
import React from 'react';
import {NavLink } from 'react-router-dom'; // Removed unused imports
import rma from '../assets/images/rma.png';

const NavbarLinks = () => {
  return (
    <nav className="navbar2">
      <div className="navbar-left">
        <NavLink to="/rma">
          <img src={rma} alt="Logo" className="logo" />
        </NavLink>
      </div>
      <div className="navbar-center">
        <ul className="navbar-links">
          <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Service</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About us</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink></li>
          <li><NavLink to="/careers" className={({ isActive }) => isActive ? 'active' : ''}>Careers & Affiliates</NavLink></li>
          <li><NavLink to="/profile" className={({ isActive }) => isActive ? 'active' : ''}>Create A Profile</NavLink></li>
          <li><NavLink to="/reservations" className={({ isActive }) => isActive ? 'active' : ''}>Reservations</NavLink></li>
        </ul>
      </div>
      <div className="navbar-right">
        <NavLink to="/reservation" className="cta-button">Make a Reservation</NavLink>
      </div>
    </nav>
  );
};

export default NavbarLinks;
