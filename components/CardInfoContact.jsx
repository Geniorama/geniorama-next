import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/CardInfoContact.module.css'

export default function CardInfoContact({icon, title, info, link}){
    return(
        <div className={styles.genCardInfo}>
            <Link href={link}>
                <a className={styles.genCardInfo__link}>
                    {icon
                    ?
                    <Image 
                        src={icon}
                        width={100}
                        height={100}
                        className={styles.genCardInfo__img}
                    />
                    :
                    null
                    }
                    <div className={styles.genCardInfo__desc}>
                        <h4 className={styles.genCardInfo__title}>{title}</h4>
                        <p className={styles.genCardInfo__desc__p}>{info}</p>
                    </div>
                </a>
            </Link>
        </div>
    )
}