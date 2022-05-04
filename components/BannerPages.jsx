import Image from "next/image"
import ButtonGen from "./ButtonGen"
import styles from "../styles/BannerPages.module.css"
import BgIntro from "../public/img/bg-projects-page.jpg"


export default function Banner({titleTop, titleBottom, desc, textButton, linkButton, photo, reverse, bgColor}) {
  return (
    <div className={`${styles.genBannerIntro}`} style={{backgroundColor: bgColor}}>
        <div className={styles.bgBanner}>
            <Image src={BgIntro} layout={'fill'} objectFit={"cover"} objectPosition={"left top"} />
        </div>
        <div className="container">
            <div className={styles.contentBanner}>
                <h1 className={styles.genBannerIntro__title}>
                    <span className={styles.genBannerIntro__title__top}>{titleTop}</span>
                    <span className={styles.genBannerIntro__title__bottom} dangerouslySetInnerHTML={{__html:titleBottom}}></span>
                </h1>
                <p className={styles.genBannerIntro__desc} dangerouslySetInnerHTML={{__html:desc}}></p>
                {textButton
                    ?
                    <ButtonGen link={linkButton} text={textButton} />
                    :
                    false
                }
                
            </div>
        </div>
    </div>
  )
}
