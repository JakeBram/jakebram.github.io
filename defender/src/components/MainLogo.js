// components/MainLogo.js

import React from 'react';
import mainLogo from '../dps_logo.png'; // Adjust the path to your logo
import './MainLogo.css';

function MainLogo() {
  return (
    <div className="main-logo-container">
      <img src={mainLogo} alt="Main Logo" className="main-logo" />
    </div>
  );
}

export default MainLogo;
