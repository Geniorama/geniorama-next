
import Banner1 from "../public/img/bg-slide-1.png"
import styles from '../styles/BannerHome.module.css'
import Image from "next/image";
import { useEffect } from "react";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";
import leftArrow from "../public/img/left-arrow.svg"
import rightArrow from "../public/img/right-arrow.svg"
import circleBg from "../public/img/circle-bg.svg"
import circleLinesBg from "../public/img/circle-lines-bg.svg"
import patternDotsWhite from "../public/img/pattern-dots-white.svg"

export default function BannerHome(props){
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <button className="gen-slick-arrow gen-slick-next" onClick={onClick}>
                <div className="gen-slick-arrow__img">
                    <Image src={rightArrow} />
                </div>
            </button>
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <button className="gen-slick-arrow gen-slick-prev" onClick={onClick}>
                <div className="gen-slick-arrow__img">
                    <Image src={leftArrow} />
                </div>  
          </button>
        );
      }
      
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />
    };
    return(
        <div id="slider-home" className={styles.sliderHome}>
            <Slider className="slick-gen-theme dots-into" {...settings}>
                <div className={styles.sliderHomeItem}>
                    <div className={styles.decoration}>
                        {/* Circle bg */}
                        <div style={{
                            position: 'absolute', 
                            bottom:'-10px',
                            left: '0'
                        }}>
                            <Image 
                                src={circleBg}
                            />
                        </div>

                        {/* Circle lines bg */}
                        <div style={{
                            position: 'absolute',
                            right: '0px',
                            bottom: '-10px'
                        }}>
                            <Image src={circleLinesBg}/>
                        </div>

                        {/* Pattern dots white 1 */}
                        <div style={{
                            position: "absolute",
                            top: "20%",
                            left: "10%"
                        }}>
                            <Image src={patternDotsWhite} />
                        </div>

                        {/* Pattern dots white 2 */}
                        <div style={{
                            position: "absolute",
                            top: "70%",
                            left: "30%"
                        }}>
                            <Image src={patternDotsWhite} />
                        </div>
                    </div>
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