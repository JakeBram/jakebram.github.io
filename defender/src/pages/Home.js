// Home.js
import React from 'react';
import Header from '../components/Header';
import MainContent from '../components/MainContent';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import MainLogo from '../components/MainLogo';
import ALPRDescription from '../components/ALPRDescription';
import "./Home.css"

function Home() {
  return (
    <div>
      <Header />
      <MainContent />
      <div className='main-content'>
        <ALPRDescription/>
      </div>
      <MainLogo />
      <Navigation />
      <Footer />
    </div>
  );
}

export default Home;
