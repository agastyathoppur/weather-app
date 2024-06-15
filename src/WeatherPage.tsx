import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
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
    <div className="weather-page content">
      <h2>Weather Information</h2>
      <p>Get the latest weather updates to plan your day accordingly.</p>
      <div className="button-container">
        <button className="button" onClick={handleShowTemperature}>
          Show Temperature
        </button>
        <button className="button" onClick={handleShowHumidity}>
          Show Humidity
        </button>
        <button className="button" onClick={handleBackButtonClick}>Back to Home</button>
      </div>
      <Footer />
    </div>
  );
};

export default WeatherPage;
