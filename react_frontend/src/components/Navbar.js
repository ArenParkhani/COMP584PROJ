import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center shadow-md">
      {/* Left Section: Navigation Links */}
      <div className="flex items-center space-x-4">
        <button
          className="bg-white text-black px-5 py-2 rounded-lg font-semibold hover:bg-gray-200"
          onClick={() => navigate("/car-brands")}
        >
          Car Brands
        </button>
        <button
          className="bg-white text-black px-5 py-2 rounded-lg font-semibold hover:bg-gray-200"
          onClick={() => navigate("/car-models")}
        >
          Car Models
        </button>
      </div>

      {/* Right Section: Login Button */}
      <div>
        <button
          className="bg-white text-black px-6 py-2 rounded-lg font-semibold hover:bg-gray-200"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;