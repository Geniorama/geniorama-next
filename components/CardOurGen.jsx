import styles from "../styles/CardOurGen.module.css"
import Image from "next/image";
import ImageTest from "../public/iconos-web_GEN-ESTRATEGICO.svg"
import Link from "next/link";

export default function CardOurGen({title, description, image}) {
  return (
    <div className={styles.CardOurGen}>
      <Link href="#">
        <a className={styles.CardOurGen__link}>
          {image
            ?
            <Image 
              src={image}
              className={styles.CardOurGen__img}
              width={120}
              height={120}
            />
            :
            null
          }
          

          <h3 className={styles.CardOurGen__title}>{title}</h3>
          <p className={styles.CardOurGen__desc}>
            {description}
          </p>
        </a>
      </Link>
    </div>
  );
}
