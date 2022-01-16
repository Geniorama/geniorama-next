import Image from "next/image";
import Link from "next/link";
import LogoLight from '../public/logo/logo-geniorama-03.svg'
import styles from '../styles/Footer.module.css'

export default function Footer(){
    return(
        <footer className={styles.genFooter}>
            <div className="container">
                <div className="text-center">
                    <Image
                        src={LogoLight}
                        width={150}
                        height={70}
                        className={styles.genFooterLogo}
                    />

                    <ul className={`${styles.genNavFooter} nav justify-content-center`}>
                        <li className="nav-item">
                            <Link href="#">
                                <a className="nav-link">
                                    Item Menu
                                </a>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link href="#">
                                <a className="nav-link">
                                    Item Menu
                                </a>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link href="#">
                                <a className="nav-link">
                                    Item Menu
                                </a>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link href="#">
                                <a className="nav-link">
                                    Item Menu
                                </a>
                            </Link>
                        </li>
                    </ul>

                    <ul className={`${styles.genNavSocialFooter} nav justify-content-center`}>
                        <li className="nav-item">
                            <a href="#" className="nav-link" target="_blank">
                                <span className={styles.genNavSocialFooter__icon}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        >
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" />
                                    </svg>
                                </span>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a href="#" className="nav-link" target="_blank">
                                <span className={styles.genNavSocialFooter__icon}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        >
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" />
                                    </svg>
                                </span>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a href="#" className="nav-link" target="_blank">
                                <span className={styles.genNavSocialFooter__icon}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        >
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" />
                                    </svg>
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className={`${styles.genBottomFooter} row justify-content-between mt-4`}>
                    <div className="col-12 col-lg-6 text-center text-lg-right">
                        <p>Geniorama 2022 | All Rights Reserved</p>
                    </div>
                    <div className="col-12 col-lg-6 text-center text-lg-right">
                        <Link href="#">
                            <a className={styles.genBottomFooter__link}>Políticas de privacidad</a>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}