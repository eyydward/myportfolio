import React from 'react';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p className="copyright">© {year} Edward Salvacion || CTU - Danao Campus</p>
      </div>
    </footer>
  );
}
