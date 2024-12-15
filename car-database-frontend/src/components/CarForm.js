import React, { useState } from 'react';

const CarForm = ({ addCar }) => {
  const [carDetails, setCarDetails] = useState({
    brand: '',
    model: '',
    year: '',
  });

  const handleChange = (e) => {
    setCarDetails({
      ...carDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCar(carDetails);
    setCarDetails({ brand: '', model: '', year: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Brand:
        <input
          type="text"
          name="brand"
          value={carDetails.brand}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Model:
        <input
          type="text"
          name="model"
          value={carDetails.model}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Year:
        <input
          type="number"
          name="year"
          value={carDetails.year}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Add Car</button>
    </form>
  );
};

export default CarForm;
