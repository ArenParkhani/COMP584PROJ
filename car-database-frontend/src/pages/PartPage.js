// src/pages/PartPage.js
import React, { useState } from 'react';
import PartForm from '../components/PartForm';
import { partData } from '../constants';
import Navbar from '../components/Navbar';

import './PartPage.css'

const PartPage = () => {
  const [parts, setParts] = useState(partData);

  // Function to add a new part
  const addPart = (newPart) => {
    setParts([...parts, { ...newPart, id: parts.length + 1 }]);
  };

  return (
    <div className="part-page">
      <Navbar />
      <h1>Car Parts</h1>

      {/* Part Form to Add New Parts */}
      <PartForm addPart={addPart} />

      {/* Part List Display */}
      <section className="part-list">
        <h2>Available Parts</h2>
        {parts.length > 0 ? (
          <ul>
            {parts.map((part) => (
              <li key={part.id} className="part-item">
                <div className="part-image">
                  <img src={part.image} alt={part.name} />
                </div>
                <div className="part-info">
                  <h3>{part.name}</h3>
                  <p><strong>Car Model:</strong> {part.carModel}</p>
                  <p><strong>Price:</strong> ${part.price}</p>
                  <p><strong>Description:</strong> {part.description}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No parts available at the moment.</p>
        )}
      </section>
    </div>
  );
};

export default PartPage;
