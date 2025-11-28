import React from 'react';
import './About.css';

export default function About() {
  return (
    <section id="about" className="page-section about">
      <div className="section-inner">
        <h1>About Me</h1>
        <p className="lead">I'm a frontend developer focused on accessible, performant interfaces.</p>

        <div className="about-content">
          <div className="about-bio">
            <p>I'm Edward, a passionate developer who loves creating beautiful and intuitive web experiences. With expertise in modern frontend technologies, I focus on building scalable, accessible applications that users truly enjoy.</p>
            <p>When I'm not coding, you can find me exploring new design trends, contributing to open source, or learning emerging web technologies.</p>
          </div>

          <div className="skills-section">
            <h2>Skills</h2>
            <div className="skills-grid">
              <div className="skill-card">
                <div className="skill-icon">⚛️</div>
                <h3>React</h3>
                <p>Building component-driven UIs and modern SPAs</p>
              </div>
              <div className="skill-card">
                <div className="skill-icon">🎨</div>
                <h3>CSS & Design</h3>
                <p>Responsive layouts, animations, and modern styling</p>
              </div>
              <div className="skill-card">
                <div className="skill-icon">♿</div>
                <h3>Accessibility</h3>
                <p>WCAG compliance and inclusive design practices</p>
              </div>
              <div className="skill-card">
                <div className="skill-icon">⚡</div>
                <h3>Performance</h3>
                <p>Optimizing for speed, load times, and UX</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
