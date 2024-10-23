import React from 'react';
import styles from './Contact.module.css';

function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <h2>Contact Me</h2>
      <p>Email: <a href="">pks4279@naver.com</a></p>
      <p>TelNo: <a href="">010.9411.9764</a></p>
      {/* <p>LinkedIn: <a href="https://linkedin.com/in/janedoe" target="_blank" rel="noopener noreferrer">@janedoe</a></p> */}
      {/* <p>GitHub: <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">@yourusername</a></p> */}
    </section>
  );
}

export default Contact;
