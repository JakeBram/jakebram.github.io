// Home.js
import React from 'react';
import Header from '../components/Header';
import MainContent from '../components/MainContent';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import MainLogo from '../components/MainLogo';

function Home() {
  return (
    <div>
      <Header />
      <MainContent />
      <MainLogo />
      <Navigation />
      <Footer />
    </div>
  );
}

export default Home;
