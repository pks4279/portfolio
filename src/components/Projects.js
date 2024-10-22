import React from 'react';
import styles from './Projects.module.css';

function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <h2>Projects</h2>
      <div className={styles.projectList}>
        <div className={styles.project}>
          <h3>Todo App</h3>
          <p>A simple Todo app built with React and Redux.</p>
          <a href="https://github.com/yourusername/todo-app" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        <div className={styles.project}>
          <h3>E-commerce Website</h3>
          <p>An online store built with Next.js and Firebase.</p>
          <a href="https://github.com/yourusername/ecommerce-site" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
