import Image from "next/image";
import Link from "next/link";
import styles from "../styles/CardPost.module.css";
import CoverPost from "../public/pexels-mikael-blomkvist-6476595.jpg";

export default function CardPost({link, image, date, title, desc}) {
  return (
    <Link href={link}>
      <a className={styles.genCardPostLink}>
        <article className={styles.genCardPostArticle}>
          <Image
            src={image}
            className={styles.genCardPostArticle__img}
            objectFit="cover"
            layout="fill"
          />
          <figcaption className={styles.genCardPostArticle__cap}>
            <span className={styles.genCardPostArticle__cap__date}>
              {date}
            </span>
            <h3 className={styles.genCardPostArticle__cap__title}>
              {title}
            </h3>
            <div className={styles.genCardPostArticle__cap__desc} dangerouslySetInnerHTML={desc} />
              
          </figcaption>
        </article>
      </a>
    </Link>
  );
}
