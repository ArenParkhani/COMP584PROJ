import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white text-black p-6 rounded-lg shadow-lg w-1/3 relative">
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 bg-gray-200 text-black px-3 py-1 rounded-full hover:bg-gray-300"
          onClick={onClose}
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;