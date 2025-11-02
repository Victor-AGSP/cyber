import React from 'react';
import RevealOnScroll from './RevealOnScroll';
import '../styles/contact.css';

export default function Contact() {
  return (
    <RevealOnScroll>
      <section className="contact-section">
        <div className="contact-container">
          <h2 className="contact-title"><span className="title-accent">Cont</span>áctanos</h2>
          <p className="contact-sub">Elige la forma que prefieras para contactarnos. Responderemos lo antes posible.</p>

          <div className="contact-grid">
            <a className="contact-card whatsapp" href="https://wa.me/56953488291" target="_blank" rel="noopener noreferrer">
              <div className="contact-icon">📱</div>
              <div className="contact-body">
                <h3>WhatsApp</h3>
                <p>+56 9 5348 8291</p>
              </div>
            </a>

            <a className="contact-card gmail" href="mailto:victorsepulveda.agp@gmail.com" target="_blank" rel="noopener noreferrer">
              <div className="contact-icon">✉️</div>
              <div className="contact-body">
                <h3>Gmail</h3>
                <p>victorsepulveda.agp@gmail.com</p>
              </div>
            </a>

            <a className="contact-card instagram" href="https://instagram.com/victorocho_" target="_blank" rel="noopener noreferrer">
              <div className="contact-icon">📸</div>
              <div className="contact-body">
                <h3>Instagram</h3>
                <p>@victorocho_</p>
              </div>
            </a>

            <a className="contact-card facebook" href="https://www.facebook.com/share/12FqUfdHxum/" target="_blank" rel="noopener noreferrer">
              <div className="contact-icon">🔗</div>
              <div className="contact-body">
                <h3>Facebook</h3>
                <p>Victor Sepúlveda</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </RevealOnScroll>
  );
}
