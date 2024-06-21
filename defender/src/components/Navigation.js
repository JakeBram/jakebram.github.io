// components/Navigation.js

import React from 'react';
import { Link } from 'react-router-dom';
import "./Navigation.css";

function Navigation() {
  return (
    <nav className='navigation'>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
