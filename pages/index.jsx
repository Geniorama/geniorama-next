import Image from "next/image";
import ButtonGen from "../components/ButtonGen";
import Layout from "../components/Layout/Layout";
import styles from "../styles/Home.module.css";
import CardOurGen from "../components/CardOurGen";
import ImagenComo from "../public/como-lo-hacemos-scaled.jpg";
import DataCounter from "../components/DataCounter";
import PortfolioGallery from "../components/PortfolioGallery";
import IconGenEstr from "../public/iconos-web_GEN-ESTRATEGICO.svg";
import IconGenCrea from "../public/iconos-web_GEN-CREATIVO.svg";
import IconGenReal from "../public/iconos-web_GEL-REAL.svg";
import ImgExampleServ from "../public/opportunity.svg";
import Testimonial from "../components/Testimonial";
import CarouselPosts from "../components/CarouselPosts";
import CardTeamGen from "../components/CardTeamGen";
import ImgTeam from "../public/team-member.png";
import CarouselGen from "../components/CarouselGen";
import ImgAngelBurgos from "../public/angel-burgos.jpg"
import BannerHome from "../components/BannerHome";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import IconoExperiencia from "../public/iconos-web_6-anos-experiencia.svg"
import IconoClientes from "../public/iconos-web_clientes-felices.svg"
import IconoTazas from '../public/iconos-web_tazas-de-cafe.svg'
import IconoIdea from '../public/iconos-web_me-gusta-la-idea.svg'
import IconDisenoWeb from '../public/icons/iconos web_diseno_paginas_web.svg'
import IconSoporteWeb from '../public/icons/iconos web_soporte_web.svg'
import IconHosting from '../public/icons/iconos web_hosting_ servidores.svg'
import IconPosicionamientoSeo from '../public/icons/iconos web_posicionamiento_seo.svg'
import IconSocialMedia from '../public/icons/iconos web_social media.svg'
import IconDisenoGrafico from '../public/icons/iconos web_diseno grafico.svg'
import IconProdAudiovisual from '../public/icons/iconos web_produccion audiovisual.svg'
import IconStream from '../public/icons/iconos web_streaming.svg'
import IconPauta from '../public/icons/pauta digital.svg'


