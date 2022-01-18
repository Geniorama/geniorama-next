import Image from "next/image";
import styles from "../styles/CardAboutUs.module.css";

export default function CardAboutUs({title, description, icon}) {
  return (
    <div className={`${styles.genCardAboutUs} text-center p-5`}>
      <div className={styles.genCardAboutUs__img}>
        {icon}
      </div>

      <h4 className={styles.genCardAboutUs__title}>{title}</h4>
      <p className={styles.genCardAboutUs__desc}>
        {description}
      </p>
    </div>
  );
}
