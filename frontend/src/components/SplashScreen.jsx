import React from 'react';
import { useNavigate } from 'react-router-dom';

const SplashScreen = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/language');
  };

  return (
    <div className="flex flex-col justify-between items-center h-screen bg-blue-500 text-white">
      <img
        src="/train.svg" 
        alt="Railway Logo"
        className="w-[80%] h-[80%] object-contain mb-4"
      />
      
      <div className="text-lg cursor-pointer mt-4" onClick={handleNext}>
        <span className="text-white">→ Swipe to continue</span>
      </div>

      <img
        src="/mountain.svg" 
        alt="Mountain"
        className="w-full h-[30%] object-cover"
      />
    </div>
  );
};

export default SplashScreen;