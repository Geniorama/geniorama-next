import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade"
import "swiper/css/navigation"
import Banner1 from "../public/banners/banner-1/cover-banner.png"
import styles from '../styles/BannerHome.module.css'
import Image from "next/image";
import Banner from "./Banner";


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
                <Banner
                    titleTop={"Marketing de"}
                    titleBottom={`Resultados </br>Digitales`}
                    desc={"Generamos campañas de alto impacto para tu negocio"}
                    textButton={"EMPECEMOS"}
                    linkButton={"#"}
                    photo={Banner1}
                    bgColor="#f8f8f8"
                />
            </SwiperSlide>
        </Swiper>
    )
}