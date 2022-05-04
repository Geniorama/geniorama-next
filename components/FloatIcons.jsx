import styles from "../styles/FloatIcons.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

export default function FloatIcons() {
  return (
    <div className={styles.genFloatIcons}>
      {/* Link Whatsapp */}
      <a href="https://wa.link/k9v2me" target="_blank" rel="noreferrer" className={styles.genFloatIcons__link}>
        <span className={styles.genFloatIcons__icon}>
         <FontAwesomeIcon icon={['fab', 'whatsapp']} />
        </span>
      </a>

      {/* Link Back to top */}
      <a href="#gen-ancle-top" className={styles.genFloatIcons__link}>
        <span className={styles.genFloatIcons__icon}>
          <FontAwesomeIcon icon={faAngleUp} />
        </span>
      </a>
    </div>
  );
}
