import React from 'react';
import Arlo from './products/Arlo';
import ATN from './products/ATN';
import PIPS from './products/PIPS';
import Verkada from './products/Verkada';

const ProductsContent = () => {
  return (
    <div>
      <div className="main-content">
        <h2>Check out our Products</h2>
        <p>We offer products and services from multiple companies.</p>
        <PIPS />
        <Arlo />
        <ATN />
        <Verkada />
      </div>
    </div>
  );
};

export default ProductsContent;
