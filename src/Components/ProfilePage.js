import React from 'react';
import './ProfilePage.css';

// Assume you have an AuthContext that provides user data after login
// import { AuthContext } from '../context/AuthContext';

const ProfilePage = () => {
  const user = {
    username: "Yupin@20",
    email: "yupinbhensdadiya20@gmail.com",
    profileImage: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  };

  return (
    <div className="profile-container">
      <h1>User Profile</h1>
      <div className="profile-details">
        <img src={user.profileImage} alt="Profile" className="profile-image" />
        <h2>{user.username}</h2>
        <p>Email: {user.email}</p>
        <p>Joined Date: January 1, 2023</p>
      </div>
    </div>
  );
};

export default ProfilePage;
