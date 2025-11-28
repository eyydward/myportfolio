import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <section id="contact" className="page-section contact">
      <div className="section-inner">
        <h1>Contact</h1>
        <p className="lead">Let's work together — reach out and say hello!</p>

        <div className="contact-content">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>I'd love to hear from you. Whether you have a question, a project idea, or just want to chat, feel free to reach out.</p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <strong>Email</strong>
                <a href="mailto:edwardvictorsalavcion@gmail.com">edwardvictorsalavcion@gmail.com</a>
              </div>
              <div className="contact-method">
                <strong>Social</strong>
                <div className="social-links">
                  <a href="https://github.com/eyydward" target="_blank" rel="noreferrer">GitHub</a>
                  <a href="https://www.facebook.com/edward.salvacion.58" target="_blank" rel="noreferrer">Facebook</a>
                  <a href="https://www.instagram.com/wardexll/" target="_blank" rel="noreferrer">Instagram</a>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows="5"
                required
              />
            </div>
            <button type="submit" className="btn primary">Send Message</button>
            {submitted && <p className="form-success">✓ Message sent! I'll get back to you soon.</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
