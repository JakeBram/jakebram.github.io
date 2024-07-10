import React from 'react';
import './ProductComponent.css';
import atnLogo from '../../product_photos/atn.png';

const ATN = () => {
  return (
    <div className="product-component">
      <img src={atnLogo} alt="ATN Logo" className="product-logo" />
      <div className="product-text">
        <h2>ATN</h2>
        <p>ATN specializes in optics and firearm scopes. We carry several including thermal and night vision</p>
      </div>
    </div>
  );
};

export default ATN;
