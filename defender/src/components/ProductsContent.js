import React from 'react';
//import Arlo from './products/Arlo';          COMPONENT MADE BUT NOT IN USE
import ATN from './products/ATN';
import PIPS from './products/PIPS';
import Verkada from './products/Verkada';
import RTS from './products/RTS';

const ProductsContent = () => {
  return (
    <div>
      <div className="main-content">
        <h2>Check out our Products</h2>
        <p>We offer products and services from multiple companies.</p>
        <PIPS />
        <ATN />
        <RTS />
        <Verkada />
      </div>
    </div>
  );
};

export default ProductsContent;
