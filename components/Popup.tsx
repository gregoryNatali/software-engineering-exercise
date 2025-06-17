import React from 'react';

interface PopupProps {
  message: string;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ message, onClose }) => {
  // Prevent click propagation from modal content to overlay, allowing overlay click to close
  const handleDialogClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 z-[1000] animate-fadeIn" // Using a simple conceptual fadeIn, actual animation depends on Tailwind config or custom CSS if allowed
      onClick={onClose} // Close on overlay click
      role="dialog"
      aria-modal="true"
      aria-labelledby="popup-heading"
    >
      <div
        className="bg-white rounded-2xl shadow-3xl p-6 sm:p-8 w-full max-w-lg text-center transform animate-scaleUp" // Using a simple conceptual scaleUp
        onClick={handleDialogClick} // Stop propagation
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-150 ease-in-out"
          aria-label="Close popup"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="mb-5">
          {/* You can replace this with a more specific icon if desired */}
          <span role="img" aria-label="Sparkles" className="text-6xl sm:text-7xl">✨</span>
        </div>
        
        <h2 id="popup-heading" className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">
          A Friendly Greeting
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 mb-8">
          {message}
        </p>
        
        <button
          onClick={onClose}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transform transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75 text-base sm:text-lg"
        >
          Awesome!
        </button>
      </div>
      {/* Basic keyframes for conceptual animation (Tailwind does not inject these by default without config) */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleUp {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out forwards; }
        .animate-scaleUp { animation: scaleUp 0.3s ease-out forwards; }
        .shadow-3xl { box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 10px 10px -5px rgba(0, 0, 0, 0.1); }
      `}</style>
    </div>
  );
};

export default Popup;