import Image from "next/image";
import ButtonGen from "../components/ButtonGen";
import Layout from "../components/Layout/Layout";
import styles from "../styles/Home.module.css";
import CardOurGen from "../components/CardOurGen";
import ImagenComo from "../public/como-lo-hacemos-scaled.jpg";
import PortfolioGallery from "../components/PortfolioGallery";
import IconGenEstr from "../public/icons/new-icons/iconos web_GEN ESTRATEGICO copia.svg";
import IconGenCrea from "../public/icons/new-icons/iconos web_GEN CREATIVO copia.svg";
import IconGenReal from "../public/icons/new-icons/iconos web_GEL REAL copia.svg";
import ImgExampleServ from "../public/opportunity.svg";
import Testimonial from "../components/Testimonial";
import CarouselPosts from "../components/CarouselPosts";
import CardTeamGen from "../components/CardTeamGen";
import ImgTeam from "../public/team-member.png";
import CarouselGen from "../components/CarouselGen";
import ImgAngelBurgos from "../public/equipo/team-angel.png"
import ImgOscarPedraza from "../public/equipo/team-oscar.png"
import BannerHome from "../components/BannerHome";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import IconDisenoWeb from '../public/icons/new-icons/iconos web_Diseño de páginas web.svg';
import IconSoporteWeb from '../public/icons/new-icons/iconos web_ajuste y soporte web.svg';
import IconHosting from '../public/icons/new-icons/iconos web_hosting y servidores.svg';
import IconPosicionamientoSeo from '../public/icons/new-icons/iconos web_posicionamiento web.svg';
import IconSocialMedia from '../public/icons/new-icons/iconos web_social media.svg';
import IconDisenoGrafico from '../public/icons/new-icons/iconos web_diseño grafico.svg';
import IconProdAudiovisual from '../public/icons/new-icons/iconos web_produccion audiovisual.svg';
import IconStream from '../public/icons/new-icons/iconos web_streaming.svg';
import IconPauta from '../public/icons/new-icons/iconos web_pauta digital.svg';
import IconGenExample from '../public/img/icon-gen-example.svg';
import PatternPlus from '../public/img/pattern-plus.svg';
import SectionDataCounters from "../components/SectionDataCounters";
import BgNuestrosServicios from "../public/img/bg-nuestros-servicios.jpg"
import ImgMasDeNosotros from "../public/img/img-mas-de-nosotros.png"
import ReCAPTCHA from 'react-google-recaptcha'
import ImgHeaderPopup from '../public/img/header-popup.jpg'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

