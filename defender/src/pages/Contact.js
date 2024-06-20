// pages/Contact.js

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import ContactContent from '../components/ContactContent';

function Contact() {
  return (
    <div>
      <Header />
      <ContactContent />
      <Navigation />
      <Footer />
    </div>
  );
}

export default Contact;
