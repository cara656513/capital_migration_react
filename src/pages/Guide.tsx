import { useState } from "react";
import Button from "../components/common/Button";
import styles from "./Guide.module.scss";

function Guide() {
  const [isOpen, setIsOpen] = useState(false);
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
                <p>경로: <code>components/common/Button.tsx</code></p>
                <p>Button은 button, a 태그에서 공통으로 사용 가능합니다.</p>
              </div>
              <div className={styles.guideSectionPreview}>
                <Button variant="secondary">취소</Button>
                <Button>확인</Button>
              </div>
            </>}
        </section>

      </div>
    </main>
  );
}

export default Guide;
