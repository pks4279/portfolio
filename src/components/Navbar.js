import React from 'react';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h1>박경수</h1>
      <ul className={styles.navLinks}>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">프로젝트</a></li>
        <li><a href="#contact">연락처</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
