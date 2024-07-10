import React from 'react';
import './ProductComponent.css';
import verkadaLogo from '../../product_photos/verkada.png';

const Verkada = () => {
  return (
    <div className="product-component">
      <img src={verkadaLogo} alt="Verkada Logo" className="product-logo" />
      <div className="product-text">
        <h2>Verkada</h2>
        <p>We carry advanced security cameras from Verkada for comprehensive surveillance solutions.</p>
      </div>
    </div>
  );
};

export default Verkada;