export default function Home({data, dataBlog}) {
  useEffect(()=>{
    AOS.init()
    const counters = document.querySelectorAll('.gen-item-counter__number')
    const speed = 2000

    counters.forEach(counter => {
      counter.innerText = "0"

      const updateCounter = () =>{
        const target = parseInt(counter.dataset.target)
        const count = parseInt(counter.innerText)

        const inc = target / speed

        if(count < target){
          counter.innerText = `${Math.ceil(count + inc)}`
          setTimeout(updateCounter, 4)
        } else {
          counter.innerText = target
        }
      }

      const genCounters = document.getElementById('gen-section-counters')
      const topGenCounters = genCounters.offsetTop
      window.addEventListener('scroll', function(){
        if(scrollY >= (topGenCounters - 100)){
          updateCounter()
        }
      })
    })    
  }, [])
  return (
    <Layout 
      title={"Geniorama - Agencia Digital"}
      idPage={"gen-home"}>
        
      <BannerHome />

      <section className="gen-info-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 px-4 mb-4 mb-lg-0" data-aos="fade-right" data-aos-duration="1000">
              <h2 className="gen-info-section__title text-center">¡NUESTRO GEN DIGITAL!</h2>
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

            <div className="col-12 text-center py-5">
              <ButtonGen text="VER MÁS" link="#" />
            </div>
          </div>
        </div>
      </section>

      <section className="gen-info-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6">
              <div data-aos="fade-right" data-aos-duration="1000">
                <div className={styles.genImgRounded}>
                  <Image 
                    src={ImagenComo}
                    layout={"fill"}
                    objectFit={"cover"}
                  />
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6 px-5">
              <div data-aos="fade-left" data-aos-duration="1000">
                <h2 className="gen-info-section__title">¿CÓMO LO HACEMOS?</h2>
                <h5>¡Tus clientes son nuestra prioridad!</h5>
                <p className="gen-info-section__desc">
                  Acompañamos los objetivos de tu marca brindando asesoría
                  estratégica y creativa. Trazamos un plan, un cronograma de
                  actividades y ejecutamos. Los resultados son la consecuencia de
                  tu visión y nuestra ejecución.
                </p>
                <ButtonGen text="VER SERVICIOS" link="#" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gen-section-counters" className="gen-info-section">
        <div className="container">
          <div className={styles.genWrapCounters}>
            <DataCounter
              image={IconoExperiencia}
              prefix="+"
              number="0"
              target="8"
              leyend="Años de experiencia"
            />
            <DataCounter
              image={IconoClientes}
              prefix="+"
              number={"0"}
              target="100"
              leyend="Clientes felices"
            />
            <DataCounter
              image={IconoTazas}
              prefix="+"
              number={"0"}
              target="45789"
              leyend="Tazas de café o un poco más..."
            />
            <DataCounter
              image={IconoIdea}
              prefix="+"
              number={"0"}
              target="367"
              leyend="Veces hemos ecuchado: ¡Me gusta esa idea!" 
            />
          </div>
        </div>
      </section>

      <section className="gen-info-section">
        <div className="container">
          <h2 className="gen-info-section__title">
            NUESTROS <br /> PROYECTOS WEB
          </h2>

          <PortfolioGallery
            info={data}
            favs
          />

          <div className="text-center mt-5">
            <ButtonGen
              link="/proyectos/web"
              text="Ver todo"
            />
          </div>
        </div>
      </section>

      <section className="gen-info-section" id="servicios">
        <div className="container">
          <h2 className="gen-info-section__title">
            NUESTROS <br /> SERVICIOS
          </h2>
          <div className={styles.genWrapServices}>
            <CardOurGen
              image={IconDisenoWeb}
              link="/"
              title="DISEÑO DE PÁGINAS WEB"
            />
            <CardOurGen
              image={IconSoporteWeb}
              link="/"
              title="MANTENIMIENTO Y SOPORTE WEB"
            />
            <CardOurGen
              image={IconHosting}
              link="/"
              title="HOSTING Y SERVIDORES"
            />

            <CardOurGen
              image={IconPosicionamientoSeo}
              link="/"
              title="POSICIONAMIENTO WEB (SEO)"
            />

            <CardOurGen
              image={IconPauta} 
              link="/" 
              title="PAUTA DIGITAL"
            />

            <CardOurGen 
              image={IconSocialMedia} 
              link="/" 
              title="SOCIAL MEDIA"
            />

            <CardOurGen
              image={IconDisenoGrafico}
              link="/"
              title="DISEÑO GRÁFICO"
            />

            <CardOurGen
              image={IconProdAudiovisual}
              link="/"
              title="PRODUCCIÓN AUDIOVISUAL"
            />

            <CardOurGen
              image={IconStream}
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
              <Testimonial
                image={ImgTeam}
                text={"“ ¡Somos constructores! Hacemos puentes que unen marcas y personas, hacemos caminos que facilitan viajes de ida y vuelta”"}
                name={"Oscar Pedraza"}
                position={"CEO / Marketing Manager"}
              />
            </div>
            <div className="col-12 col-lg-5">
              <h2 className="gen-info-section__title">
                MÁS DE <br /> NOSOTROS
              </h2>
              <p className="my-4 gen-info-section__desc">
                Somos una agencia de marketing y publicidad digital con más de 8
                años de experiencia, administrando, optimizando y generando
                resultados para diferentes marcas nacionales e internacionales.{" "}
              </p>
              <ButtonGen text="SOBRE NOSOTROS" link="/sobre-nosotros" />
            </div>
          </div>
        </div>
      </section>

      <section className="gen-info-section">
        <div className="container">
          <h2 className="gen-info-section__title">
            PUBLICACIONES <br /> RECIENTES
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
                  image={ImgTeam}
                  name="Oscar Pedraza"
                  position={"CEO / Marketing Manager"}
                  linkedin={"https://www.linkedin.com/in/oscar-pedraza/"}
                />

                <CardTeamGen
                  image={ImgAngelBurgos}
                  name="Angel Burgos"
                  position={"CTO / Web Manager"}
                  linkedin={"https://www.linkedin.com/in/angel-burgos-mesa-a5907a126/"}
                  github={"https://github.com/angelpublicista"}
                />
              </div>
            </div>
            <div className="col-12 col-lg-4 p-4">
              <h2 className="gen-info-section__title">
                NUESTROS
                <br />
                GENIOS
              </h2>
              <p className="gen-info-section__desc">
                En <strong>Geniorama</strong> creemos en el talento, es por eso que hemos consolidado un equipo de trabajo integral, lleno de profesionales listos para afrontar cualquier reto, llevando a nuestros clientes a alcanzar sus objetivos.
                <br /><br />
                <span>
                ¡Conoce a los miembros del <br /> <strong>Dream Team Geniorama</strong>!
                </span>
              </p>
              <ButtonGen text="VER MÁS" link="/sobre-nosotros" />
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

export async function getStaticProps(ctx){
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

