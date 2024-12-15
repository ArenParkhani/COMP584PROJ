import React, { useState } from 'react';
import { registerUser } from '../services/api';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './RegisterForm.css'; // Optional: Add custom styles for your registration page

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Sending data:', { username, password });
      await registerUser({ username, password });
      navigate('/login');
    } catch (error) {
      console.error('Registration failed', error);
    }
  };
  

  return (
    <div className="register-page">
      <Navbar />  {/* Add Navbar */}
      <div className="register-container">
        <h2>Create an Account</h2>
        <form onSubmit={handleSubmit} className="register-form">
          <div className="form-group">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="register-btn">Register</button>
        </form>
      </div>
      <Footer />  {/* Add Footer */}
    </div>
  );
};

export default RegisterForm;
