import React, { useState } from 'react';
import CarForm from '../components/CarForm'; // Correct path to CarForm
import { carData } from '../constants'; // Correct import path for constants
import Navbar from '../components/Navbar'; // Import Navbar component
import Footer from '../components/Footer'; // Import Footer component
import './CarPage.css'; // Import CarPage CSS for styling

const CarPage = () => {
  const [cars, setCars] = useState(carData); // Use the car data from constants

  // Function to add a new car to the list
  const addCar = (newCar) => {
    setCars([...cars, newCar]);
  };

  return (
    <div className="car-page-container">
      {/* Navbar */}
      <Navbar />

      <h1>Cars</h1>

      {/* Display List of Cars */}
      <section className="car-list">
        <h2>Available Cars</h2>
        {cars.length > 0 ? (
          <ul>
            {cars.map((car) => (
              <li key={car.id} className="car-item">
                <img src={car.image} alt={car.name} className="car-image" />
                <div>
                  <h3>{car.name}</h3>
                  <p><strong>Brand:</strong> {car.brand}</p>
                  <p><strong>Model:</strong> {car.model}</p>
                  <p><strong>Year:</strong> {car.year}</p>
                  <p><strong>Description:</strong> {car.description}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No cars available at the moment.</p>
        )}
      </section>

      {/* Car Form to Add a New Car (Below the List of Cars) */}
      <CarForm addCar={addCar} />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CarPage;
