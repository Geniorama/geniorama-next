import Image from "next/image"
import styles from "../styles/DataCounter.module.css"

export default function DataCounter({image, prefix, number, leyend}){
    return(
        <div className={`${styles.genDataCounter} text-center`}>
            {image
            ?
            <Image 
                src={image}
                width={130}
                height={130}
            />
            :
            null
            }
            <span className={styles.genDataCounter__number}>
               <span className={styles.genDataCounter__number__prefix}>{prefix}</span>
               <span className={styles.genDataCounter__number__dig}>{number}</span>
            </span>
            <span className={styles.genDataCounter__leyend}>
                {leyend}
            </span>
        </div>
    )
}