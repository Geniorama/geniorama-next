import Image from "next/image";
import Link from "next/link";
import styles from "../styles/CardPost.module.css";
import CoverPost from '../public/pexels-mikael-blomkvist-6476595.jpg'

export default function CardPost() {
  return (
    <Link href="#">
        <a className={styles.genCardPostLink}>
            <article className={styles.genCardPostArticle}>
                <figure className={styles.genCardPostArticle__fig}>
                    <Image
                        src={CoverPost} 
                        className={styles.genCardPostArticle__img}
                        objectFit="cover"
                        layout="fill"
                    />
                    <figcaption className={styles.genCardPostArticle__cap}>
                        <span className={styles.genCardPostArticle__cap__date}>23/11/2021</span>
                        <h3 className={styles.genCardPostArticle__cap__title}>Title post</h3>
                        <p className={styles.genCardPostArticle__cap__desc}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit...
                        </p>
                    </figcaption>
                </figure>
            </article>
        </a>
    </Link>
  );
}
