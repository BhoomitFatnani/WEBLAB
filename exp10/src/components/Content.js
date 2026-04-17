// src/components/Content.js
import React from 'react';

function Content() {
  const services = ["Web Development", "App Development", "UI Design"];

  return (
    <div style={{padding: "20px"}}>
      <h2>Our Services</h2>
      <ul>
        {services.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
    </div>
  );
}

export default Content;