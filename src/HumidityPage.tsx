// HumidityPage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HumidityPage.css';

const HumidityPage: React.FC = () => {
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate('/weather');
  };

  return (
    <div className="humidity-page">
      <h2>Humidity Information</h2>
      <div className="info">
        <p>Humidity: 66%</p>
      </div>
      <button className="button" onClick={handleBackButtonClick}>Back to Weather</button>
    </div>
  );
};

export default HumidityPage;
