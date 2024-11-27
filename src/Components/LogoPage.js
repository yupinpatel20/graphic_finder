import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../Components/Modal';  // Assuming Modal is located in this path
import './LogoPage.css';

const LogoPage = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);  // State for modal
  const [selectedImage, setSelectedImage] = useState(null);  // State for selected image
  const [liked, setLiked] = useState({});  // Track liked status for each logo

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);  // Set the selected image
    setIsModalOpen(true);  // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false);  // Close the modal
    setSelectedImage(null);  // Reset selected image
  };

  const handleLikeClick = (id) => {
    setLiked((prevLiked) => ({
      ...prevLiked,
      [id]: !prevLiked[id], // Toggle the liked state for the clicked logo
    }));
  };

  return (
    <div className="design-page">
      <span className="back-arrow" onClick={() => navigate('/home')}>
        ← Back
      </span>
      <h2>Logo Designs</h2>
      <p>Explore our collection of logo designs below.</p>
      <div className="logo-gallery">
        {/* Logo Container 1 */}
        <div className="logo-container">
          <div className="user-info">
            <img src="/images/user.png" alt="User Icon" className="user-icon" />
            <span className="username">User1</span>
          </div>
          <img
            src="/images/BMW.jpeg"
            alt="Logo 1"
            className="logo-image"
            onClick={() => openModal('/images/BMW.jpeg')}  // Trigger modal on image click
          />
          <div className="action-icons">
            <span
              className={`like-icon ${liked['BMW'] ? 'liked' : ''}`} // Apply 'liked' class based on state
              onClick={() => handleLikeClick('BMW')}  // Toggle like state
            >
              ❤️
            </span>
            <span className="chat-icon">💬</span>
          </div>
        </div>

        {/* Logo Container 2 */}
        <div className="logo-container">
          <div className="user-info">
            <img src="/images/user.png" alt="User Icon" className="user-icon" />
            <span className="username">User2</span>
          </div>
          <img
            src="/images/Mercedes.jpeg"
            alt="Logo 2"
            className="logo-image"
            onClick={() => openModal('/images/Mercedes.jpeg')}  // Trigger modal on image click
          />
          <div className="action-icons">
            <span
              className={`like-icon ${liked['Mercedes'] ? 'liked' : ''}`} // Apply 'liked' class based on state
              onClick={() => handleLikeClick('Mercedes')}  // Toggle like state
            >
              ❤️
            </span>
            <span className="chat-icon">💬</span>
          </div>
        </div>

        {/* Logo Container 3 */}
        <div className="logo-container">
          <div className="user-info">
            <img src="/images/user.png" alt="User Icon" className="user-icon" />
            <span className="username">User3</span>
          </div>
          <img
            src="/images/audi.jpeg"
            alt="Logo 3"
            className="logo-image"
            onClick={() => openModal('/images/audi.jpeg')}  // Trigger modal on image click
          />
          <div className="action-icons">
            <span
              className={`like-icon ${liked['Audi'] ? 'liked' : ''}`} // Apply 'liked' class based on state
              onClick={() => handleLikeClick('Audi')}  // Toggle like state
            >
              ❤️
            </span>
            <span className="chat-icon">💬</span>
          </div>
        </div>
      </div>

      {/* Modal for displaying large image */}
      <Modal isOpen={isModalOpen} onClose={closeModal} imageUrl={selectedImage} />
    </div>
  );
};

export default LogoPage;
