import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        © 2024 My Portfolio. Built by <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a>.
      </p>
    </footer>
  );
}

export default Footer;
