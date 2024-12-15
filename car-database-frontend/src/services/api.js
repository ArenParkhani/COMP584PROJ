import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5036/api/', // Your backend API URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Register User
export const registerUser = async (data) => {
  try {
    const response = await api.post('/register', data);
    return response.data; // Return the response data
  } catch (error) {
    console.error('Error during registration:', error.message);
    throw error; // Rethrow the error to be handled in the component
  }
};


// Login User
export const loginUser = async (data) => {
  return await api.post('/login', data);
};

// Create Car Brand
export const createCarBrand = async (data) => {
  return await api.post('/car-brands', data);
};

// Create Car
export const createCar = async (data) => {
  return await api.post('/cars', data);
};

// Create Part
export const createPart = async (data) => {
  return await api.post('/parts', data);
};

export default api;
