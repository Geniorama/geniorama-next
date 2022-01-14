import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ImgCarousel from "../public/logo-carrusel.png";
import Image from "next/image";
import styles from "../styles/CarouselGen.module.css"

export default function CarouselGen() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={30}
      slidesPerView={5}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <Image
            className={styles.CarouselGen__logo} 
            src={ImgCarousel} 
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
            className={styles.CarouselGen__logo} 
            src={ImgCarousel} 
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
            className={styles.CarouselGen__logo} 
            src={ImgCarousel} 
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
            className={styles.CarouselGen__logo} 
            src={ImgCarousel} 
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
            className={styles.CarouselGen__logo} 
            src={ImgCarousel} 
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
            className={styles.CarouselGen__logo} 
            src={ImgCarousel} 
        />
      </SwiperSlide>
    </Swiper>
  );
}
