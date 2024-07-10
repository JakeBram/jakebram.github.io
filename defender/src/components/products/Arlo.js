import React from 'react';
import './ProductComponent.css';
import arloLogo from '../../product_photos/arlo.png';

const Arlo = () => {
  return (
    <div className="product-component">
      <img src={arloLogo} alt="Arlo Logo" className="product-logo" />
      <div className="product-text">
        <h2>Arlo</h2>
        <p>We offer high-quality surveillance cameras from Arlo for enhanced security and monitoring.</p>
      </div>
    </div>
  );
};

export default Arlo;
