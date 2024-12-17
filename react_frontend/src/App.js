import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CarBrands from "./components/CarBrands";
import CarModels from "./components/CarModels";
import Login from "./components/Login";

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<CarBrands />} />
        <Route path="/car-brands" element={<CarBrands />} />
        <Route path="/car-models/:brandId" element={<CarModels />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;