export default function Home({data, dataBlog}) {
  useEffect(()=>{
    AOS.init()

    if(!localStorage.getItem('isFormComplete')){
        const activeClass = styles.activePopup
        const showPopup = () => {
        }
    }

    
  }, [])
  return (
    <Layout 
      title={"Geniorama - Agencia Digital"}
      idPage={"gen-home"}
      isLogoLight
      >

      <BannerHome />

      <section className="gen-info-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 px-4 mb-4 mb-lg-0" data-aos="fade-right" data-aos-duration="1000">
              <h2 className="gen-info-section__title text-center">¡NUESTRO <span className="gen-text-s-color-2">GEN DIGITAL</span>!</h2>
              <h5 className={styles.phrase}>
                Generamos y aseguramos resultados reales, medibles y comprobables
              </h5>
            </div>

            <div className="col-12" data-aos="fade-left" data-aos-duration="1000">
              <div className={styles.genContGrid}>
                <CardOurGen
                  image={IconGenEstr}
                  title="GEN ESTRATÉGICO"
                  description={
                    "<p>Somos expertos en crear y llevar a cabo campañas de comunicación y propuestas web innovadoras y arriesgadas,  capaces de sorprender y cautivar. Ponemos a su disposición las últimas tendencias de diseño y navegación, con el fin de mejorar en todo momento la experiencia del usuario ya que  nuestro objetivo es lograr en todo momento, que nuestros clientes alcancen sus objetivos.</p>"
                  }
                />

                <CardOurGen
                  image={IconGenCrea}
                  title="GEN CREATIVO"
                  description="<p>La creatividad también hace parte de nuestro ADN, somos expertos en investigación, conceptualización y diseño de campañas y páginas web creativas con un mensaje contundente. Toda nuestra atención está en los pequeños detalles, siendo este, el verdadero secreto de nuestro nivel de éxito al momento de comunicar y hacer visibles a nuestros clientes.</p>"
                />

                <CardOurGen
                  image={IconGenReal}
                  title="GEN REAL"
                  description="<p>Desde nuestros inicios, hemos creído en el gran poder que tiene el Internet para el desarrollo e impulso de las marcas y nos hemos consolidado como verdaderos maestros de la pauta digital, llevando a cabo procesos creados específicamente para lograr las metas de cada uno de nuestros clientes.</p>"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gen-info-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6 px-5 mb-5 mb-lg-0">
                <div data-aos="fade-right" data-aos-duration="1000">
                  <h2 className="gen-info-section__title">¿CÓMO LO HACEMOS?</h2>
                  <h5 className="gen-text-s-color-2">¡Tus clientes son nuestra prioridad!</h5>
                  <p className="gen-info-section__desc">
                    Acompañamos los objetivos de tu marca brindando asesoría
                    estratégica y creativa. Trazamos un plan, un cronograma de
                    actividades y ejecutamos. Los resultados son la consecuencia de
                    tu visión y nuestra ejecución.
                  </p>
                  <ButtonGen secondary text="VER SERVICIOS" link="/#servicios" />
                </div>
            </div>
            <div className="col-12 col-lg-6">
              <div data-aos="fade-left" data-aos-duration="1000">
                <div className={styles.genImgRounded}>
                  <div className={styles.decorationImgRounded}>
                    {/* Pattern plus 1 */}
                    <div style={{position: "absolute", top: "-30px", left: "-20px"}}>
                       <Image src={PatternPlus} />
                    </div>

                    {/* Pattern plus 2 */}
                    <div style={{position: "absolute", bottom: "-30px", right: "0px", transform: "rotate(90deg)"}}>
                       <Image src={PatternPlus} />
                    </div> 
                  </div>

                  <div style={{borderRadius: "50px", overflow: "hidden", position: "relative", width: "100%", height: "100%"}}>
                    <Image 
                      src={ImagenComo}
                      layout={"fill"}
                      objectFit={"cover"}
                    />
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gen-section-counters" className="gen-info-section">
        <SectionDataCounters />
      </section>

      <section className="gen-info-section">
        <div className="container">
          <h2 className="gen-info-section__title">
            NUESTROS PROYECTOS <br /> <span className="gen-text-s-color-2">WEB</span>
          </h2>

          <PortfolioGallery
            info={data}
            favs
          />

          <div className={`${styles.buttonsProjects} text-center mt-5`}>
            <ButtonGen
              link="/proyectos/web"
              text="Ver todo"
              secondary
            />

            <ButtonGen
              link="https://wa.link/k9v2me"
              text="COTICEMOS TU PROYECTO"
              cta
              external
              target={'_blank'}
              rel={'noreferrer'}
            />
          </div>
        </div>
      </section>

      <section className={`${styles.servicios} gen-info-section`} id="servicios">
        <div className={styles.bgImage}>
            <Image src={BgNuestrosServicios} layout={"fill"} objectFit={"cover"} />
        </div>
        <div className={`${styles.servicesContent} container`}>
          <h2 className={`${styles.servicesContent__title} gen-info-section__title`}>
            NUESTROS <br /> SERVICIOS
          </h2>
          <div className={styles.genWrapServices}>
            <CardOurGen
              image={IconDisenoWeb}
              link="/"
              title="DISEÑO DE PÁGINAS WEB"
              dark
              shadow
            />
            <CardOurGen
              image={IconSoporteWeb}
              link="/"
              title="MANTENIMIENTO Y SOPORTE WEB"
              dark
              shadow
            />
            <CardOurGen
              image={IconHosting}
              link="/"
              title="HOSTING Y SERVIDORES"
              dark
              shadow
            />

            <CardOurGen
              image={IconPosicionamientoSeo}
              link="/"
              title="POSICIONAMIENTO WEB (SEO)"
              dark
              shadow
            />

            <CardOurGen
              image={IconPauta} 
              link="/" 
              title="PAUTA DIGITAL"
              dark
              shadow
            />

            <CardOurGen 
              image={IconSocialMedia} 
              link="/" 
              title="SOCIAL MEDIA"
              dark
              shadow
            />

            <CardOurGen
              image={IconDisenoGrafico}
              link="/"
              title="DISEÑO GRÁFICO"
              dark
              shadow
            />

            <CardOurGen
              image={IconProdAudiovisual}
              link="/"
              title="PRODUCCIÓN AUDIOVISUAL"
              dark
              shadow
            />

            <CardOurGen
              image={IconStream}
              link="/"
              title="STREAMING (TRANSMISIONES ONLINE)"
              dark
              shadow
            />
          </div>
        </div>
      </section>


      <section className={styles.sectionTestimonial}>
        <div className="container">
          <Testimonial
            image={ImgTeam}
            text={"<p><strong>¡Somos constructores!</strong> Hacemos puentes que unen marcas y personas, hacemos caminos que facilitan viajes de ida y vuelta</p>"}
            name={"Oscar Pedraza"}
            position={"CEO / Marketing Manager"}
            bigText
          />

          <div className="text-center mt-5">
            <ButtonGen text={"Construyamos tu proyecto"} cta link={"https://wa.link/73cza4"} external target={'_blank'} rel={'noreferrer'}/>
          </div>
        </div>
      </section>
      <section className="gen-info-section">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-12 col-lg-6 mb-5 mb-lg-0">
            <div className={styles.genImgRounded}>
                  <div className={styles.decorationImgRounded}>
                    {/* Pattern plus 1 */}
                    <div style={{position: "absolute", top: "-30px", left: "-20px"}}>
                       <Image src={PatternPlus} />
                    </div>

                    {/* Pattern plus 2 */}
                    <div style={{position: "absolute", bottom: "-30px", right: "0px", transform: "rotate(90deg)"}}>
                       <Image src={PatternPlus} />
                    </div> 
                  </div>

                  <div style={{borderRadius: "50px", overflow: "hidden", position: "relative", width: "100%", height: "100%"}}>
                    <Image 
                      src={ImgMasDeNosotros}
                      layout={"fill"}
                      objectFit={"cover"}
                    />
                  </div>
                  
                </div>
            </div>
            <div className="col-12 col-lg-5">
              <h2 className="gen-info-section__title">
                MÁS DE <br /> <span className="gen-text-s-color-2">NOSOTROS</span>
              </h2>
              <p className="my-4 gen-info-section__desc">
                Somos una agencia de marketing y publicidad digital con más de 8
                años de experiencia, administrando, optimizando y generando
                resultados para diferentes marcas nacionales e internacionales.{" "}
              </p>
              <ButtonGen secondary text="SOBRE GENIORAMA" link="/sobre-nosotros" />
            </div>
          </div>
        </div>
      </section>

      <section className="gen-info-sectio d-none">
        <div className="container">
          <h2 className="gen-info-section__title">
            PUBLICACIONES <br /> <span className="gen-text-s-color-2">RECIENTES</span>
          </h2>
          <CarouselPosts
            info={dataBlog}
          />
        </div>
      </section>

      <section className="gen-info-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-8">
              <div className={styles.genWrapTeam}>
                <CardTeamGen
                  image={ImgAngelBurgos}
                  name="Angel Burgos"
                  position={"CTO / Web Manager"}
                  linkedin={"https://www.linkedin.com/in/angel-burgos-mesa-a5907a126/"}
                  github={"https://github.com/angelpublicista"}
                />

                <CardTeamGen
                  image={ImgOscarPedraza}
                  name="Oscar Pedraza"
                  position={"CEO / Marketing Manager"}
                  linkedin={"https://www.linkedin.com/in/oscar-pedraza/"}
                />                
              </div>
            </div>
            <div className="col-12 col-lg-4 p-4">
              <h2 className="gen-info-section__title">
                NUESTROS
                <br />
                <span className="gen-text-s-color-2">GENIOS</span>
              </h2>
              <p className="gen-info-section__desc">
                En <strong>Geniorama</strong> creemos en el talento, es por eso que hemos consolidado un equipo de trabajo integral, lleno de profesionales listos para afrontar cualquier reto, llevando a nuestros clientes a alcanzar sus objetivos.
                <br /><br />
                <span>
                ¡Conoce a los miembros del <br /> <strong>Dream Team Geniorama</strong>!
                </span>
              </p>
              <ButtonGen secondary text="VER MÁS" link="/sobre-nosotros" />
            </div>
          </div>
        </div>
      </section>
      <section className="gen-info-section">
        <div className="container">
          <h2 className="gen-info-section__title mb-5">PARTNERS</h2>
          <div className={`${styles.genCarouselSection} ${styles.genCarouselSectionBrands}`}>
            <CarouselGen
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getServerSideProps({res}){
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

  const url_api_blog ="https://www.geniorama.site/cms/wp-json/wp/v2/posts"
  const url_api = "https://www.geniorama.site/cms/wp-json/wp/v2/portfolio/?per_page=6&_embed=true"
  try{
    const res = await fetch(url_api)
    const data = await res.json()

    const resBlog = await fetch(url_api_blog)
    const dataBlog = await resBlog.json()
    return {
      props: {
        data,
        dataBlog
      }
    }
  } catch (error){
    console.log(error)
  }
}

