import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTint, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import './HumidityPage.css';

const HumidityPage: React.FC = () => {
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate('/weather');
  };

  return (
    <div className="humidity-page content">
      <h2>Humidity Information</h2>
      <p>Check the current humidity levels to better understand the weather conditions.</p>
      <div className="info">
        <p><FontAwesomeIcon icon={faTint} /> Humidity: 66%</p>
      </div>
      <button className="button" onClick={handleBackButtonClick}>Back to Weather</button>
      <Footer />
    </div>
  );
};

export default HumidityPage;
