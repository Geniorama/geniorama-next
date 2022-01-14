import Image from "next/image"
import styles from "../styles/DataCounter.module.css"
import IconoExperiencia from "../public/iconos-web_6-anos-experiencia.svg"

export default function DataCounter(){
    return(
        <div className={`${styles.genDataCounter} text-center`}>
            <Image 
                src={IconoExperiencia}
                width={130}
                height={130}
            />
            <span className={styles.genDataCounter__number}>
               <span className={styles.genDataCounter__number__prefix}>+</span>
               <span className={styles.genDataCounter__number__dig}>6</span>
            </span>
            <span className={styles.genDataCounter__leyend}>
                Años de experiencia
            </span>
        </div>
    )
}