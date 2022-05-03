import Link from "next/link";
import styles from "./../styles/ButtonGen.module.css"

export default function ButtonGen({link, text, primary, secondary, cta}){
    return(
        <Link href={link}>
            <a className={`${styles.genButton} ${styles.genButtonP} ${primary ? styles.primary: ""} ${secondary ? styles.secondary: ""} ${cta ? styles.cta: ""}`}>
                <span>{text}</span>
            </a>
        </Link>
    )
}