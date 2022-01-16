import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ImgCarousel from "../public/logo-carrusel.png";
import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";
import styles from "../styles/CarouselGen.module.css"

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
      <SwiperSlide className="text-center">
        <Image
            className={styles.CarouselGen__logo} 
            src={ImgCarousel} 
        />
      </SwiperSlide>
      <SwiperSlide className="text-center">
        <Image
            className={styles.CarouselGen__logo} 
            src={ImgCarousel} 
        />
      </SwiperSlide>
      <SwiperSlide className="text-center">
        <Image
            className={styles.CarouselGen__logo} 
            src={ImgCarousel} 
        />
      </SwiperSlide>
      <SwiperSlide className="text-center">
        <Image
            className={styles.CarouselGen__logo} 
            src={ImgCarousel} 
        />
      </SwiperSlide>
      <SwiperSlide className="text-center">
        <Image
            className={styles.CarouselGen__logo} 
            src={ImgCarousel} 
        />
      </SwiperSlide>
      <SwiperSlide className="text-center">
        <Image
            className={styles.CarouselGen__logo} 
            src={ImgCarousel} 
        />
      </SwiperSlide>
      <SwiperSlide className="text-center">
        <Image
            className={styles.CarouselGen__logo} 
            src={ImgCarousel} 
        />
      </SwiperSlide>
      <SwiperSlide className="text-center">
        <Image
            className={styles.CarouselGen__logo} 
            src={ImgCarousel} 
        />
      </SwiperSlide>
    </Swiper>
  );
}
