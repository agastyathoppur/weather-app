import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleWeatherButtonClick = () => {
    navigate('/weather');
  };

  return (
    <div className="home-page">
      <h2>Welcome to the Wells Fargo Weather App!</h2>
      <button className="button" onClick={handleWeatherButtonClick}>Go to Weather Page</button>
    </div>
  );
};

export default HomePage;
