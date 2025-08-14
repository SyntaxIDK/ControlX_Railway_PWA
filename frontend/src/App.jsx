import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from './components/SplashScreen';
import LanguageSelection from './components/LanguageSelection';
import EmployeeRegistration from './components/EmployeeRegistration';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/language" element={<LanguageSelection />} />
        <Route path="/register" element={<EmployeeRegistration />} />
      </Routes>
    </Router>
  );
};

export default App;