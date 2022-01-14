import Image from "next/image"
import Link from "next/link"
import styles from "../styles/PortfolioGallery.module.css"
import ExampleImage from "../public/simone-hutsch-NEiTE7luK6c-unsplash-1024x1024-1-420x420.jpg"
import IconRight from "../public/icons/arrow-right-s-line.svg"

export default function PortfolioGallery(){
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
                <div className={styles.genPortfolioGrid__item}>
                    <Link href="#">
                        <a className={styles.genPortfolioLink}>
                            <Image 
                                src={ExampleImage}
                                className={styles.genPortfolioGrid__item__img}
                            />
                            <div className={styles.genPortfolioGrid__item__cap}>
                                
                                    <a className={styles.genPortfolioGrid__item__cap__button}>
                                        <Image src={IconRight} />
                                    </a>
                                
                                <h5 className={styles.genPortfolioGrid__item__cap__title}>
                                    Title project
                                </h5>
                                <span className={styles.genPortfolioGrid__item__cap__cat}>
                                    Category
                                </span>
                            </div>
                        </a>
                    </Link>
                </div>

                <div className={styles.genPortfolioGrid__item}>
                    <Link href="#">
                        <a className={styles.genPortfolioLink}>
                            <Image 
                                src={ExampleImage}
                                className={styles.genPortfolioGrid__item__img}
                            />
                            <div className={styles.genPortfolioGrid__item__cap}>
                                
                                    <a className={styles.genPortfolioGrid__item__cap__button}>
                                        <Image src={IconRight} />
                                    </a>
                                
                                <h5 className={styles.genPortfolioGrid__item__cap__title}>
                                    Title project
                                </h5>
                                <span className={styles.genPortfolioGrid__item__cap__cat}>
                                    Category
                                </span>
                            </div>
                        </a>
                    </Link>
                </div>

                <div className={styles.genPortfolioGrid__item}>
                    <Link href="#">
                        <a className={styles.genPortfolioLink}>
                            <Image 
                                src={ExampleImage}
                                className={styles.genPortfolioGrid__item__img}
                            />
                            <div className={styles.genPortfolioGrid__item__cap}>
                                
                                    <a className={styles.genPortfolioGrid__item__cap__button}>
                                        <Image src={IconRight} />
                                    </a>
                                
                                <h5 className={styles.genPortfolioGrid__item__cap__title}>
                                    Title project
                                </h5>
                                <span className={styles.genPortfolioGrid__item__cap__cat}>
                                    Category
                                </span>
                            </div>
                        </a>
                    </Link>
                </div>

                <div className={styles.genPortfolioGrid__item}>
                    <Link href="#">
                        <a className={styles.genPortfolioLink}>
                            <Image 
                                src={ExampleImage}
                                className={styles.genPortfolioGrid__item__img}
                            />
                            <div className={styles.genPortfolioGrid__item__cap}>
                                
                                    <a className={styles.genPortfolioGrid__item__cap__button}>
                                        <Image src={IconRight} />
                                    </a>
                                
                                <h5 className={styles.genPortfolioGrid__item__cap__title}>
                                    Title project
                                </h5>
                                <span className={styles.genPortfolioGrid__item__cap__cat}>
                                    Category
                                </span>
                            </div>
                        </a>
                    </Link>
                </div>

                <div className={styles.genPortfolioGrid__item}>
                    <Link href="#">
                        <a className={styles.genPortfolioLink}>
                            <Image 
                                src={ExampleImage}
                                className={styles.genPortfolioGrid__item__img}
                            />
                            <div className={styles.genPortfolioGrid__item__cap}>
                                
                                    <a className={styles.genPortfolioGrid__item__cap__button}>
                                        <Image src={IconRight} />
                                    </a>
                                
                                <h5 className={styles.genPortfolioGrid__item__cap__title}>
                                    Title project
                                </h5>
                                <span className={styles.genPortfolioGrid__item__cap__cat}>
                                    Category
                                </span>
                            </div>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}