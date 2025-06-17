import React, { useState, useCallback } from 'react';
import Popup from './components/Popup';

const App: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  const handleOpenPopup = useCallback(() => {
    setIsPopupOpen(true);
  }, []);

  const handleClosePopup = useCallback(() => {
    setIsPopupOpen(false);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 p-4 selection:bg-indigo-500 selection:text-white">
      <div className="text-center space-y-8">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-pulse">
          Interactive Greeting
        </h1>
        <p className="text-lg sm:text-xl text-indigo-300 max-w-md mx-auto">
          Experience a delightful "Hello World!" message by clicking the button below. It's simple, elegant, and built with modern web technologies.
        </p>
        <button
          onClick={handleOpenPopup}
          className="bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-700 hover:to-indigo-800 text-white font-semibold py-4 px-10 rounded-xl shadow-xl hover:shadow-2xl transform transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-60 text-lg"
          aria-label="Open greeting popup"
        >
          Say Hello
        </button>
      </div>

      {isPopupOpen && (
        <Popup message="Hello World!" onClose={handleClosePopup} />
      )}
    </div>
  );
};

export default App;