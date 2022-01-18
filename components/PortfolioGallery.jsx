import Image from "next/image"
import Link from "next/link"
import styles from "../styles/PortfolioGallery.module.css"
import ExampleImage from "../public/simone-hutsch-NEiTE7luK6c-unsplash-1024x1024-1-420x420.jpg"
import IconRight from "../public/icons/arrow-right-s-line.svg"

export default function PortfolioGallery({info}){
    
    return(
        <div className={styles.genPortfolioWrap}>
            <ul className={`${styles.genPortfolioFilters} nav justify-content-center`}>
                <li className="nav-item">
                    <a className="nav-link" href="#">Item</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="#">Item</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="#">Item</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="#">Item</a>
                </li>
            </ul>

            <div className={styles.genPortfolioGrid}>
                {
                    info.map((post) => (
                        
                        <div key={post.id} className={styles.genPortfolioGrid__item}>
                            <Link href="#">
                                <a className={styles.genPortfolioLink}>
                                    <div className={styles.genPortfolioLink__item__cont__img}>
                                        <Image 
                                            src={post.images.medium}
                                            className={styles.genPortfolioGrid__item__img}
                                            width={400}
                                            height={400}
                                        />
                                    </div>
                                    <div className={styles.genPortfolioGrid__item__cap}>
                                        
                                            <a className={styles.genPortfolioGrid__item__cap__button}>
                                                <Image src={IconRight} />
                                            </a>
                                        
                                        <h5 className={styles.genPortfolioGrid__item__cap__title}>
                                            {post.title.rendered}
                                        </h5>
                                        <span className={styles.genPortfolioGrid__item__cap__cat}>
                                            Category
                                        </span>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

