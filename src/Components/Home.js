import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Choose Your Design</h1>
      <div className="design-section">
        
        {/* Logo Section */}
        <div className="design-container">
          <Link to="/logos">
            <img src="../assets/images/1.png" alt="Logo Design" className="design-image" />
          </Link>
          <h3>Logo Design</h3>
        </div>
        
        {/* Poster Section */}
        <div className="design-container">
          <Link to="/posters">
            <img src="../assets/images/2.png" alt="Poster Design" className="design-image" />
          </Link>
          <h3>Poster Design</h3>
        </div>
        
        {/* Visiting Card Section */}
        <div className="design-container">
          <Link to="/visiting-cards">
            <img src="../assets/images/3.png" alt="Visiting Card Design" className="design-image" />
          </Link>
          <h3>Visiting Card Design</h3>
        </div>
        
      </div>
    </div>
  );
};

export default Home;

