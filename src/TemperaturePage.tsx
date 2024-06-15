// TemperaturePage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TemperaturePage.css';

const TemperaturePage: React.FC = () => {
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate('/weather');
  };

  return (
    <div className="temperature-page">
      <h2>Temperature Information</h2>
      <div className="info">
        <p>Temperature: 40°C</p>
      </div>
      <button className="button" onClick={handleBackButtonClick}>Back to Weather</button>
    </div>
  );
};

export default TemperaturePage;
