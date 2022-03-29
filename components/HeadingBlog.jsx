import Image from 'next/image'
import styles from '../styles/HeadingBlog.module.css'


export default function HeadingBlog({title, bgImage}) {
  return (
    <div className={styles.genBgImage} style={{backgroundImage: `url(${bgImage})`}}>
        <div className="container pt-5">
            <div className={styles.genBgImage__text}>
                <h1 className={styles.genBgImage__post__title}>{title}</h1>
            </div>
        </div>
    </div>
  )
}
