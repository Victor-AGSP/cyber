import React from 'react';
import '../styles/hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          <span className="accent">CyberShield</span> Security
        </h1>
        <p>Tu aliado confiable en pruebas de penetración y protección digital.</p>
        <button className="hero-button">Contáctanos</button>
      </div>
    </section>
  );
}

export default Hero;
