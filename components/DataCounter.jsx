import Image from "next/image"
import styles from "../styles/DataCounter.module.css"

export default function DataCounter({image, prefix, number, leyend, target}){
    return(
        <div className={`${styles.genDataCounter} text-center gen-item-counter`}>
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
               <span data-target={target} className={`${styles.genDataCounter__number__dig} gen-item-counter__number`}>{number}</span>
            </span>
            <span className={styles.genDataCounter__leyend}>
                {leyend}
            </span>
        </div>
    )
}