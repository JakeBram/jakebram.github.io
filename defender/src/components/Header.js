// components/Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../small_logo.png'; // Adjust the path if necessary
import './Header.css'; // Import the CSS file
import '../global.css'; 

function Header() {
  return (
    <div className="header-container">
      <header className="header">
        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt="Defender Logo" className="logo" />
          </Link>
        </div>
        <h1 className="title">Defender Police Supply</h1>
      </header>
    </div>
  );
}

export default Header;
