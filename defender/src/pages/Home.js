// Home.js
import React from 'react';
import Header from '../components/Header';
import MainContent from '../components/MainContent';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import MainLogo from '../components/MainLogo';
import ALPRDescription from '../components/ALPRDescription';

function Home() {
  return (
    <div>
      <Header />
      <MainContent />
      <ALPRDescription />
      <MainLogo />
      <Navigation />
      <Footer />
    </div>
  );
}

export default Home;
