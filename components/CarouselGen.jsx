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

export default function CarouselGen() {
  return (
    <Swiper
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
          slidesPerView: 5,
          spaceBetween: 10,
        },
      }}
    >
      <SwiperSlide className={styles.CarouselGen__item}>
        <Image
            className={styles.CarouselGen__logo} 
            src={LogoEkon} 
        />
      </SwiperSlide>
      <SwiperSlide className={styles.CarouselGen__item}>
        <Image
            className={styles.CarouselGen__logo} 
            src={LogoNerd} 
        />
      </SwiperSlide>
      <SwiperSlide className={styles.CarouselGen__item}>
        <Image
            className={styles.CarouselGen__logo} 
            src={LogoMekontent} 
        />
      </SwiperSlide>
      <SwiperSlide className={styles.CarouselGen__item}>
        <Image
            className={styles.CarouselGen__logo} 
            src={ImgCarousel} 
        />
      </SwiperSlide>
      <SwiperSlide className={styles.CarouselGen__item}>
        <Image
            className={styles.CarouselGen__logo} 
            src={ImgCarousel} 
        />
      </SwiperSlide>
      <SwiperSlide className={styles.CarouselGen__item}>
        <Image
            className={styles.CarouselGen__logo} 
            src={ImgCarousel} 
        />
      </SwiperSlide>
      <SwiperSlide className={styles.CarouselGen__item}>
        <Image
            className={styles.CarouselGen__logo} 
            src={ImgCarousel} 
        />
      </SwiperSlide>
      <SwiperSlide className={styles.CarouselGen__item}>
        <Image
            className={styles.CarouselGen__logo} 
            src={ImgCarousel} 
        />
      </SwiperSlide>
    </Swiper>
  );
}
