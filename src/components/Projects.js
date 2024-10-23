import React from 'react';
import styles from './Projects.module.css';

function Projects() {
  return (
    <section className={styles.projects}>
      <h2>프로젝트</h2>
      <div className={styles.projectList}>
        <div className={styles.project}>
          <div className={styles.images}>
            <img
              src="/images/PC1.png"
              alt="Todo App Screenshot 1"
              className={styles.projectImage}
            />
            <img
              src="/images/PC2.png"
              alt="Todo App Screenshot 2"
              className={styles.projectImage}
            />
          </div>
          <div className={styles.projectContent}>
            <h3>비교설명확인서 PC용</h3>
            <p>
              온라인 보험 판매 과정에서 불완전판매를 방지하고, 완전판매를 보장하기 위해 개발된 웹 애플리케이션입니다. 
              사용자는 모든 필요한 정보를 정확하게 입력해야만 다음 단계로 진행할 수 있도록 하여 불완전판매를 예방합니다.
            </p>
            <p>
              주요 기능으로는 고객 정보 입력, 보험 상품 선택, 계약 내용 확인 등이 있습니다.
            </p>
            <p>
              - <strong>사용 기술</strong>: HTML, CSS, JavaScript, PHP
            </p>
            <p>
              - <strong>데이터베이스</strong>: Oracle
            </p>
            <p>
              - <strong>주요 역할</strong>: UI/UX 디자인 및 프론트엔드 개발, 데이터베이스와 연동하여 실시간 데이터 저장 및 조회 기능 구현
            </p>
          </div>
        </div>

        <div className={styles.project}>
          <div className={styles.images}>
            <img
              src="/images/M1.png"
              alt="E-commerce Website Screenshot 1"
              className={styles.projectImage}
            />
            <img
              src="/images/M2.png"
              alt="E-commerce Website Screenshot 2"
              className={styles.projectImage}
            />
          </div>
          <div className={styles.projectContent}>
            <h3>비교설명확인서 모바일용</h3>
            <p>
              PC 버전의 온라인 보험 판매 웹 애플리케이션을 기반으로, 모바일 환경에 맞게 최적화된 버전입니다. 
              모바일 사용자의 편의를 위해 NICE 인증 API를 추가하여 사용자 본인 확인 절차를 간소화하고, 더 높은 보안성을 제공합니다.
            </p>
            <p>
              주요 기능으로는 인증 절차, 보험 상품 조회 및 신청 기능이 있습니다.
            </p>
            <p>
              - <strong>사용 기술</strong>: HTML, CSS, JavaScript, PHP, NICE 인증 API
            </p>
            <p>
              - <strong>데이터베이스</strong>: Oracle
            </p>
            <p>
              - <strong>주요 역할</strong>: 모바일 최적화 UI 개발, NICE 인증 API 연동 및 본인 인증 기능 구현
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Projects;
