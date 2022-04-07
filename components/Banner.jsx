import Image from "next/image"
import ButtonGen from "./ButtonGen"
import styles from "../styles/BannerHome.module.css"


export default function Banner({titleTop, titleBottom, desc, textButton, linkButton, photo, reverse, bgColor}) {
  return (
    <div className={`${styles.genBannerIntro}`} style={{backgroundColor: bgColor}}>
        <div className="row align-items-center">
            <div className={`col-12 col-md-6 ${reverse ? "order-md-last": false}`}>
                <div className="ps-5 ms-lg-5 pe-5 pb-5 pb-lg-0">
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

            <div className={`col-12 col-md-6 ${reverse ? "order-md-first": false}`}>
                <Image src={photo} />
            </div>
        </div>
    </div>
  )
}
