import Layout from "../components/Layout/Layout";
import HeadingPage from "../components/HeadingPage";
import BannerHosting from "../components/BannerHosting";
import ImgBanner from "../public/banners/banner-hosting/bg-hosting.png"
import styles from "../styles/BannerHosting.module.css";
import Image from "next/image";
import imgGrid from "../public/img/grid-left.png"
import CardPrice from "../components/CardPrice";
import logo1 from "../public/img/image1.png";
import logo2 from "../public/img/image2.png";
import logo3 from "../public/img/image3.png";
import logo4 from "../public/img/image4.png";
import logo5 from "../public/img/image5.png";
import logo6 from "../public/img/image6.png";
import logo7 from "../public/img/image7.png";
import logo8 from "../public/img/image8.png";
import PatternPlus from "../public/img/pattern-plus.svg";
import PatternPlusVertical from "../public/img/pattern-plus-vertical.svg";
import PatternPoints from "../public/img/patter-points.svg";
import PatternPoinsVertical from "../public/img/patter-points-vertical.svg";
import ImagenForm from "../public/img/imgform.png";
import iconForm from "../public/img/icon-form.png";
import NewsletterForm from "../components/NewsletterForm";


export default function planesHosting(){
    return(
        <Layout
            title={"Planes de hosting - Geniorama"}
            idPage={"gen-home"}
            isLogoLight
         >
            <BannerHosting
            photo={ImgBanner}
            reverse
            textTop={"WEB HOSTING"}
            titleTop={"UN LUGAR, TODOS LOS BENEFICIOS"}
            titleBottom={"Experiencia y pasión"}
            desc={"Tener tu sitio web es importante, pero también lo es el lugar en donde estará alojado. Descubre los beneficios del servicio de hosting de Geniorama y disfruta del acompañamiento experto de nuestros profesionales en cada paso del camino."}
            textButton={"VER PLANES DE HOSTING"}
            linkButton={"#"}
            />
            <div className={styles.titleHosting}>
                <h2 className={styles.titleHostingTop}>CONOCE</h2>
                <h2 className={styles.titleHostingBottom}>NUESTROS PLANES</h2>
            </div>
            <section>
            <div className={styles.decorationImgRounded}>
                    {/* Pattern plus 1 */}
                        <div style={{position: "absolute", top: "700px", left: "90px", zIndex: "2"}}>
                            <Image src={PatternPlus} />
                        </div>
                    </div>
            </section>
            <section className={styles.contGrid1}>
                <Image classname={styles.imgLeft} src={imgGrid} />
                <CardPrice
                    title="ADS ADVANCED"
                    desc="Descripción pendiente"
                    item="4 GB de almacenamiento en SSD."
                    precioanual="$768.000"
                    textsmallyear="/anual"
                    preciomensual="20.000"
                    textsmallmonth="/mes*"
                    link="/#"
                    >

                    </CardPrice>

                    <CardPrice
                    title="ADS ADVANCED"
                    desc="Descripción pendiente"
                    item="4 GB de almacenamiento en SSD."
                    precioanual="$768.000"
                    textsmallyear="/anual"
                    preciomensual="20.000"
                    textsmallmonth="/mes*"
                    link="/#"
                    >
                    </CardPrice>
            </section>
            <section>
            <div className={styles.decorationImgRounded}>
                    {/* Pattern plus 1 */}
                        <div style={{position: "absolute", bottom: "-720px", left: "550px", zIndex: "2"}}>
                            <Image src={PatternPoints} />
                        </div>
                        <div style={{position: "absolute", bottom: "-670px", left: "750px", zIndex: "2"}}>
                            <Image src={PatternPoints} />
                        </div>
                        <div style={{position: "absolute", bottom: "-720px", left: "950px", zIndex: "2"}}>
                            <Image src={PatternPoints} />
                        </div>
                    </div>
            </section>
            <section className={styles.contTitleBasic}>
                <div className="container">
                    <h2>BÁSICOS</h2>
                    <div style={{position: "absolute", top: "1420px", right: "90px", zIndex: "-1"}}>
                            <Image src={PatternPoinsVertical} />
                        </div>
                </div>
            </section>
            <section className={styles.contGrid1}>
                <CardPrice
                    title="ADS ADVANCED"
                    desc="Descripción pendiente"
                    item="4 GB de almacenamiento en SSD."
                    precioanual="$768.000"
                    textsmallyear="/anual"
                    preciomensual="20.000"
                    textsmallmonth="/mes*"
                    link="/#"
                    >
                </CardPrice>

                <CardPrice
                    title="ADS ADVANCED"
                    desc="Descripción pendiente"
                    item="4 GB de almacenamiento en SSD."
                    precioanual="$768.000"
                    textsmallyear="/anual"
                    preciomensual="20.000"
                    textsmallmonth="/mes*"
                    link="/#"
                    >

                </CardPrice>

                <CardPrice
                    title="ADS ADVANCED"
                    desc="Descripción pendiente"
                    item="4 GB de almacenamiento en SSD."
                    precioanual="$768.000"
                    textsmallyear="/anual"
                    preciomensual="20.000"
                    textsmallmonth="/mes*"
                    link="/#"
                    >
                </CardPrice>
            </section>
            <section>
            <div style={{position: "absolute", top: "1880px", left: "90px", zIndex: "-1"}}>
                            <Image src={PatternPlusVertical} />
                        </div>
            </section>
            <section>
                <div className={styles.bannerRadius}>
                    <h2 className={styles.titleTop}>¿Aún no sabes qué plan necesitas?</h2>
                    <span className={styles.textDesc}>No te preocupes, nosotros te asesoramos</span>
                    <a href="" className={styles.linkButton}>Si por favor, asesórame</a>
                </div>
            </section>
            <section>
                <h2 className={styles.titlePlanes}>PLANES <span className={styles.titlePlanesColor}>ALTO TRÁFICO</span></h2>
                <span className={styles.secondPlanes}>¿Vas a anunciar tu sitio web en internet?</span>
                <p className={styles.descPlanes}>Perfecto, asegúrate que el alto tráfico en tu web no la vaya a tumbar. Para eso te ofrecemos los Planes de Hosting de alto tráfico, estos planes cuentan con una mayor capacidad en ancho de banda.</p>
            </section>
            <section className={styles.genContGrid}>
                <CardPrice
                title="ADS ADVANCED"
                desc="Descripción pendiente"
                item="4 GB de almacenamiento en SSD."
                precioanual="$768.000"
                textsmallyear="/anual"
                preciomensual="20.000"
                textsmallmonth="/mes*"
                link="/#"
                >

                </CardPrice>
                <CardPrice
                title="ADS ADVANCED"
                desc="Descripción pendiente"
                item="4 GB de almacenamiento en SSD."
                precioanual="$768.000"
                textsmallyear="/anual"
                preciomensual="20.000"
                textsmallmonth="/mes*"
                link="/#"
                >

                </CardPrice>

                <CardPrice
                title="ADS ADVANCED"
                desc="Descripción pendiente"
                item="4 GB de almacenamiento en SSD."
                precioanual="$768.000"
                textsmallyear="/anual"
                preciomensual="20.000"
                textsmallmonth="/mes*"
                link="/#"
                >

                </CardPrice>
            </section>
            <section className={styles.contLogos}>
                <h2 className={styles.titleLight}>Todos nuestros planes cuentan con la mejor<br></br>tecnología</h2>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-12 col-lg-3 p-4">
                            <Image src={logo1} />
                        </div>
                        <div className="col-12 col-lg-3 p-4">
                            <Image src={logo2} />
                        </div>
                        <div className="col-12 col-lg-3 p-4">
                            <Image src={logo3} />
                        </div>
                        <div className="col-12 col-lg-3 p-4">
                            <Image src={logo4} />
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-12 col-lg-3 p-4">
                            <Image src={logo5} />
                        </div>
                        <div className="col-12 col-lg-3 p-4">
                            <Image src={logo6} />
                        </div>
                        <div className="col-12 col-lg-3 p-4">
                            <Image src={logo7} />
                        </div>
                        <div className="col-12 col-lg-3 p-4">
                            <Image src={logo8} />
                        </div>
                    </div>
                </div>
            </section>
            <section className="gen-info-section">
                <div className="container mt-5">
                <div className="row align-items-center">
                <div className="col-12 col-lg-6">
                    <div data-aos="fade-left" data-aos-duration="1000">
                        <div className={styles.genImgRounded}>
                        <div className={styles.decorationImgRounded}>
                            {/* Pattern plus 1 */}
                            <div style={{position: "absolute", top: "-30px", right: "20px", zIndex: "2"}}>
                            <Image src={PatternPlus} />
                            </div>

                            {/* Pattern plus 2 */}
                            <div style={{position: "absolute", bottom: "-30px", left: "30px", zIndex: "2"}}>
                            <Image src={PatternPlus} />
                            </div> 
                        </div>

                        <div className={styles.imgAuxForm} style={{overflow: "hidden", position: "relative", width: "100%", height: "100%"}}>
                            <Image 
                            src={ImagenForm}
                            layout={"fill"}
                            objectFit={"cover"}
                            />
                        </div>
                        
                        </div>
                    </div>
                    </div>
                    <div className="col-12 col-lg-6 px-5 mb-5 mb-lg-0">
                        <div data-aos="fade-right" data-aos-duration="1000">
                        <Image
                        src={iconForm}
                        width= "60"
                        height= "60"
                        >
                        </Image>
                        <h5 className="gen-text-s-color-2">¡SOMOS EL MEJOR LUGAR</h5>
                        <h2 className="gen-info-section__title">PARA ALOJAR TU SITIO WEB!</h2>
                        <p className="gen-info-section__desc">
                        No se trata simplemente de estar en Internet, contar con los mejores beneficios de hosting ahora es posible con el acompañamiento de <span style={{color: "#009CE1"}}>Geniorama.</span> Déjanos tus datos y te asesoramos.
                        </p>

                        <NewsletterForm>
                            
                        </NewsletterForm>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </Layout>
    );
}