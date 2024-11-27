import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from './Components/WelcomePage';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import LogoPage from './Components/LogoPage';
import PosterPage from './Components/PosterPage';
import VisitingCardPage from './Components/VisitingCardPage';
import ProfilePage from './Components/ProfilePage';
import Login from './Components/Login';
import Signup from './Components/Signup';

function App() {
  
  return (
    <Router>
      <>
        <div className='Container'>
          <Navbar/>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/logo" element={<LogoPage />} />
            <Route path="/poster" element={<PosterPage />} />
            <Route path="/visiting-card" element={<VisitingCardPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App;
