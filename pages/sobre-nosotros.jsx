import CardAboutUs from "../components/CardAboutUs";
import HeadingPage from "../components/HeadingPage";
import Layout from "../components/Layout/Layout";
import styles from "../styles/SobreNosotros.module.css";
import CardTeamGen from "../components/CardTeamGen";
import ImgAngelBurgos from "../public/angel-burgos.jpg"
import ImgOscarPedraza from "../public/team-member.png";
import ImgDuvanR from '../public/foto-duvan.jpg'
import ImgDiegoB from '../public/foto-diego.jpg'
import ImgCatalinaB from '../public/foto-catalina-barrera.jpg'
import ImgFelipeH from '../public/foto-felipe-h.jpg'
import ImgCristianM from '../public/foto-cristian-marin.png'
import CarouselGen from "../components/CarouselGen";

export default function SobreNosotros() {
  return (
    <Layout title={"Servicios - Geniorama"} idPage={"gen-servicios"}>
      <HeadingPage />

      <section className={"gen-info-section"}>
        <div className="container">
          <div className={styles.genWrapCardsAbout}>
            <CardAboutUs />
            <CardAboutUs />
            <CardAboutUs />
          </div>
        </div>
      </section>

      <section className={"gen-info-section"}>
        <div className="container">
            <h2 className="gen-info-section__title mb-4">NUESTROS <br /> GENIOS</h2>
            <div className={styles.genWrapOurGenius}>
                <CardTeamGen 
                    image={ImgOscarPedraza}
                    name="Oscar Pedraza"
                    position={"CTO / Web Manager"}
                    linkedin={"#"}
                    github={"#"}
                    instagram={"#"}
                />

                <CardTeamGen 
                    image={ImgAngelBurgos}
                    name="Angel Burgos"
                    position={"CTO / Web Manager"}
                    linkedin={"#"}
                    github={"#"}
                    instagram={"#"}
                />

                <CardTeamGen 
                    image={ImgDuvanR}
                    name="Duvan Rodríguez"
                    position={"CTO / Frontend Developer"}
                    linkedin={"#"}
                    github={"#"}
                    instagram={"#"}
                />

                <CardTeamGen 
                    image={ImgDiegoB}
                    name="Diego Burgos"
                    position={"WordPress Developer"}
                    linkedin={"#"}
                    github={"#"}
                    instagram={"#"}
                />

                <CardTeamGen 
                    image={ImgFelipeH}
                    name="Felipe Hernández"
                    position={"UX/UI & Digital Designer"}
                    linkedin={"#"}
                    github={"#"}
                    instagram={"#"}
                />

                <CardTeamGen 
                    image={ImgCristianM}
                    name="Cristian Marín"
                    position={"Content Manager & Creative"}
                    linkedin={"#"}
                    github={"#"}
                    instagram={"#"}
                />

                <CardTeamGen 
                    image={ImgCatalinaB}
                    name="Catalina Barrera"
                    position={"Digital Ads Manager"}
                    linkedin={"#"}
                    github={"#"}
                    instagram={"#"}
                />
            </div>
        </div>
      </section>

      <section className="gen-info-section">
          <div className="container">
            <div className={styles.genCarouselBrands}>
                <CarouselGen
                />
            </div>
          </div>
      </section>
    </Layout>
  );
}
