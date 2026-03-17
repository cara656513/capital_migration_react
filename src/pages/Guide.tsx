import { useState } from "react";
import Button from "../components/Button/Button";
import styles from "./Guide.module.scss";
import ButtonGroup from "../components/ButtonGroup/ButtonGroup";

function Guide() {
  const [isOpen, setIsOpen] = useState(true);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <main className={styles.guideContainer}>
      <h1 className={styles.guideTitle}>
        UI Component Guide
      </h1>

      <div className={styles.guideContent}>

        {/* --- Button 컴포넌트 --- */}
        <section className={styles.guideSection}>
          <button className={styles.guideSectionTitle} onClick={handleToggle}>🔖 Button</button>
          {isOpen &&
            <>
              <div className={styles.guideSectionDesc}>
                <p>경로: <code>components/Button/Button.tsx</code></p>
                <p>Button은 button, a 태그에서 공통으로 사용 가능합니다.</p>
              </div>
              <div className={styles.guideSectionPreview}>
                <p style={{ marginBottom: '10px', fontSize: '1.4rem', color: '#666' }}>[Default Theme]</p>
                <ButtonGroup>
                  <Button variant="secondary">취소</Button>
                  <Button>확인</Button>
                </ButtonGroup>

                <p style={{ margin: '20px 0 10px', fontSize: '1.4rem', color: '#666' }}>[Popup Theme]</p>
                <ButtonGroup>
                  <Button theme="popup" variant="secondary">취소</Button>
                  <Button theme="popup">확인</Button>
                </ButtonGroup>

                <p style={{ margin: '20px 0 10px', fontSize: '1.4rem', color: '#666' }}>[Link Button]</p>
                <ButtonGroup>
                  <Button as="a" href="#">
                    링크버튼
                  </Button>
                </ButtonGroup>
              </div>
            </>}
        </section>

      </div>
    </main>
  );
}

export default Guide;
