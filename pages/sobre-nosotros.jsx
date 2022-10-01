import CardAboutUs from "../components/CardAboutUs";
import HeadingPage from "../components/HeadingPage";
import Layout from "../components/Layout/Layout";
import styles from "../styles/SobreNosotros.module.css";
import CardTeamGen from "../components/CardTeamGen";
import ImgAngelBurgos from "../public/equipo/team-angel.png";
import ImgOscarPedraza from "../public/equipo/team-oscar.png";
import ImgDuvanR from "../public/equipo/team-duvan.png";
import ImgDiegoB from "../public/equipo/team-diego.png";
import ImgCatalinaB from "../public/equipo/team-cata.png";
import ImgFelipeH from "../public/foto-felipe-h.jpg";
import DanielaB from "../public/img/daniela-barreto-geniorama.png";
import ImgCristianM from "../public/equipo/team-cristian.png";
import CarouselGen from "../components/CarouselGen";
import Testimonial from "../components/Testimonial";
import AvatarExample from "../public/pexels-pixabay-415829.jpg";
import SvgIconOurVission from "../components/SvgImages/SvgIconOurVission";
import SvgIconOurMission from "../components/SvgImages/SvgIconOurMission";
import DiegoRodriguez from "../public/testimonios/diego-rodriguez.jpg";
import TaxoLogoAvatar from "../public/testimonios/taxo-logo-avatar.jpg";
import CristianAaron from "../public/testimonios/cristian-aaron.jpg";
import JuanArango from "../public/testimonios/juan-f-arango.jpg";
import SylviaRugeles from "../public/testimonios/sylvia-rugeles.jpg";
import SorangieLopez from "../public/testimonios/sorangie-lopez.jpg";
import RodolfoVelasquez from "../public/testimonios/rodolfo-velasquez.jpg"

