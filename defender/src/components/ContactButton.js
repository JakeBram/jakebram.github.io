import React from 'react';
import './ContactButton.css'; // Import the CSS file for styling

function ContactButton() {
  const email = "jason@defenderpolicesupply.com"; // Email address
  const subject = ""; // Replace with your desired subject text
  const body = ""; // Replace with your desired email body text

  const handleClick = () => {
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <button className="contact-button" onClick={handleClick}>
      Email
    </button>
  );
}

export default ContactButton;
