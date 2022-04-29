
import Banner1 from "../public/img/bg-slide-1.png"
import styles from '../styles/BannerHome.module.css'
import Image from "next/image";
import { useEffect } from "react";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";

export default function BannerHome(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
    };
    return(
        <div id="slider-home" className={styles.sliderHome}>
            <Slider {...settings}>
                <div className={styles.sliderHomeItem}>
                    <div className={styles.sliderHome__caption}>
                        <div className="container">
                            <h3 className={styles.sliderHome__title1}>Estrategias digitales con</h3>
                            <h2 className={styles.sliderHome__title2}>Resultados reales</h2>
                            <p className={styles.sliderHome__desc}>
                                Generamos campañas de alto impacto para tu negocio
                            </p>
                            <a href="#" className="gen-button gen-button-primary">
                                VER MÁS
                            </a>
                        </div>
                    </div>
                    <Image src={Banner1} layout={"fill"} objectFit={"cover"} />
                </div>
                <div className={styles.sliderHomeItem}>
                    <div className={styles.sliderHome__caption}>
                        <div className="container">
                            <h3 className={styles.sliderHome__title1}>Estrategias digitales con</h3>
                            <h2 className={styles.sliderHome__title2}>Resultados reales</h2>
                            <p className={styles.sliderHome__desc}>
                                Generamos campañas de alto impacto para tu negocio
                            </p>
                            <a href="#" className="gen-button gen-button-primary">
                                VER MÁS
                            </a>
                        </div>
                    </div>
                    <Image src={Banner1} layout={"fill"} objectFit={"cover"} />
                </div>
                <div className={styles.sliderHomeItem}>
                    <div className={styles.sliderHome__caption}>
                        <div className="container">
                            <h3 className={styles.sliderHome__title1}>Estrategias digitales con</h3>
                            <h2 className={styles.sliderHome__title2}>Resultados reales</h2>
                            <p className={styles.sliderHome__desc}>
                                Generamos campañas de alto impacto para tu negocio
                            </p>
                            <a href="#" className="gen-button gen-button-primary">
                                VER MÁS
                            </a>
                        </div>
                    </div>
                    <Image src={Banner1} layout={"fill"} objectFit={"cover"} />
                </div>
            </Slider>
        </div>
    )
}