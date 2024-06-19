// components/Navigation.js

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../dps_logo.png'; // Adjust the path if necessary
import "./Navigation.css";

function Navigation() {
  return (
    <nav>
      <img src={logo} alt="Defender Logo" className="logo" />
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
