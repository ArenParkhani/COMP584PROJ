import React, { useState } from "react";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [notification, setNotification] = useState(""); // State for success message
    const { login } = useAuth();
    const navigate = useNavigate(); // Hook for navigation

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://217.77.7.40:5000/api/Auth/Login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                const data = await response.json();
                login(); // Update authentication state
                setNotification(`Login successful! Welcome, ${data.username}.`);
                setTimeout(() => {
                    navigate("/"); // Redirect to home page
                }, 2000); // Delay for 2 seconds to show the success message
            } else {
                setNotification("Invalid credentials. Please try again.");
            }
        } catch (error) {
            console.error("Error during login:", error);
            setNotification("An error occurred. Please try again later.");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
            <h1 className="text-3xl font-bold mb-6">Login</h1>
            <form
                onSubmit={handleLogin}
                className="bg-gray-800 p-6 rounded-lg shadow-lg w-80 space-y-4"
            >
                <div>
                    <label className="block mb-2">Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full p-2 rounded bg-gray-700 text-white"
                        required
                    />
                </div>
                <div>
                    <label className="block mb-2">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 rounded bg-gray-700 text-white"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded"
                >
                    Login
                </button>
            </form>

            {/* Notification */}
            {notification && (
                <div
                    className={`mt-4 p-4 rounded ${
                        notification.startsWith("Login successful")
                            ? "bg-green-500"
                            : "bg-red-500"
                    }`}
                >
                    {notification}
                </div>
            )}
        </div>
    );
};

export default Login;