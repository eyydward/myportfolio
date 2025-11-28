import React, { useState } from 'react';
import './Home.css';

export default function Home() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="home" className="page-section home">
      <div className="section-inner hero">
        <div className="hero-left">
          <h1>Hi, I'm Edward</h1>
          <p className="lead">I build thoughtful web experiences and interactive UIs.</p>
          <p>Welcome to my portfolio — I design and build modern web interfaces focused on accessibility and performance.</p>

          <div className="hero-actions">
            <a className="btn primary" href="#contact">Get in touch</a>
            <a className="btn ghost" href="#projects">See projects</a>
          </div>

          <div className="socials">
            <a href="https://github.com/eyydward" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.facebook.com/edward.salvacion.58" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://www.instagram.com/wardexll/" target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </div>

        <div className="hero-right">
          {!imgError ? (
            <img
              className="profile-img"
              src="/picture.jpg"
              alt="Edward Salvacion"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="avatar-fallback" aria-hidden>
              <svg viewBox="0 0 120 120" width="160" height="160" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="g" x1="0" x2="1">
                    <stop offset="0" stopColor="#6EE7B7" />
                    <stop offset="1" stopColor="#3B82F6" />
                  </linearGradient>
                </defs>
                <rect width="120" height="120" rx="18" fill="#eaf7ff" />
                <circle cx="60" cy="40" r="22" fill="url(#g)" />
                <rect x="20" y="70" width="80" height="20" rx="6" fill="#d9f7ee" />
                <text x="60" y="87" fontSize="10" fill="#04263b" fontWeight="700'" textAnchor="middle">EV</text>
              </svg>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
