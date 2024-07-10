import React from 'react';
import './ProductComponent.css';
import arloLogo from '../../product_photos/rts.png';

const RTS = () => {
  return (
    <div className="product-component">
      <img src={arloLogo} alt="RTS Logo" className="product-logo" />
      <div className="product-text">
        <h2>RTS</h2>
        <p>We carry ballistic panels and sheilds as well as body armor from RTS Tactical.</p>
      </div>
    </div>
  );
};

export default RTS;
