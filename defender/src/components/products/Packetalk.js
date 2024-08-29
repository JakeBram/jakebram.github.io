import React from 'react';
import './ProductComponent.css';
import atnLogo from '../../product_photos/packetalk.png';

const Packetalk = () => {
  return (
    <div className="product-component">
      <img src={atnLogo} alt="ATN Logo" className="product-logo" />
      <div className="product-text">
        <h2>Packetalk</h2>
        <p>Packetalk offers a full system of ALPR and smart capability technology to provide an all in one package.</p>
      </div>
    </div>
  );
};

export default Packetalk;
