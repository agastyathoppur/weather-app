// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import HomePage from './HomePage';
import WeatherPage from './WeatherPage';
import TemperaturePage from './TemperaturePage';
import HumidityPage from './HumidityPage';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/weather" element={<WeatherPage />} />
            <Route path="/temperature" element={<TemperaturePage />} />
            <Route path="/humidity" element={<HumidityPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
