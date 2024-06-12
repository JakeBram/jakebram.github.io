import React from 'react';
import logo from '../small_logo.png'; // Adjust the path if necessary

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo-left" />
      <h1 className="title">Defender Police Supply</h1>
    </header>
  );
}

export default Header;
