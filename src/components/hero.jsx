import React from 'react';
import '../styles/hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          <span className="accent">Vic</span>Forge
        </h1>
        <p>Fortalecemos tu mundo digital con soluciones sólidas y confiables.</p>
        <button className="hero-button">Contáctanos</button>
      </div>
    </section>
  );
}

export default Hero;
