import React from 'react';
import './ALPRDescription.css';

function ALPRDescription() {
  return (
    <div className="alpr-description">
      <h2>What is ALPR?</h2>
      <p>
        Automatic License Plate Recognition (ALPR) is a technology that uses optical character recognition on images to read vehicle registration plates. It can be used to store the images captured by the cameras as well as the text from the license plate.
      </p>
      <h3>Benefits for Local Police Departments</h3>
      <ul>
        <li>Enhanced crime detection and prevention</li>
        <li>Improved traffic management</li>
        <li>Efficient toll collection</li>
        <li>Increased public safety</li>
      </ul>
      <p>
        By integrating ALPR systems, local police departments can significantly improve their efficiency and effectiveness in monitoring and managing vehicular traffic.
      </p>
    </div>
  );
}

export default ALPRDescription;
