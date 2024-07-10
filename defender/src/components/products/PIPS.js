import React from 'react';
import './ProductComponent.css';
import pipsLogo from '../../product_photos/pips.png';

const PIPS = () => {
  return (
    <div className="product-component">
      <img src={pipsLogo} alt="PIPS Logo" className="product-logo" />
      <div className="product-text">
        <h2>PIPS</h2>
        <p>We can provide PIPS ALPR cameras, mobile systems, and office software for effective license plate recognition.</p>
      </div>
    </div>
  );
};

export default PIPS;
