import React from 'react';
import './DanielleIntro.css';
import image from './DanielleImage.jpg';

function DanielleIntro() {
  return (
    <div className="danielle-intro">
      <h1>Danielle</h1>
      <img src={image} alt="Danielle" />
      <p>
        Hi! I'm Danielle, and I'm learning React!
      </p>
    </div>
  );
}
export default DanielleIntro;