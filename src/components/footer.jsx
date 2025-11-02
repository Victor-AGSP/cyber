import React from 'react';
import '../styles/footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <span className="logo-accent">Vic</span>Forge
          </div>
          <p className="footer-copyright">
            © {currentYear} VicForge. Todos los derechos reservados.
          </p>
          <div className="footer-links">
            <a href="/privacidad" className="footer-link">Política de Privacidad</a>
            <span className="footer-separator">|</span>
            <a href="/terminos" className="footer-link">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default React.memo(Footer);