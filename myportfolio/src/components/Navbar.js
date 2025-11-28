import React, { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState('home');

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section[id]'));
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: '-80px 0px -66% 0px', threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="brand">
          <div className="logo">Es</div>
          <div className="brand-text">Edward Salvacion</div>
        </div>

        <button
          className={`nav-toggle ${open ? 'active' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <div className={`nav-links ${open ? 'open' : ''}`}>
          <a href="#home" onClick={() => setOpen(false)} className={activeId === 'home' ? 'active' : ''}>Home</a>
          <a href="#about" onClick={() => setOpen(false)} className={activeId === 'about' ? 'active' : ''}>About</a>
          <a href="#projects" onClick={() => setOpen(false)} className={activeId === 'projects' ? 'active' : ''}>Projects</a>
          <a href="#contact" className={`cta ${activeId === 'contact' ? 'active' : ''}`} onClick={() => setOpen(false)}>Contact</a>
        </div>
      </div>
    </nav>
  );
}
