import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext"; // Authentication context

const CarBrands = () => {
  const [carBrands, setCarBrands] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ id: null, name: "", country: "" });
  const { isAuthenticated } = useAuth(); // Check if user is logged in
  const navigate = useNavigate();

  useEffect(() => {
    fetchCarBrands();
  }, []);

  const fetchCarBrands = async () => {
    try {
      const response = await axios.get("http://217.77.7.40:5000/api/CarBrand");
      setCarBrands(response.data);
    } catch (error) {
      console.error("Error fetching car brands:", error);
    }
  };

  const handleSave = async () => {
    try {
      if (formData.id) {
        // Edit brand
        await axios.put(`http://217.77.7.40:5000/api/CarBrand/${formData.id}`, formData);
      } else {
        // Add new brand
        console.log("Form Data:", formData);
        await axios.post("http://217.77.7.40:5000/api/CarBrand",{name:formData.name,country:formData.country});
      }
      fetchCarBrands();
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error saving car brand:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://217.77.7.40:5000/api/CarBrand/${id}`);
      setCarBrands(carBrands.filter((brand) => brand.id !== id));
    } catch (error) {
      console.error("Error deleting car brand:", error);
    }
  };

  const handleAddOrEdit = (brand = null) => {
    if (!isAuthenticated) {
      alert("You must be logged in to perform this action.");
      navigate("/login");
      return;
    }
    setFormData(brand || {name: "", country: "" });
    setIsModalOpen(true);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Car Brands</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 mb-4"
        onClick={() => handleAddOrEdit()}
      >
        Add Brand
      </button>
      <table className="table-auto w-full border-collapse border border-gray-700">
        <thead>
          <tr>
            <th className="border border-gray-700 px-4 py-2">ID</th>
            <th className="border border-gray-700 px-4 py-2">Name</th>
            <th className="border border-gray-700 px-4 py-2">Country</th>
            <th className="border border-gray-700 px-4 py-2">Number of Models</th>
            <th className="border border-gray-700 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {carBrands.map((brand) => (
            <tr key={brand.id}>
              <td className="border border-gray-700 px-4 py-2">{brand.id}</td>
              <td className="border border-gray-700 px-4 py-2">{brand.name}</td>
              <td className="border border-gray-700 px-4 py-2">{brand.country}</td>
              <td className="border border-gray-700 px-4 py-2">{brand.modelCount || 0}</td>
              <td className="border border-gray-700 px-4 py-2">
                <button
                  className="text-blue-400 hover:underline mr-2"
                  onClick={() => navigate(`/car-models/${brand.id}`)}
                >
                  View Models
                </button>
                <button
                  className="text-green-400 hover:underline mr-2"
                  onClick={() => handleAddOrEdit(brand)}
                >
                  Edit
                </button>
                <button
                  className="text-red-400 hover:underline"
                  onClick={() => handleDelete(brand.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for Add/Edit */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-xl font-bold mb-4">{formData.id ? "Edit" : "Add"} Brand</h2>
            <form>
              <div className="mb-4">
                <label className="block mb-2">Name</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Country</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-600"
                  onClick={handleSave}
                >
                  Save
                </button>
                <button
                  type="button"
                  className="ml-2 bg-gray-300 text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-400"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarBrands;