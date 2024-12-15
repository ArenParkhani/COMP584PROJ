import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar'; // Import Navbar component
import './Home.css'; // Import your CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      {/* Navbar */}
      <Navbar /> 

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Welcome to CarWorld</h1>
          <p>Explore the latest car brands, models, and parts</p>
          <div className="cta-buttons">
            <Link to="/car-brands">
              <button className="cta-btn">Explore Car Brands</button>
            </Link>
            <Link to="/cars">
              <button className="cta-btn">Browse Cars</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Additional Content Section */}
      <section className="info-section">
        <div className="info-card">
          <h2>Find Your Dream Car</h2>
          <p>Browse a variety of car models and parts to suit your needs.</p>
          <Link to="/cars">
            <button className="info-btn">Start Browsing</button>
          </Link>
        </div>
        <div className="info-card">
          <h2>Car Brands</h2>
          <p>Discover top car brands and the latest models they offer.</p>
          <Link to="/car-brands">
            <button className="info-btn">See Brands</button>
          </Link>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2024 CarWorld. All rights reserved.</p>
        <div className="footer-links">
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </div>
      </footer>
    </div>
  );
};

export default Home;
