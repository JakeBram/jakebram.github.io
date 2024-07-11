import React from 'react';
import './ProductComponent.css';
import pipsLogo from '../../product_photos/neology.png';

const Neology = () => {
  return (
    <div className="product-component">
      <img src={pipsLogo} alt="Neology Logo" className="product-logo" />
      <div className="product-text">
        <h2>Neology</h2>
        <p>We can provide Neology ALPR cameras, mobile systems, and office software for effective license plate recognition.</p>
      </div>
    </div>
  );
};

export default Neology;
