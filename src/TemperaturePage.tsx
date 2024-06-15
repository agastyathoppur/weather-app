import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperatureHigh, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import './TemperaturePage.css';

const TemperaturePage: React.FC = () => {
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate('/weather');
  };

  return (
    <div className="temperature-page content">
      <h2>Temperature Information</h2>
      <p>Current temperature details along with to give you a complete weather overview.</p>
      <div className="info">
        <p><FontAwesomeIcon icon={faTemperatureHigh} /> Temperature: 40°C</p>
      </div>
      <button className="button" onClick={handleBackButtonClick}>Back to Weather</button>
      <Footer />
    </div>
  );
};

export default TemperaturePage;
