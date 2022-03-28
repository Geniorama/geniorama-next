import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ImgCarousel from "../public/logo-carrusel.png";
import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";
import styles from "../styles/CarouselGen.module.css"
import LogoEkon from "../public/nuestros-amigos-logos/logo_ekon7.jpg"
import LogoNerd from "../public/nuestros-amigos-logos/logo-agency.png"
import LogoMekontent from "../public/nuestros-amigos-logos/Logo-Mekontent.png"
import LogoUltravioleta from "../public/nuestros-amigos-logos/ULTRAVIOLETA-FINAL-04-1.png"
import LogoTaxo from "../public/nuestros-amigos-logos/Tax-o-logo-150x150.jpg"
import LogoUnivercity from "../public/nuestros-amigos-logos/UniverCity Logo App.jpg"
import LogoBalboa from "../public/nuestros-amigos-logos/balboa-logo-negro.png"
import LogoAntitrama from "../public/nuestros-amigos-logos/antitrama-logo.png"

export default function CarouselGen() {
  return (
    <Swiper
      id="swiper-brands"
      modules={[Autoplay]}
      spaceBetween={30}
      autoplay
      breakpoints={{
        375: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1280: {
          slidesPerView: 6,
          spaceBetween: 10,
        },
      }}
    >
      <SwiperSlide className={styles.CarouselGen__item}>
        <div className={styles.CarouselGen__item__contImg}>
          <Image
              className={styles.CarouselGen__logo} 
              src={LogoEkon}
              layout={"fill"}
              objectFit={"contain"} 
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className={styles.CarouselGen__item}>
        <div className={styles.CarouselGen__item__contImg}>
          <Image
              className={styles.CarouselGen__logo} 
              src={LogoAntitrama}
              layout={"fill"}
              objectFit={"contain"}
          />
        </div>
      </SwiperSlide>
      
      <SwiperSlide className={styles.CarouselGen__item}>
        <div className={styles.CarouselGen__item__contImg}>
          <Image
              className={styles.CarouselGen__logo} 
              src={LogoMekontent}
              layout={"fill"}
              objectFit={"contain"}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className={styles.CarouselGen__item}>
        <div className={styles.CarouselGen__item__contImg}>
          <Image
              className={styles.CarouselGen__logo} 
              src={LogoUltravioleta}
              layout={"fill"}
              objectFit={"contain"}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className={styles.CarouselGen__item}>
        <div className={styles.CarouselGen__item__contImg}>
          <Image
              className={styles.CarouselGen__logo} 
              src={LogoTaxo}
              layout={"fill"}
              objectFit={"contain"}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className={styles.CarouselGen__item}>
        <div className={styles.CarouselGen__item__contImg}>
          <Image
              className={styles.CarouselGen__logo} 
              src={LogoUnivercity}
              layout={"fill"}
              objectFit={"contain"}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className={styles.CarouselGen__item}>
        <div className={styles.CarouselGen__item__contImg}>
          <Image
              className={styles.CarouselGen__logo} 
              src={LogoNerd}
              layout={"fill"}
              objectFit={"contain"}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className={styles.CarouselGen__item}>
        <div className={styles.CarouselGen__item__contImg}>
          <Image
              className={styles.CarouselGen__logo} 
              src={LogoBalboa}
              layout={"fill"}
              objectFit={"contain"}
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
