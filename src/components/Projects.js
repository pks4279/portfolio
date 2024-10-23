import React, { useState } from 'react';
import styles from './Projects.module.css';

function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage('');
  };

  return (
    <section className={styles.projects}>
      <h2>Projects</h2>
      <div className={styles.projectList}>
        <div className={styles.project}>
          <div className={styles.images}>
            <img
              src="/images/PC1.png"
              alt="Todo App Screenshot 1"
              className={styles.projectImage}
              onClick={() => openModal('/images/PC1.png')}
            />
            <img
              src="/images/PC2.png"
              alt="Todo App Screenshot 2"
              className={styles.projectImage}
              onClick={() => openModal('/images/PC2.png')}
            />
          </div>
          <div className={styles.projectContent}>
            <h3>비교설명확인서 PC용</h3>
            <p>온라인 보험 판매 과정에서 불완전판매를 방지하고, 완전판매를 보장하기 위해 개발된 웹 애플리케이션입니다.</p>
            <p>- 사용 기술: HTML, CSS, JavaScript, PHP</p>
            <p>- 데이터베이스: Oracle</p>
            <p>- 주요 역할: UI/UX 디자인 및 프론트엔드 개발, 데이터베이스와 연동하여 실시간 데이터 저장 및 조회 기능 구현</p>
          </div>
        </div>

        <div className={styles.project}>
          <div className={styles.images}>
            <img
              src="/images/M1.png"
              alt="E-commerce Website Screenshot 1"
              className={styles.projectImage}
              onClick={() => openModal('/images/M1.png')}
            />
            <img
              src="/images/M2.png"
              alt="E-commerce Website Screenshot 2"
              className={styles.projectImage}
              onClick={() => openModal('/images/M2.png')}
            />
          </div>
          <div className={styles.projectContent}>
            <h3>비교설명확인서 모바일용</h3>
            <p>PC 버전의 온라인 보험 판매 웹 애플리케이션을 기반으로, 모바일 환경에 맞게 최적화된 버전입니다.</p>
            <p>- 사용 기술: HTML, CSS, JavaScript, PHP, NICE 인증 API</p>
            <p>- 데이터베이스: Oracle</p>
            <p>- 주요 역할: 모바일 최적화 UI 개발, NICE 인증 API 연동 및 본인 인증 기능 구현</p>
          </div>
        </div>
      </div>

      {/* 모달 */}
      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal} className={styles.closeButton}>X</button>
            <img src={selectedImage} alt="Selected" className={styles.modalImage} />
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
