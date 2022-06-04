import Banner1 from "../public/img/bg-slide-1.png";
import Banner2 from "../public/img/bg-slide-2.png";
import styles from "../styles/BannerHome.module.css";
import Image from "next/image";
import { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import leftArrow from "../public/img/left-arrow.svg";
import rightArrow from "../public/img/right-arrow.svg";
import circleBg from "../public/img/circle-bg.svg";
import circleBg2 from "../public/img/circle-2-banner-2.svg"
import circleLinesBg from "../public/img/circle-lines-bg.svg";
import circleLinesBg2 from "../public/img/circle-1-banner-2.svg";
import linesVector from "../public/img/lines-1-banner-2.svg";
import patternDotsWhite from "../public/img/pattern-dots-white.svg";
import patternVectorGreen from "../public/img/vector-1-banner-2.svg";
import ButtonGen from "./ButtonGen";

export default function BannerHome(props) {
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
    nextArrow: <SampleNextArrow />,
  };
  return (
    <div id="slider-home" className={styles.sliderHome}>
      <Slider className="slick-gen-theme dots-into" {...settings}>
        <div className={styles.sliderHomeItem}>
          <div className={styles.decoration}>
            {/* Circle 1 */}
            <div
            className={styles.circleBanner2}
              style={{
                position: "absolute",
                top: "-140px",
                left: "-100px",
              }}
            >
              <Image src={circleBg2} className={styles.imgCircle}/>
            </div>

            {/* Circle 2 */}
            <div
              className={styles.elDecor}
              style={{
                position: "absolute",
                right: "240px",
                top: "-10px",
              }}
            >
              <Image src={circleLinesBg2} className={styles.imgCircle2} />
            </div>

            {/* lines */}
            <div
              className={styles.linesVector}
              style={{
                position: "absolute",
                right: "-75px",
                bottom: "55px",
              }}
            >
              <Image src={linesVector} className={styles.linesVector} />
            </div>

            {/* Pattern vector green */}
            <div
              className={styles.elDecor}
              style={{
                position: "absolute",
                top: "5%",
                left: "40px",
              }}
            >
              <Image src={patternVectorGreen} className={styles.vectorGreen} />
            </div>
          </div>
          <div className={styles.sliderHome__caption}>
            <div className="container">
              <h3 className={styles.sliderHome__title3}>
                ¿Necesitas crear una
              </h3>
              <h2 className={styles.sliderHome__title4}>tienda virtual?</h2>
              <p className={styles.sliderHome__desc2}>
                Obtén ahora un <strong>30% de descuento</strong> en el desarrollo de tu<br></br> tienda
                Online agendando una reunión<br></br> de 30 minutos con nosotros.
              </p>
              <p className={styles.sliderHome__observation}>
              *El descuento será válido una vez tu reunión sea agendada.
              </p>
              <ButtonGen
                text={"¡AGENDA AHORA!"}
                link="https://calendly.com/geniorama-agencia/tienda-virtual-30min"
                primary
                external
                target={"_blank"}
                rel={"noreferrer"}
              />
            </div>
          </div>
          <Image src={Banner2} layout={"fill"} objectFit={"cover"} />
        </div>
        <div className={styles.sliderHomeItem}>
          <div className={styles.decoration}>
            {/* Circle bg */}
            <div
              style={{
                position: "absolute",
                bottom: "-10px",
                left: "0",
              }}
            >
              <Image src={circleBg} />
            </div>

            {/* Circle lines bg */}
            <div
              className={styles.elDecor}
              style={{
                position: "absolute",
                right: "0px",
                bottom: "-10px",
              }}
            >
              <Image src={circleLinesBg} />
            </div>

            {/* Pattern dots white 1 */}
            <div
              className={styles.elDecor}
              style={{
                position: "absolute",
                top: "20%",
                left: "10%",
              }}
            >
              <Image src={patternDotsWhite} />
            </div>

            {/* Pattern dots white 2 */}
            <div
              className={styles.elDecor}
              style={{
                position: "absolute",
                top: "70%",
                left: "30%",
              }}
            >
              <Image src={patternDotsWhite} />
            </div>
          </div>
          <div className={styles.sliderHome__caption}>
            <div className="container">
              <h3 className={styles.sliderHome__title1}>
                Estrategias digitales con
              </h3>
              <h2 className={styles.sliderHome__title2}>Resultados reales</h2>
              <p className={styles.sliderHome__desc}>
                Generamos campañas de alto impacto para tu negocio
              </p>
              <ButtonGen
                text={"TE ASESORAMOS"}
                link="https://calendly.com/geniorama-agencia/consultoria-proyecto-digital-30-mins"
                primary
                external
                target={"_blank"}
                rel={"noreferrer"}
              />
            </div>
          </div>
          <Image src={Banner1} layout={"fill"} objectFit={"cover"} />
        </div>
      </Slider>
    </div>
  );
}
