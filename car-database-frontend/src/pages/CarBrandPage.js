// src/pages/CarBrandPage.js
import React from 'react';
import Navbar from '../components/Navbar'; // Import Navbar component
import { CAR_BRANDS } from '../constants'; // Import the car brands data
import './CarBrandPage.css'; // Import specific styling for Car Brand page

const CarBrandPage = () => {
  return (
    <div className="app-container">
      {/* Navbar */}
      <Navbar />

      {/* Main Content Section */}
      <div className="main-content">
        {/* Hero Section */}
        <section className="car-brand-hero">
          <div className="car-brand-hero-text">
            <h1>Discover Top Car Brands</h1>
            <p>Explore the most prestigious car brands around the world.</p>
          </div>
        </section>

        {/* Car Brands List Section */}
        <section className="car-brands-list">
          {CAR_BRANDS.map(brand => (
            <div key={brand.id} className="brand-card">
              <img src={brand.image} alt={brand.name} className="brand-image" />
              <h3>{brand.name}</h3>
              <p>{brand.description}</p>
            </div>
          ))}
        </section>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2024 CarWorld. All rights reserved.</p>
        <div className="footer-links">
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
          <a href="/privacy-policy">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
};

export default CarBrandPage;
