import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade"
import "swiper/css/navigation"
import ImgBanner from "../public/geniorama-banner.svg";
import Banner1 from "../public/banners/banner-1/cover-banner.png"
import styles from '../styles/BannerHome.module.css'
import ButtonGen from "../components/ButtonGen";
import Image from "next/image";


export default function BannerHome(){
    return(
        <Swiper
            modules={[EffectFade, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            effect="fade"
            >
            <SwiperSlide>
                <div className={`${styles.genBannerIntro}`}>
                    <div className="row align-items-center">
                        <div className="col-12 col-md-6">
                            <div className="ps-5 ms-5 pe-5">
                                <h1 className={styles.genBannerIntro__title}>
                                    <span className={styles.genBannerIntro__title__top}>Marketing de</span>
                                    <span className={styles.genBannerIntro__title__bottom}>Resultados <br />Digitales</span>
                                </h1>
                                <p className={styles.genBannerIntro__desc}>
                                    Generamos campañas de alto impacto para tu negocio
                                </p>
                                <ButtonGen link="#" text="EMPECEMOS" />
                            </div>
                        </div>

                        <div className="col-12 col-md-6">
                            <Image src={Banner1} />
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}