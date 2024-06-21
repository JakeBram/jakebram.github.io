// components/Header.js

import React from 'react';
import smallLogo from '../small_logo.png'; // Adjust the path if necessary
import Navigation from './Navigation';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <img src={smallLogo} alt="Logo" className="logo" />
      <h1 className="title">Defender Police Supply</h1>
      <div className="header-navigation">
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
