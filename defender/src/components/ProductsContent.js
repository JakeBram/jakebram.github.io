import React from 'react';
import ATN from './products/ATN';
import Neology from './products/Neology';
import Verkada from './products/Verkada';
import RTS from './products/RTS';
import Packetalk from './products/Packetalk';

const ProductsContent = () => {
  return (
    <div>
      <div className="main-content">
        <h2>Check out our Products</h2>
        <p>We offer products and services from multiple companies.</p>
        <Packetalk/>
        <Neology />
        <ATN />
        <RTS />
        <Verkada />
      </div>
    </div>
  );
};

export default ProductsContent;
