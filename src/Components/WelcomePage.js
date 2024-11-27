import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WelcomePage.css';

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="welcome-page">
      <h1>Welcome to Designer Platform</h1>
      <p>Find the best designers or showcase your designs!</p>
      <div className="button-container">
        <button className="welcome-button" onClick={() => navigate('/home')}>
          Find Best Designer
        </button>
        <button className="welcome-button" onClick={() => navigate('/post-design')}>
          Post Your Design
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
