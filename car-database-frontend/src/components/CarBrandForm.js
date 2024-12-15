import React, { useState } from 'react';
import { createCarBrand } from '../services/api';

const CarBrandForm = () => {
  const [brandName, setBrandName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createCarBrand({ brandName });
    } catch (error) {
      console.error('Failed to create car brand', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Car Brand Name" value={brandName} onChange={(e) => setBrandName(e.target.value)} />
      <button type="submit">Add Car Brand</button>
    </form>
  );
};

export default CarBrandForm;
