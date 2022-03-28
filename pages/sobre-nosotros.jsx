import CardAboutUs from "../components/CardAboutUs";
import HeadingPage from "../components/HeadingPage";
import Layout from "../components/Layout/Layout";
import styles from "../styles/SobreNosotros.module.css";
import CardTeamGen from "../components/CardTeamGen";
import ImgAngelBurgos from "../public/angel-burgos.jpg";
import ImgOscarPedraza from "../public/team-member.png";
import ImgDuvanR from "../public/foto-duvan.jpg";
import ImgDiegoB from "../public/foto-diego.jpg";
import ImgCatalinaB from "../public/foto-catalina-barrera.jpg";
import ImgFelipeH from "../public/foto-felipe-h.jpg";
import ImgCristianM from "../public/foto-cristian-marin.png";
import CarouselGen from "../components/CarouselGen";
import Testimonial from "../components/Testimonial";
import AvatarExample from "../public/pexels-pixabay-415829.jpg";
import SvgIconOurVission from "../components/SvgImages/SvgIconOurVission";
import SvgIconOurMission from "../components/SvgImages/SvgIconOurMission";

export default function SobreNosotros() {
  return (
    <Layout title={"Servicios - Geniorama"} idPage={"gen-servicios"}>
      <div className="mt-5">
        <HeadingPage
          sTitle={"SOBRE NOSOTROS"}
          lTitle={"¡MARKETING DE RESULTADOS DIGITALES!"}
        />
      </div>

      <section className={"gen-info-section"}>
        <div className="container">
          <div className={styles.genWrapCardsAbout}>
            <CardAboutUs
              icon={<SvgIconOurVission/>}
              title={"NUESTRA VISIÓN"}
              description={"Nuestros objetivos están encaminados en ser la agencia de Marketing Digital y Desarrollo Web líder en el mercado colombiano y en un mediano plazo exportar servicios en mercados importantes como Estados Unidos y algunas regiones de Europa"}
            />
            <CardAboutUs
              icon={<SvgIconOurMission/>}
              title={"NUESTRA MISIÓN"}
              description={"Para llevar a cabo los proyectos contamos con personas apasionadas por su oficio y trabajamos bajo una metodología que permite a nuestros colaboradores tomar decisiones creativas sobre los procesos, garantizando así proyectos diferenciados y de calidad."}
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
              position={"CTO / Web Manager"}
              linkedin={"https://www.linkedin.com/in/oscar-pedraza/"}
            />

            <CardTeamGen
              image={ImgAngelBurgos}
              name="Angel Burgos"
              position={"CTO / Web Manager"}
              linkedin={"https://www.linkedin.com/in/angel-burgos-mesa-a5907a126/"}
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
            />

            <CardTeamGen
              image={ImgFelipeH}
              name="Felipe Hernández"
              position={"UX/UI & Digital Designer"}
              linkedin={"https://www.linkedin.com/in/fyliip96/"}
              behance={"https://www.behance.net/Fyliip96?tracking_source=search_users%7Cfelipe%20hernandez"}
            />

            <CardTeamGen
              image={ImgCristianM}
              name="Cristian Marín"
              position={"Content Manager & Creative"}
              linkedin={"https://www.linkedin.com/in/cristhian-camilo-mar%C3%ADn-linares-7b976754/"}
            />

            <CardTeamGen
              image={ImgDuvanR}
              name="Duvan Rodríguez"
              position={"CTO / Frontend Developer"}
              linkedin={"https://www.linkedin.com/in/giovanni-rodr%C3%ADguez-25b9b621a/"}
              github={"https://github.com/DuvanProgrammer"}
              website={"#"}
            />
            
          </div>
        </div>
      </section>

      <section className="gen-info-section">
        <div className="container">
          <h2 className="gen-info-section__title">
            ALIADOS
          </h2>
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
              image={AvatarExample}
              name={"Jane Doe"}
              position={"Founder Company"}
              text={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              }
            />

            <Testimonial
              image={AvatarExample}
              name={"Jane Doe"}
              position={"Founder Company"}
              text={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              }
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
