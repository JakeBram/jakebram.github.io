// components/ProductsContent.js

import React, { useState } from 'react';
import './ProductsContent.css';

const ProductsContent = () => {
  const [selectedCategory, setSelectedCategory] = useState('ALPR'); // state to display first

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const getCaption = () => {
    switch (selectedCategory) {
      case 'ALPR':
        return 'We supply mobile ALPR systems, fixed ALPR cameras, and the office software.';
      case 'Ballistics':
        return 'We supply body armor, as well as ballistic shields and panels.';
      case 'Optics':
        return 'We carry ATN scopes in a thermal, night vision, and day & night version.';
      case 'Cameras':
        return 'We carry Arlo indoor and outdoor cameras, and Verkada security cameras.';
      default:
        return '';
    }
  };

  return (
    <div className="products-content">
      <h2>Check out our Products</h2>
      <p>Explore our range of products.</p>
      <select value={selectedCategory} onChange={handleChange}>
        <option value="ALPR">ALPR</option>
        <option value="Ballistics">Ballistics</option>
        <option value="Optics">Optics</option>
        <option value="Cameras">Cameras</option>
      </select>
      <p>{getCaption()}</p>
    </div>
  );
};

export default ProductsContent;
