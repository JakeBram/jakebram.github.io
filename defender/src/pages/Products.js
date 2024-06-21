// pages/Products.js

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import ProductsContent from '../components/ProductsContent';
import MainLogo from '../components/MainLogo';

function Products() {
  return (
    <div>
      <Header />
      <ProductsContent />
      <MainLogo />
      <Navigation />
      <Footer />
    </div>
    
  );
}

export default Products;
