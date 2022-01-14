import Link from "next/link";
import styles from "./../styles/ButtonGen.module.css"

export default function ButtonGen({link, text}){
    return(
        <Link href={link}>
            <a className={`${styles.genButton} ${styles.genButtonP}`}>
                <span>{text}</span>
            </a>
        </Link>
    )
}