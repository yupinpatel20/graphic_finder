// src/pages/VisitingCardPage.js
import React, { useState } from 'react';  // Import useState
import { useNavigate } from 'react-router-dom';
import Modal from '../Components/Modal';  // Assuming Modal is located in this path
import './VisitingCardPage.css';

const VisitingCardPage = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);  // State for modal
  const [selectedImage, setSelectedImage] = useState(null);  // State for selected image

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);  // Set the selected image
    setIsModalOpen(true);  // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false);  // Close the modal
    setSelectedImage(null);  // Reset selected image
  };

  return (
    <div className="design-page">
      <span className="back-arrow" onClick={() => navigate('/home')}>
        ← Back
      </span>
      <h2>Visiting Card Designs</h2>
      <p>Explore our collection of visiting card designs below.</p>
      <div className="logo-gallery">
        {/* Visiting Card Container 1 */}
        <div className="logo-container">
          <div className="user-info">
            <img src="/images/user.png" alt="User Icon" className="user-icon" />
            <span className="username">User1</span>
          </div>
          {/* Only the image has the onClick event handler */}
          <img
            src="/images/bmwvisitingcard.webp"
            alt="Visiting Card 1"
            className="logo-image"
            onClick={() => openModal('/images/bmwvisitingcard.webp')}  // Trigger modal on image click
          />
          <div className="action-icons">
            <span className="like-icon">❤️</span>
            <span className="chat-icon">💬</span>
          </div>
        </div>

        {/* Visiting Card Container 2 */}
        <div className="logo-container">
          <div className="user-info">
            <img src="/images/user.png" alt="User Icon" className="user-icon" />
            <span className="username">User2</span>
          </div>
          {/* Only the image has the onClick event handler */}
          <img
            src="/images/Mercedesvisitingcard.jpeg"
            alt="Visiting Card 2"
            className="logo-image"
            onClick={() => openModal('/images/Mercedesvisitingcard.jpeg')}  // Trigger modal on image click
          />
          <div className="action-icons">
            <span className="like-icon">❤️</span>
            <span className="chat-icon">💬</span>
          </div>
        </div>

        {/* Visiting Card Container 3 */}
        <div className="logo-container">
          <div className="user-info">
            <img src="/images/user.png" alt="User Icon" className="user-icon" />
            <span className="username">User3</span>
          </div>
          {/* Only the image has the onClick event handler */}
          <img
            src="/images/audivistingcard.jpeg"
            alt="Visiting Card 3"
            className="logo-image"
            onClick={() => openModal('/images/audivistingcard.jpeg')}  // Trigger modal on image click
          />
          <div className="action-icons">
            <span className="like-icon">❤️</span>
            <span className="chat-icon">💬</span>
          </div>
        </div>

        {/* Additional Visiting Card Containers */}
        {/* Add more containers as needed */}
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} imageUrl={selectedImage} />
    </div>
  );
};

export default VisitingCardPage;
