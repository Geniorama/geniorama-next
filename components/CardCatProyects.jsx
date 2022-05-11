import Link from "next/link"
import Image from "next/image"
import styles from "../styles/CardCatProjects.module.css"

export default function CardCatProyects({title, bgImage, link, disabled}) {
  return (
    <Link href={link}>
        <a className={`${styles.cardLink} ${disabled ? styles.cardDisabled : ""}`}>
            <Image 
                src={bgImage} 
                layout={"fill"} 
                objectFit={"cover"}
                className={styles.cardLink__img}
            />

            <div className={styles.cardLink__caption}>
                <h2 className={styles.cardLink__caption__title}>{title}</h2>
            </div>
        </a>
    </Link>
  )
}
