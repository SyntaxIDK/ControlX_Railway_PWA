import React from 'react';
import { useNavigate } from 'react-router-dom';

const LanguageSelection = () => {
  const navigate = useNavigate();

  const handleLanguageSelect = () => {
    // After language selection, navigate to the Employee Registration page
    navigate('/register');
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-blue-500 text-white">
      <img
        src="/train2.svg" // change to your logo or svg later
        alt="Railway Logo"
        className="w-40 h-auto mb-8"
      />
      
      <h2 className="text-3xl font-semibold mb-12">Choose your language of preference</h2>

      {/* Language options in a horizontal layout */}
      <div className="flex gap-8">
        <span
          className="text-white text-xl font-medium cursor-pointer hover:underline"
          onClick={handleLanguageSelect}
        >
          English
        </span>
        <span
          className="text-white text-xl font-medium cursor-pointer hover:underline"
          onClick={handleLanguageSelect}
        >
          Sinhala
        </span>
        <span
          className="text-white text-xl font-medium cursor-pointer hover:underline"
          onClick={handleLanguageSelect}
        >
          Tamil
        </span>
      </div>
    </div>
  );
};

export default LanguageSelection;