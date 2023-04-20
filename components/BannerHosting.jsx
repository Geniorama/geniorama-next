import Image from "next/image"
import styles from "../styles/BannerHosting.module.css"
import Link from "next/link"


export default function Banner({textTop, titleTop, desc, photo, bgColor, button}) {
  return (
    <div className={`${styles.genBannerIntro}`} style={{backgroundColor: bgColor}}>
        <div className={styles.bgBanner}>
            <Image src={photo} layout={'fill'} objectFit={"cover"} objectPosition={"left top"} />
        </div>
        <div className="container">
            <div className={styles.contentBanner}>
                <span className={styles.genTextTop}>{textTop}</span>
                <h1 className={styles.genBannerIntro__title}>
                    <span className={styles.genBannerIntro__title__top}>{titleTop}</span>
                </h1>
                <p className={styles.genBannerIntro__desc} dangerouslySetInnerHTML={{__html:desc}}></p>
                <Link href={button.link}>
                  <a className={styles.genButtonBanner}>
                    {button.text}
                  </a>
                </Link>
            </div>
        </div>
    </div>
  )
}
