// src/constants.js

export const CAR_BRANDS = [
    {
      id: 1,
      name: 'Brand 1',
      image: './assets/images/car.jpg',  // You can use different images here later
      description: 'Luxury, performance, and style - Explore our exclusive models.',
    },
    {
      id: 2,
      name: 'Brand 2',
      image: '../assets/images/car.jpg',
      description: 'Revolutionizing the automobile industry with innovation and design.',
    },
    {
      id: 3,
      name: 'Brand 3',
      image: '../assets/images/car.jpg',
      description: 'A history of excellence and cutting-edge technology in every model.',
    },
    {
      id: 4,
      name: 'Brand 4',
      image: '../assets/images/car.jpg',
      description: 'Setting new standards for comfort and performance in every vehicle.',
    },
  ];
  

// carConstants.js
export const carData = [
  {
    id: 1,
    name: 'Toyota Corolla',
    brand: 'Toyota',
    model: 'Corolla',
    year: 2020,
    description: 'A reliable and efficient sedan.',
    image: '../assets/images/car.jpg' // Path to your image
  },
  {
    id: 2,
    name: 'Honda Civic',
    brand: 'Honda',
    model: 'Civic',
    year: 2021,
    description: 'Sporty and fuel-efficient car.',
    image: '../assets/images/car.jpg' // Path to your image
  },
  {
    id: 3,
    name: 'BMW X5',
    brand: 'BMW',
    model: 'X5',
    year: 2023,
    description: 'A luxury SUV with cutting-edge technology.',
    image: '../assets/images/car.jpg' // Path to your image
  },
  {
    id: 4,
    name: 'Ford Mustang',
    brand: 'Ford',
    model: 'Mustang',
    year: 2022,
    description: 'A powerful sports car with a thrilling performance.',
    image: '../assets/images/car.jpg' // Path to your image
  }
];


// src/constants/partConstants.js

export const partData = [
  {
    id: 1,
    name: 'Brake Pad',
    carModel: 'Toyota Corolla',
    price: 50,
    description: 'High-quality brake pads for superior performance.',
    image: '../assets/images/car.jpg' // Path to the image
  },
  {
    id: 2,
    name: 'Engine Oil',
    carModel: 'Honda Civic',
    price: 30,
    description: 'Premium engine oil for smooth engine operation.',
    image: '../assets/images/car.jpg'
  },
  {
    id: 3,
    name: 'Air Filter',
    carModel: 'BMW X5',
    price: 40,
    description: 'Replacement air filter for optimal engine performance.',
    image: '../assets/images/car.jpg'
  },
  {
    id: 4,
    name: 'Spark Plugs',
    carModel: 'Ford Mustang',
    price: 25,
    description: 'Durable spark plugs for better fuel efficiency.',
    image: '../assets/images/car.jpg'
  }
];
