import styles from "../styles/Testimonial.module.css";
import ImgQuotes from "../public/img/quote.svg";
import Image from "next/image";
import Avatar from "../public/pexels-sinitta-leunen-6652928.jpg";

export default function Testimonial({image, text, name, position, bigText}) {
  return (
    <div className={styles.genTestimonialSingle}>
      <div className={styles.genTestimonialSingle__quote}>
        <Image src={ImgQuotes} className={styles.genTestimonialSingle__img} width={70} height={70}/>
      </div>
      
      
      <div className={`${styles.genTestimonialSingle__desc} ${bigText ? styles.bigText : ""}`} dangerouslySetInnerHTML={{__html: text}} />

      <div className={styles.genTestimonialSingle__footer}>
        <div className={styles.genTestimonialSingle__profile}>
          {image
          ?
          <div className={styles.genTestimonialSingle__profile__avatar}>
              <Image 
                src={image} 
                className={styles.genTestimonialSingle__profile__avatar__img} 
                layout={"fill"}
                objectFit={"cover"}
              />
          </div>
          :
          null
          }
          
          <p className={styles.genTestimonialSingle__profile__info}>
            <span className={styles.genTestimonialSingle__profile__info__name}>{name}</span>
            <span className={styles.genTestimonialSingle__profile__info__pos} dangerouslySetInnerHTML={{__html: position}}></span>
          </p>
        </div>
        <div className={`${styles.genTestimonialSingle__quote}`}>
          <Image src={ImgQuotes} className={styles.genTestimonialSingle__img} width={70} height={70}/>
        </div>
      </div>

      
    </div>
  );
}
