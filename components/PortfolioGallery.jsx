import Image from "next/image"
import Link from "next/link"
import styles from "../styles/PortfolioGallery.module.css"
import ExampleImage from "../public/simone-hutsch-NEiTE7luK6c-unsplash-1024x1024-1-420x420.jpg"
import IconRight from "../public/icons/arrow-right-s-line.svg"

export default function PortfolioGallery({info, filters}){
    return(
        <div className={styles.genPortfolioWrap}>
            {filters
            ?
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
            :
            null
            }

            <div className={styles.genPortfolioGrid}>
                {
                    info.map((post) => (
                        
                        <div key={post.id} className={styles.genPortfolioGrid__item}>
                            <a href={post.acf.link ? post.acf.link.url : "#"} target={post.acf.link ? post.acf.link.target : ""} title={post.acf.link ? post.acf.link.title : ""} className={styles.genPortfolioLink}>
                                <div className={styles.genPortfolioLink__item__cont__img}>
                                    <Image 
                                        src={post.images.large}
                                        className={styles.genPortfolioGrid__item__img}
                                        layout={"fill"}
                                    />
                                </div>
                                <div className={styles.genPortfolioGrid__item__cap}>
                                    
                                        <button className={styles.genPortfolioGrid__item__cap__button}>
                                            <Image src={IconRight} />
                                        </button>
                                    
                                    <h5 className={styles.genPortfolioGrid__item__cap__title}>
                                        {post.title.rendered}
                                    </h5>
                                    <span className={styles.genPortfolioGrid__item__cap__cat}>
                                        {post.acf.categoria_portafolio}
                                    </span>
                                </div>
                            </a>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

