import Image from "next/image";
import ButtonGen from "../components/ButtonGen";
import Layout from "../components/Layout/Layout";
import styles from "../styles/Home.module.css";
import ImgBanner from "../public/geniorama-banner.svg";
import CardOurGen from "../components/CardOurGen";
import ImagenComo from "../public/como-lo-hacemos-scaled.jpg";
import DataCounter from "../components/DataCounter";
import PortfolioGallery from "../components/PortfolioGallery";
import IconGenEstr from "../public/iconos-web_GEN-ESTRATEGICO.svg";
import IconGenCrea from "../public/iconos-web_GEN-CREATIVO.svg";
import IconGenReal from "../public/iconos-web_GEL-REAL.svg";
import ImgExampleServ from "../public/opportunity.svg";
import Testimonial from "../components/Testimonial";
import CardPost from "../components/CardPost";
import CarouselPosts from "../components/CarouselPosts";
import CardTeamGen from "../components/CardTeamGen";
import ImgTeam from "../public/team-member.png";
import CarouselGen from "../components/CarouselGen";

export default function Home() {
  return (
    <Layout>
      <section className={`${styles.genBannerIntro} py-5`}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6">
              <h1 className={styles.genBannerIntro__title}>
                ¡MARKETING DE RESULTADOS DIGITALES!
              </h1>
              <p className={styles.genBannerIntro__desc}>
                Generamos campañas de alto impacto para tu negocio
              </p>
              <ButtonGen link="#" text="EMPECEMOS" />
            </div>

            <div className="col-12 col-md-6">
              <Image src={ImgBanner} />
            </div>
          </div>
        </div>
      </section>

      <section className="gen-info-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-3 px-4 mb-4 mb-lg-0">
              <h2 className="gen-info-section__title">¡NUESTRO GEN DIGITAL!</h2>
              <p className="gen-info-section__desc">
                Nuestros genes impulsan y potencian el crecimiento de los
                negocios.
              </p>
              <ButtonGen text="VER MÁS" link="#" />
            </div>

            <div className="col-12 col-lg-9">
              <div className={styles.genContGrid}>
                <CardOurGen
                  image={IconGenEstr}
                  title="GEN ESTRATÉGICO"
                  description="Creamos campañas de comunicación innovadoras y arriesgadas que cautivan clientes."
                />

                <CardOurGen
                  image={IconGenCrea}
                  title="GEN CREATIVO"
                  description="Somos expertos en diseño, creatividad, y estilo y lo demostramos en cada etapa de tus campañas."
                />

                <CardOurGen
                  image={IconGenReal}
                  title="GEN REAL"
                  description="Generamos los resultados que tu compañía necesita (leads, ventas, tráfico, prospectos e interacción)."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gen-info-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6">
              <Image src={ImagenComo} className={styles.genImgRounded} />
            </div>

            <div className="col-12 col-lg-6 px-5">
              <h2 className="gen-info-section__title">¿CÓMO LO HACEMOS?</h2>
              <h5>¡Tus clientes son nuestra prioridad!</h5>
              <p className="gen-info-section__desc">
                Acompañamos los objetivos de tu marca brindando asesoría
                estratégica y creativa. Trazamos un plan, un cronograma de
                actividades y ejecutamos. Los resultados son la consecuencia de
                tu visión y nuestra ejecución.
              </p>
              <ButtonGen text="SOBRE NOSOTROS" link="#" />
            </div>
          </div>
        </div>
      </section>

      <section className="gen-info-section">
        <div className="container">
          <div className={styles.genWrapCounters}>
            <DataCounter />
            <DataCounter />
            <DataCounter />
            <DataCounter />
          </div>
        </div>
      </section>

      <section className="gen-info-section">
        <div className="container">
          <h2 className="gen-info-section__title">
            NUESTROS <br /> PROYECTOS WEB
          </h2>

          <PortfolioGallery />
        </div>
      </section>

      <section className="gen-info-section">
        <div className="container">
          <h2 className="gen-info-section__title">
            NUESTROS <br /> SERVICIOS
          </h2>
          <div className={styles.genWrapServices}>
            <CardOurGen
              image={ImgExampleServ}
              link="/"
              title="DISEÑO DE PÁGINAS WEB"
            />
            <CardOurGen
              image={ImgExampleServ}
              link="/"
              title="AJUSTES Y SOPORTE WEB"
            />
            <CardOurGen
              image={ImgExampleServ}
              link="/"
              title="HOSTING Y SERVIDORES"
            />

            <CardOurGen
              image={ImgExampleServ}
              link="/"
              title="POSICIONAMIENTO WEB (SEO)"
            />

            <CardOurGen image={ImgExampleServ} link="/" title="PAUTA DIGITAL" />

            <CardOurGen image={ImgExampleServ} link="/" title="SOCIAL MEDIA" />

            <CardOurGen
              image={ImgExampleServ}
              link="/"
              title="DISEÑO GRÁFICO"
            />

            <CardOurGen
              image={ImgExampleServ}
              link="/"
              title="PRODUCCIÓN AUDIOVISUAL"
            />

            <CardOurGen
              image={ImgExampleServ}
              link="/"
              title="STREAMING (TRANSMISIONES ONLINE)"
            />
          </div>
        </div>
      </section>

      <section className="gen-info-section">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-12 col-lg-6 mb-5 mb-lg-0">
              <Testimonial />
            </div>
            <div className="col-12 col-lg-5">
              <h2 className="gen-info-section__title">
                MÁS DE <br /> NOSOTROS
              </h2>
              <p className="my-4">
                Somos una agencia de marketing y publicidad digital con más de 7
                años de experiencia, administrando, optimizando y generando
                resultados para diferentes marcas nacionales e internacionales.{" "}
              </p>
              <ButtonGen text="SOBRE NOSOTROS" link="#" />
            </div>
          </div>
        </div>
      </section>

      <div className="gen-info-section">
        <div className="container">
          <h2 className="gen-info-section__title">
            PUBLICACIONES <br /> RECIENTES
            <CarouselPosts />
          </h2>
        </div>
      </div>
      <section className="gen-info-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-4">
              <CardTeamGen
                image={ImgTeam}
                name="Oscar Pedraza"
                position="CEO/ Marketing Manager"
                linkedin="https://www.linkedin.com/"
                facebook="https://www.facebook.com/"
                instagram="https://www.instagram.com/"
              />
            </div>
            <div className="col-12 col-md-4">
              <CardTeamGen
                image={ImgTeam}
                name="Oscar Pedraza"
                position="CEO/ Marketing Manager"
                linkedin="https://www.linkedin.com/"
                facebook="https://www.facebook.com/"
                instagram="https://www.instagram.com/"
              />
            </div>
            <div className="col-12 col-md-4 p-4">
              <h2 className="gen-info-section__title">
                NUESTROS
                <br />
                GENIOS
              </h2>
              <p className="pt-4 pb-4">
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system, and expound the actual
                teachings of the great explorer of human happiness. No one.
              </p>
              <ButtonGen text="SOBRE NOSOTROS" link="#" />
            </div>
          </div>
        </div>
      </section>
      <section className="gen-info-section">
        <div className="container">
          <h2 className="gen-info-section__title mb-5">NUESTROS<br />AMIGOS</h2>
          <div className={styles.genCarouselSection}>
            <CarouselGen
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
