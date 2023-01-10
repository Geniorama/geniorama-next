import Layout from "../components/Layout/Layout";
import HeadingPage from "../components/HeadingPage";
import BannerHosting from "../components/BannerHosting";
import ImgBanner from "../public/banners/banner-hosting/bg-hosting.png"
import styles from "../styles/BannerHosting.module.css";
import Image from "next/image";
import imgGrid from "../public/img/grid-left.png"
import CardPrice from "../components/CardPrice";

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
            <section className={styles.contGrid1}>
                <div className={styles.gridLeft}>
                    <Image
                    src={imgGrid}
                    sizes="50vh"
                    >
                    </Image>
                </div>
                <div className={styles.gridLeft}>

                </div >
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
                title="Hola"
                desc="Hola"
                item="item 1"
                precioanual="20.000"
                preciomensual="20.000"
                link="/#"
                >

                </CardPrice>
            </section>
        </Layout>
    );
}