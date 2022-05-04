import CardInfoContact from "../components/CardInfoContact";
import HeadingPage from "../components/HeadingPage";
import Layout from "../components/Layout/Layout";
import styles from "../styles/Contactanos.module.css";
import IconPhone from "../public/icon-phone.svg";
import IconClock from "../public/clock-2.svg";
import ContactForm from "../components/ContactForm";
import SocialShapes from "../utils/socialShapes.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Script from "next/script";

export default function Contactanos() {
  return (
    <Layout
      title={"Contáctanos - Geniorama Agencia Digital"}
      idPage={"gen-contactanos"}
    >
      <Script src="https://www.google.com/recaptcha/api.js" async defer />
      <div className="mt-5">
        <HeadingPage
          sTitle={"CONTÁCTANOS"}
          lTitle={"¡HABLEMOS DE TUS PROYECTOS!"}
        />
      </div>

      <section className="gen-info-section">
        <div className="container">
          <div className={styles.genWrapInfoContact}>
            <CardInfoContact
              link={"https://wa.link/ayn4i0"}
              icon={IconPhone}
              title={"WHATSAPP"}
              info={"(+57) 312 534 6167"}
            />

            <CardInfoContact
              link={"#"}
              icon={IconClock}
              title={"HORARIO DE ATENCIÓN"}
              info={"Lunes A Viernes: 8:00 AM A 5:00 PM "}
            />
          </div>
        </div>
      </section>

      <section className="gen-info-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 px-lg-5">
              <h3 className="gen-info-section__title">
                Queremos ser el aliado más valioso de tu compañía
              </h3>
              <h5 className="gen-info-section__subtitle">¡Hagamos una cita!</h5>
              <div className="gen-info-section__desc">
                Antes de cualquier cosa, queremos que sepas que nuestros
                clientes terminan convirtiéndose en grandes amigos y es por eso
                que tenemos tan buenos resultados. Queremos conocerte a ti y a
                tu compañía, en <strong>Geniorama</strong> creemos que no hay mejor forma de
                hacerlo que mediante una conversación sin tensiones. Cuéntanos
                qué haces, qué te impulsa a continuar trabajando y sobre todo a
                dónde quieres llegar; al final del día tendremos el panorama más
                claro y sabremos qué podemos hacer por ti.
              </div>

              <ul className={`${styles.genNavSocialContact} nav`}>
                {SocialShapes.map((item) => (
                  <li key={item.id} className="nav-item">
                    <a
                      href={item.link}
                      className="nav-link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon icon={["fab", item.fa]} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-12 col-lg-6 px-lg-5">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
