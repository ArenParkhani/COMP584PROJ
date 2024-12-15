// src/components/PartForm.js

import React, { useState } from 'react';

const PartForm = ({ addPart }) => {
  const [newPart, setNewPart] = useState({
    name: '',
    carModel: '',
    price: '',
    description: '',
    image: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPart({
      ...newPart,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPart.name && newPart.carModel && newPart.price && newPart.description) {
      addPart(newPart);  // Pass the new part to the parent component
      setNewPart({ name: '', carModel: '', price: '', description: '', image: '' });  // Reset form
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <div className="part-form">
      <h2>Add New Part</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={newPart.name}
          onChange={handleChange}
          placeholder="Part Name"
          required
        />
        <input
          type="text"
          name="carModel"
          value={newPart.carModel}
          onChange={handleChange}
          placeholder="Car Model"
          required
        />
        <input
          type="number"
          name="price"
          value={newPart.price}
          onChange={handleChange}
          placeholder="Price"
          required
        />
        <textarea
          name="description"
          value={newPart.description}
          onChange={handleChange}
          placeholder="Description"
          required
        ></textarea>
        <input
          type="file"
          name="image"
          onChange={(e) => setNewPart({ ...newPart, image: e.target.files[0] })}
          placeholder="Upload Image"
        />
        <button type="submit">Add Part</button>
      </form>
    </div>
  );
};

export default PartForm;
