// components/ProductsContent.js

import React, { useState } from 'react';
import './ProductsContent.css';

const ProductsContent = () => {
  const [selectedCategory, setSelectedCategory] = useState('Category 1');

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const getCaption = () => {
    switch (selectedCategory) {
      case 'Category 1':
        return 'This is the caption for Category 1.';
      case 'Category 2':
        return 'This is the caption for Category 2.';
      case 'Category 3':
        return 'This is the caption for Category 3.';
      case 'Category 4':
        return 'This is the caption for Category 4.';
      default:
        return '';
    }
  };

  return (
    <div className="products-content">
      <h2>Check out our Products</h2>
      <p>Explore our range of products.</p>
      <select value={selectedCategory} onChange={handleChange}>
        <option value="Category 1">Category 1</option>
        <option value="Category 2">Category 2</option>
        <option value="Category 3">Category 3</option>
        <option value="Category 4">Category 4</option>
      </select>
      <p>{getCaption()}</p>
    </div>
  );
};

export default ProductsContent;
