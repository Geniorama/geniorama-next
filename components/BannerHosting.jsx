import Image from "next/image"
import ButtonGen from "./ButtonGen"
import styles from "../styles/BannerHosting.module.css"
import BgIntro from "../public/banners/banner-hosting/bg-hosting.png"


export default function Banner({textTop, titleTop, desc, textButton, linkButton, photo, reverse, bgColor}) {
  return (
    <div className={`${styles.genBannerIntro}`} style={{backgroundColor: bgColor}}>
        <div className={styles.bgBanner}>
            <Image src={BgIntro} layout={'fill'} objectFit={"cover"} objectPosition={"left top"} />
        </div>
        <div className="container">
            <div className={styles.contentBanner}>
                <span className={styles.genTextTop}>{textTop}</span>
                <h1 className={styles.genBannerIntro__title}>
                    <span className={styles.genBannerIntro__title__top}>{titleTop}</span>
                </h1>
                <p className={styles.genBannerIntro__desc} dangerouslySetInnerHTML={{__html:desc}}></p>
                <a className={styles.genButtonBanner}>
                  {textButton}
                </a>
                
            </div>
        </div>
    </div>
  )
}
