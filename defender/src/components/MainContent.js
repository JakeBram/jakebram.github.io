import React from 'react';
import logo from '../dps_logo.png'; // Adjust the path if necessary

function MainContent() {
  return (
    <main className="main-content">
      <h2>Welcome to Defender Police Supply</h2>
      <p>This is a new website in development.</p>
      <img src={logo} alt="Defender Logo" className="logo" />
    </main>
  );
}

export default MainContent;
