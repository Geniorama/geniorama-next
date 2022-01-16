import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade"
import "swiper/css/navigation"
import ImgBanner from "../public/geniorama-banner.svg";
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
                <div className={`${styles.genBannerIntro} py-5`}>
                    <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-6">
                            <h1 className={styles.genBannerIntro__title}>
                                ¡SITIOS WEB!
                            </h1>
                            <p className={styles.genBannerIntro__desc}>
                                Generamos campañas de alto impacto para tu negocio
                            </p>
                            <ButtonGen link="#" text="EMPECEMOS" />
                        </div>

                        <div className="col-12 col-md-6">
                            <Image src={ImgBanner} />
                        </div>
                    </div>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className={`${styles.genBannerIntro} py-5`}>
                    <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-6">
                            <h1 className={styles.genBannerIntro__title}>
                                ¡MARKETING DE RESULTADOS DIGITALES!
                            </h1>
                            <p className={styles.genBannerIntro__desc}>
                                Generamos campañas de alto impacto para tu negocio
                            </p>
                            <ButtonGen link="#" text="EMPECEMOS" />
                        </div>

                        <div className="col-12 col-md-6">
                            <Image src={ImgBanner} />
                        </div>
                    </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}