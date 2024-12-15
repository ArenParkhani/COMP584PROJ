import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  // Import the CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/" className="navbar-link">CARS</Link> {/* Replace with logo if needed */}
        </div>
        <ul className="navbar-list">
          <li><Link to="/" className="navbar-link">Home</Link></li>
          <li><Link to="/car-brands" className="navbar-link">Car Brands</Link></li>
          <li><Link to="/cars" className="navbar-link">Cars</Link></li>
          <li><Link to="/parts" className="navbar-link">Parts</Link></li>
          <li><Link to="/profile" className="navbar-link">Profile</Link></li>
          <li><Link to="/login" className="navbar-link">Login</Link></li>
          <li><Link to="/register" className="navbar-link">Register</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
