import styles from "../styles/CardOurGen.module.css"
import Image from "next/image";
import ImageTest from "../public/iconos-web_GEN-ESTRATEGICO.svg"
import Link from "next/link";

export default function CardOurGen({title, description, image, link}) {
  return (
    <div className={styles.CardOurGen}>
      {link
       ?
        //  If exists link
        <Link href={link}>
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
        :
        // Else not exists link
        <div>
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
        </div>
      }
    </div>
  );
}
