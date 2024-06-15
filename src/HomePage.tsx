import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import './HomePage.css';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleWeatherButtonClick = () => {
    navigate('/weather');
  };

  return (
    <div className="home-page content">
      <h2>Welcome to the Wells Fargo Weather App!</h2>
      <p>This app provides current weather information, including temperature and humidity levels, to help you stay informed about the weather conditions in your area.</p>
      <button className="button" onClick={handleWeatherButtonClick}>Go to Weather Page</button>
      <Footer />
    </div>
  );
};

export default HomePage;
