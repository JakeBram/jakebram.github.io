// Home.js
import React from 'react';
import Header from '../components/Header';
import MainContent from '../components/MainContent';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import './Home.css';

function Home() {
  return (
    <div>
      <Header />
      <MainContent />
      <Navigation />
      <Footer />
    </div>
  );
}

export default Home;