export default function SobreNosotros() {
  return (
    <Layout title={"Nosotros - Geniorama"} idPage={"gen-nosotros"}>
      <div className="mt-5">
        <HeadingPage
          sTitle={"SOBRE NOSOTROS"}
          lTitle={"¡MARKETING DE RESULTADOS REALES!"}
        />
      </div>

      <section className={"gen-info-section"}>
        <div className="container">
          <div className={styles.genWrapCardsAbout}>
            <CardAboutUs
              icon={<SvgIconOurVission />}
              title={"NUESTRO MAYOR DESEO"}
              description={
                "Nuestros objetivos están encaminados en ser la agencia de Marketing Digital y Desarrollo Web líder en el mercado colombiano y en un mediano plazo exportar servicios en mercados importantes como Estados Unidos y algunas regiones de Europa"
              }
            />
            <CardAboutUs
              icon={<SvgIconOurMission />}
              title={"ASÍ DEJAMOS HUELLA"}
              description={
                "Para llevar a cabo los proyectos contamos con personas apasionadas por su oficio y trabajamos bajo una metodología que permite a nuestros colaboradores tomar decisiones creativas sobre los procesos, garantizando así proyectos diferenciados y de calidad."
              }
            />
          </div>
        </div>
      </section>

      <section className={"gen-info-section"}>
        <div className="container">
          <h2 className="gen-info-section__title mb-4">
            NUESTROS <br /> GENIOS
          </h2>
          <div className={styles.genWrapOurGenius}>
            <CardTeamGen
              image={ImgOscarPedraza}
              name="Oscar Pedraza"
              position={"CEO / Marketing Manager"}
              linkedin={"https://www.linkedin.com/in/oscar-pedraza/"}
            />

            <CardTeamGen
              image={ImgAngelBurgos}
              name="Angel Burgos"
              position={"CTO / Web Manager"}
              linkedin={
                "https://www.linkedin.com/in/angel-burgos-mesa-a5907a126/"
              }
              github={"https://github.com/angelpublicista"}
            />

            <CardTeamGen
              image={ImgCatalinaB}
              name="Catalina Barrera"
              position={"Digital Ads Manager"}
            />

            <CardTeamGen
              image={ImgDiegoB}
              name="Diego Burgos"
              position={"WordPress Developer"}
              github={"https://github.com/DiegoFreelance2020"}
              linkedin={"https://www.linkedin.com/in/diego-burgos-85a940211/"}
            />

            <CardTeamGen
              image={DanielaB}
              name="Daniela Barreto"
              position={"Community Manager"}
            />

            <CardTeamGen
              image={ImgCristianM}
              name="Cristian Marín"
              position={"Content Manager & Creative"}
              linkedin={
                "https://www.linkedin.com/in/cristhian-camilo-mar%C3%ADn-linares-7b976754/"
              }
            />

            <CardTeamGen
              image={ImgDuvanR}
              name="Duvan Rodríguez"
              position={"Frontend Developer"}
              linkedin={
                "https://www.linkedin.com/in/giovanni-rodr%C3%ADguez-25b9b621a/"
              }
              github={"https://github.com/DuvanProgrammer"}
            />
          </div>
        </div>
      </section>

      <section className="gen-info-section">
        <div className="container">
          <h2 className="gen-info-section__title">PARTNERS</h2>
          <div className={styles.genCarouselBrands}>
            <CarouselGen />
          </div>
        </div>
      </section>

      <section className="gen-info-section">
        <div className="container">
          <h2 className="gen-info-section__title mb-4">
            LO QUE OPINAN <br /> NUESTROS CLIENTES
          </h2>
          <div className={styles.genWrapTestimonials}>
            <Testimonial
              image={TaxoLogoAvatar}
              name={"Lina Duque"}
              position={
                "CEO <a href='http://tax-o.com.co/' target='_blank' rel='noreferrer'>Taxo</a>"
              }
              text={
                "<p>Con sus ideas logramos una mayor cantidad de interacciones en redes sociales y vamos por buen camino en el posicionamiento de marca con nuestros Blogs y Posts. Muchas Gracias!</p>"
              }
            />

            <Testimonial
              image={DiegoRodriguez}
              name={"Diego Rodríguez"}
              position={
                "Founder & Director <a href='https://ultravioleta.co/' target='_blank' rel='noreferrer'>Ultravioleta.co</a>"
              }
              text={
                '<iframe src="https://widget.spreaker.com/player?episode_id=49245846&theme=light&playlist=false&playlist-continuous=false&chapters-image=true&episode_image_position=right&hide-logo=false&hide-likes=false&hide-comments=false&hide-sharing=false&hide-download=true" width="100%" height="150px" frameBorder="0"></iframe>'
              }
            />

            <Testimonial
              image={CristianAaron}
              name={"Cristian Aaron"}
              position={
                "Founder <a href='http://naranjaexport.com/' target='_blank' rel='noreferrer'>Naranja Export</a>"
              }
              text={
                "<p>Cambiamos nuestra imagen y nuestra página web para hacerla más atractiva y sólida para nuestros clientes. También empezamos a generar contenido para potenciar nuestras ventas. Excelente gestión</p>"
              }
            />

            <Testimonial
              image={JuanArango}
              name={"Juan Felipe Arango"}
              position={"Director Creativo Ejecutivo Independiente"}
              text={
                "<p>El equipo Geniorama se ha convertido en mi aliado estratégico. Desde nuestro primer proyecto me dieron la confianza y calidad para escogerlos con sus soluciones de desarrollo web y administración de campañas de pauta en redes sociales. Hoy ya tenemos una relación de negocio consolidada. ¡Un gran equipo!</p>"
              }
            />

            <Testimonial
              image={SylviaRugeles}
              name={"Sylvia Rugeles"}
              position={
                "Fundadora y Directora Ejecutiva <a href='https://www.socialthink.co/' target='_blank' rel='noreferrer'>Social Think</a>"
              }
              text={
                "<p>Genios para hacer webs y genios para tratar con los clientes. Genios por su profesionalismo y su capacidad de solucionar en cualquier momento. Genios por su calidez humana y su transparencia. En Geniorama hay genios integrales, profesionales y empáticos. Gracias!</p>"
              }
            />

            <Testimonial
              image={SorangieLopez}
              name={"Sorangie López"}
              position={
                "Socio Gerente en <a href='http://univercity.com.co/' target='_blank' rel='noreferrer'>UniverCity</a>"
              }
              text={
                "<p>Geniorama Agencia, es el mejor Partner en asuntos creativos,  diseño de estrategias digitales y programación web con la mejor experiencia e interfaz de usuario.  Su versatilidad 360, que incluye producción audiovisual de calidad y acciones enfocadas BTL, hace realidad el cumplimiento de ambiciosos objetivos de comunicación para nuestras marcas</p>"
              }
            />

            <Testimonial
              image={RodolfoVelasquez}
              name={"Rodolfo Velásquez"}
              position={
                "Cofounder <a href='https://copublicitarias.com/' target='_blank' rel='noreferrer'>Copublicitarias</a>"
              }
              text={
                `<div class="${styles.vimeoResponsive}"><iframe title="vimeo-player" src="https://player.vimeo.com/video/697180580?h=64e22c1c94&title=0&byline=0" frameBorder="0" allowFullScreen></iframe></div>`
              }
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
