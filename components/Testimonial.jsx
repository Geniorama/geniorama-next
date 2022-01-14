import styles from "../styles/Testimonial.module.css";
import ImgQuotes from "../public/icons/signo-de-comillas-a-la-izquierda.png";
import Image from "next/image";
import Avatar from "../public/pexels-sinitta-leunen-6652928.jpg";

export default function Testimonial() {
  return (
    <div className={styles.genTestimonialSingle}>
      <div className={styles.genTestimonialSingle__quote}>
      <Image src={ImgQuotes} className={styles.genTestimonialSingle__img} width={70} height={70}/>
      </div>
      
      
      <p className={styles.genTestimonialSingle__desc}>
        “ ¡Somos constructores! Hacemos puentes que unen marcas y personas,
        hacemos caminos que facilitan viajes de ida y vuelta”
      </p>

      <div className={styles.genTestimonialSingle__profile}>
        <div className={styles.genTestimonialSingle__profile__avatar}>
            <Image src={Avatar} className={styles.genTestimonialSingle__profile__avatar__img} />
        </div>
        
        <p className={styles.genTestimonialSingle__profile__info}>
          <span className={styles.genTestimonialSingle__profile__info__name}>Oscar Pedraza</span>
          <span className={styles.genTestimonialSingle__profile__info__pos}>CEO / Marketing Manager</span>
        </p>
      </div>
    </div>
  );
}
