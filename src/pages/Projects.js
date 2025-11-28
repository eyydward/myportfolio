import React from 'react';
import './Projects.css';

export default function Projects() {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio built with React featuring smooth scrolling and interactive components.',
      tags: ['React', 'CSS', 'Responsive'],
      link: '#'
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-featured e-commerce application with product filtering, cart management, and checkout flow.',
      tags: ['React', 'API', 'UX'],
      link: '#'
    },
    {
      title: 'Data Visualization Dashboard',
      description: 'Interactive dashboard displaying real-time analytics with charts, graphs, and data insights.',
      tags: ['React', 'D3.js', 'Analytics'],
      link: '#'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with drag-and-drop functionality and real-time updates.',
      tags: ['React', 'TypeScript', 'Accessibility'],
      link: '#'
    },
    {
      title: 'UI Component Library',
      description: 'Reusable React component library with comprehensive documentation and accessibility features.',
      tags: ['React', 'Components', 'Design System'],
      link: '#'
    },
    {
      title: 'Mobile App Prototype',
      description: 'Mobile-first prototype showcasing responsive design and touch-friendly interactions.',
      tags: ['React Native', 'Mobile', 'Design'],
      link: '#'
    }
  ];

  return (
    <section id="projects" className="page-section projects">
      <div className="section-inner">
        <h1>Projects</h1>
        <p className="lead">A selection of projects I've worked on.</p>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <a key={idx} href={project.link} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
