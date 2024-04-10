import React from 'react';
import { useLocation } from 'react-router-dom';

function Profile() {
  const location = useLocation();
  const { fullName, emailAddress } = location.state || {};

  return (
    <div className="p-6 m-12 max-w-sm mx-auto bg-white rounded-xl shadow-md flex flex-col items-center">
      <h2 className="text-2xl font-medium text-black mb-2">Account Settings</h2>
      <img src="Images/profilepic.jpg" alt="Profile Picture" class="w-32 h-32 rounded-full mb-4"></img>
      <p className="text-gray-600 mb-4">{fullName || 'Your Name'}</p>
      <p className="text-gray-600 mb-4">{emailAddress || 'Your Email'}</p>
      <p className="text-gray-500 mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  );
}

export default Profile;
