// pages/Contact.js

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import './Home.css';

function Contact() {
  return (
    <div>
      <Header />
      <h2>Contact Us</h2>
      <p>Get in touch with us for any queries.</p>
      <p>Phone: 512-887-ALPR</p>
      <p>PO Box: 9600 Escarpment Blvd.</p>
      <p>Suite 745-224</p>
      <p>Austin, Texas, 78749</p>
      <Navigation />
      <Footer />
    </div>
  );
}

export default Contact;
