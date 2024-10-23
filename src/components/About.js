import React from 'react';
import styles from './About.module.css';

function About() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutContent}>
        <h2>자기소개</h2>
        <p>
          안녕하세요, 저는 박경수입니다. 사용자에게 즐거운 경험을 제공하는 웹 애플리케이션 개발에 집중하는 개발자입니다. 
          React와 Node.js를 활용해 사용자 친화적인 UI와 안정적인 백엔드 시스템을 구축하며, 
          클라우드 환경에서의 배포와 운영 경험도 보유하고 있습니다. 단순한 기능 구현을 넘어, 
          더 나은 디지털 세상을 만드는 것을 목표로 끊임없이 성장하고 있습니다.
        </p>
      </div>
    </section>
  );
}

export default About;
