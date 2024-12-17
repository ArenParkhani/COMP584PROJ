import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Modal from "./Modal";
import { useAuth } from "../AuthContext";

const CarModels = () => {
    const { brandId } = useParams(); // Get brandId from the URL
    const [carModels, setCarModels] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({ id: null, model: "", year: "", features: "" });
    const [notification, setNotification] = useState({ message: "", type: "" });
    const { isAuthenticated } = useAuth(); // Get authentication state
    const navigate = useNavigate();

    useEffect(() => {
        fetchCarModels();
    }, [brandId]);

    const fetchCarModels = async () => {
        try {
            const response = await axios.get(`http://217.77.7.40:5000/api/Car/ByBrand/${brandId}`);
            setCarModels(response.data);
        } catch (error) {
            console.error("Error fetching car models:", error);
        }
    };

    const handleSave = async () => {
      try {
          if (formData.id) {
              // Update existing car model
              await axios.put(`http://217.77.7.40:5000/api/Car/${formData.id}`, formData);
              setNotification({ message: "Car model updated successfully!", type: "success" });
          } else {
              // Add new car model
              const payload = {
                  ...formData,
                  year: parseInt(formData.year, 10), // Ensure year is an integer
                  brandId,
              };
              console.log("Form Data Add Model", {
                "year": formData.year,
                "features": formData.features,
                "brandId": brandId,
                "model": formData.model
            });
              await axios.post("http://217.77.7.40:5000/api/Car", {
                "year": formData.year,
                "features": formData.features,
                "brandId": brandId,
                "model": formData.model
            });
              setNotification({ message: "Car model added successfully!", type: "success" });
          }
          fetchCarModels(); // Refresh the car models list
          setIsModalOpen(false); // Close the modal
      } catch (error) {
          setNotification({ message: "Error saving car model. Please try again.", type: "error" });
          console.error("Error saving car model:", error);
  
          // Display backend validation error if available
          if (error.response && error.response.status === 400) {
              alert(error.response.data);
          }
      }
  };

    const closeModal = () => {
        setIsModalOpen(false);
        setFormData({ id: null, model: "", year: "", features: "" });
    };

    const handleAddOrEdit = (model = null) => {
        if (!isAuthenticated) {
            alert("You must be logged in to perform this action.");
            return;
        }
        setFormData(model || { id: null, model: "", year: "", features: "" });
        setIsModalOpen(true);
    };

    return (
        <div className="p-6">
            {/* Notifications */}
            {notification.message && (
                <div
                    className={`mb-4 p-4 rounded ${
                        notification.type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"
                    }`}
                >
                    {notification.message}
                </div>
            )}

            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Car Models</h1>
                <div className="flex space-x-4">
                    <button
                        className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-200"
                        onClick={() => handleAddOrEdit()}
                    >
                        Add Car Model
                    </button>
                    <button
                        className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-200"
                        onClick={() => navigate("/car-brands")}
                    >
                        Back to Brands
                    </button>
                </div>
            </div>

            {/* Table */}
            <table className="w-full border-collapse border border-gray-700">
                <thead>
                    <tr>
                        <th className="border border-gray-700 px-4 py-2">ID</th>
                        <th className="border border-gray-700 px-4 py-2">Model</th>
                        <th className="border border-gray-700 px-4 py-2">Year</th>
                        <th className="border border-gray-700 px-4 py-2">Features</th>
                        <th className="border border-gray-700 px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {carModels.map((model) => (
                        <tr key={model.id}>
                            <td className="border border-gray-700 px-4 py-2">{model.id}</td>
                            <td className="border border-gray-700 px-4 py-2">{model.model}</td>
                            <td className="border border-gray-700 px-4 py-2">{model.year}</td>
                            <td className="border border-gray-700 px-4 py-2">{model.features}</td>
                            <td className="border border-gray-700 px-4 py-2">
                                <button
                                    className="bg-white text-black px-3 py-1 rounded-lg font-semibold hover:bg-gray-200 mr-2"
                                    onClick={() => handleAddOrEdit(model)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="bg-white text-black px-3 py-1 rounded-lg font-semibold hover:bg-gray-200"
                                    onClick={() => {
                                        setCarModels((prev) => prev.filter((car) => car.id !== model.id));
                                    }}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Modal */}
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <h2 className="text-xl font-bold mb-6 text-center">
                    {formData.id ? "Edit" : "Add"} Car Model
                </h2>
                <form className="space-y-6">
                    {/* Model Field */}
                    <div className="grid grid-cols-3 items-center gap-4">
                        <label className="text-right font-semibold">Model:</label>
                        <input
                            type="text"
                            className="col-span-2 w-full p-3 rounded-lg bg-gray-200 text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={formData.model}
                            onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                        />
                    </div>

                    {/* Year Field */}
                    <div className="grid grid-cols-3 items-center gap-4">
                        <label className="text-right font-semibold">Year:</label>
                        <input
                            type="text"
                            className="col-span-2 w-full p-3 rounded-lg bg-gray-200 text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={formData.year}
                            onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                        />
                    </div>

                    {/* Features Field */}
                    <div className="grid grid-cols-3 items-center gap-4">
                        <label className="text-right font-semibold">Features:</label>
                        <input
                            type="text"
                            className="col-span-2 w-full p-3 rounded-lg bg-gray-200 text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={formData.features}
                            onChange={(e) => setFormData({ ...formData, features: e.target.value })}
                        />
                    </div>

                    {/* Save Button */}
                    <div className="flex justify-end">
                        <button
                            type="button"
                            className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
                            onClick={handleSave}
                        >
                            Save
                        </button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default CarModels;