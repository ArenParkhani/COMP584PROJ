// src/pages/Profile.js
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Profile.css';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data from auth (localStorage, API, etc.)
    const fetchUserData = async () => {
      // Assuming user data is stored in localStorage after login
      const userData = JSON.parse(localStorage.getItem('user'));
      
      if (userData) {
        setUser(userData);
      } else {
        // Handle the case where no user data is available
        console.log("No user data found");
        // Optionally, redirect to login page if no user is found
      }
    };
    
    fetchUserData();
  }, []);

  if (!user) {
    return <div>Loading...</div>;  // Handle loading state
  }

  return (
    <div className="profile-page">
      <Navbar />
      <div className="profile-content">
        <div className="profile-header">
          <h1>Your Profile</h1>
          <p>Welcome back, {user.name}!</p>
        </div>

        <div className="profile-details">
          <div className="profile-info">
            <img src={user.profileImage || "../assets/images/profile1.jpeg"} alt="Profile" className="profile-image" />
            <div className="profile-data">
              <h2>{user.name}</h2>
              <p>Email: {user.email}</p>
              <p>Location: {user.location || "Not specified"}</p>
              <p>Member Since: {user.memberSince || "N/A"}</p>
            </div>
          </div>

          <div className="profile-actions">
            <button className="edit-btn">Edit Profile</button>
            <button className="logout-btn" onClick={() => { localStorage.removeItem('user'); window.location.href = '/login'; }}>Log Out</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
