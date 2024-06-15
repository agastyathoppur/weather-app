// WeatherPage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WeatherPage.css';

const WeatherPage: React.FC = () => {
  const navigate = useNavigate();

  const handleShowTemperature = () => {
    navigate('/temperature');
  };

  const handleShowHumidity = () => {
    navigate('/humidity');
  };

  const handleBackButtonClick = () => {
    navigate('/');
  };

  return (
    <div className="weather-page">
      <h2>Weather Information</h2>
      <div className="button-container">
        <button className="button" onClick={handleShowTemperature}>Show Temperature</button>
        <button className="button" onClick={handleShowHumidity}>Show Humidity</button>
        <button className="button" onClick={handleBackButtonClick}>Back to Home</button>
      </div>
    </div>
  );
};

export default WeatherPage;
