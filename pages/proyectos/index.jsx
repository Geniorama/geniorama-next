import Layout from '../../components/Layout/Layout'
import Banner from '../../components/Banner'
import ImgBanner from '../../public/banners/banner-proyectos/cover-banner-proyectos.png'
import styles from '../../styles/Proyectos.module.css'
import Link from 'next/link'
import IconBack from '../../public/icons/ep_back.svg'
import Image from 'next/image'
import CardCatProyects from '../../components/CardCatProyects'
import coverWeb from "../../public/proyectos/proyectos-web.jpg"
import coverCampanas from "../../public/proyectos/campanas-digitales.jpg"
import coverBranding from "../../public/proyectos/branding.jpg"
import coverAudiovisual from "../../public/proyectos/prod-audiovisual.jpg"

export default function Proyectos() {
  return (
    <Layout
        title={"Proyectos - Geniorama"}
        idPage="gen-proyectos"
    >
    <Banner
        photo={ImgBanner}
        reverse
        titleTop={"Combinamos"}
        titleBottom={"Experiencia y pasión"}
        desc={"En todo lo que hacemos. Este <strong>portafolio</strong> es el resultado de ello"}
    />

    <section>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 px-5">
                    <Link href={"/"}>
                        <a className={styles.linkBack}>
                            <Image src={IconBack} />
                            <span className={styles.linkBack__text}>Ir al inicio</span>
                        </a>
                    </Link>

                    <CardCatProyects
                        bgImage={coverWeb}
                        title={"DISEÑO Y DESARROLLO WEB"}
                        link={"/proyectos/web"}
                    />

                    <CardCatProyects
                        bgImage={coverBranding}
                        title={"BRANDING E IMAGEN CORPORATIVA"}
                        link={"#"}
                    />
                </div>
                <div className="col-lg-6 px-5">
                    <CardCatProyects
                        bgImage={coverCampanas}
                        title={"CAMPAÑAS DIGITALES"}
                        link={"#"}
                    />

                    <CardCatProyects
                        bgImage={coverAudiovisual}
                        title={"PRODUCCIÓN AUDIOVISUAL"}
                        link={"#"}
                    />
                </div>
            </div>
        </div>
    </section>

    </Layout>
  )
}
