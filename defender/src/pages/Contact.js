// pages/Contact.js

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import ContactContent from '../components/ContactContent';
import MainLogo from '../components/MainLogo';

function Contact() {
  return (
    <div>
      <Header />
      <ContactContent />
      <MainLogo />
      <Navigation />
      <Footer />
    </div>
  );
}

export default Contact;
