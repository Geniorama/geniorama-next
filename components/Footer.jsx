import Image from "next/image";
import Link from "next/link";
import LogoLight from '../public/logo/gen-logo-horRecurso 7.svg'
import styles from '../styles/Footer.module.css'
import FloatIcons from "./FloatIcons";
import SocialShapes from "../utils/socialShapes.json"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MenuPrincipal from '../menus/menuPrincipal.json'


export default function Footer(){
    return(
        <div className="container-fluid py-3">
            <FloatIcons />
            <footer className={styles.genFooter}>
                <div className="container">
                    <div className="text-center">
                        <Image
                            src={LogoLight}
                            width={150}
                            height={70}
                            className={styles.genFooterLogo}
                        />

                        <ul className={`${styles.genNavFooter} nav justify-content-center flex-column flex-lg-row`}>
                            
                            {MenuPrincipal.map(item=>(
                                <li key={item.id} className="nav-item">
                                    <Link href={item.link}>
                                        <a className="nav-link">
                                            {item.title}
                                        </a>
                                    </Link>
                                </li>
                            ))

                            }
                        </ul>

                        <ul className={`${styles.genNavSocialFooter} nav justify-content-center`}>
                            {SocialShapes.map((item)=>(
                                <li key={item.id} className="nav-item">
                                    <a href={item.link} className="nav-link" target="_blank" title={item.name} rel="noreferrer">
                                        <FontAwesomeIcon icon={['fab', item.fa]}/>
                                    </a>
                                </li>
                            ))
                            }
                        </ul>
                    </div>

                    <div className={`${styles.genBottomFooter} row justify-content-between mt-4`}>
                        <div className="col-12 col-lg-6 text-center text-lg-right">
                            <p>© Geniorama {new Date().getFullYear()} | All Rights Reserved</p>
                        </div>
                        <div className="col-12 col-lg-6 text-center text-lg-right">
                            <Link href="/politica-de-privacidad">
                                <a className={styles.genBottomFooter__link}>Política de privacidad</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}