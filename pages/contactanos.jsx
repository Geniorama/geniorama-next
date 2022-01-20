import CardInfoContact from "../components/CardInfoContact";
import HeadingPage from "../components/HeadingPage";
import Layout from "../components/Layout/Layout";
import styles from "../styles/Contactanos.module.css";
import IconPhone from "../public/icon-phone.svg";
import IconClock from "../public/clock-2.svg";
import ContactForm from "../components/ContactForm";
import SocialShapes from "../utils/socialShapes.json"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Contactanos() {
  return (
    <Layout
      title={"Contáctanos - Geniorama Agencia Digital"}
      idPage={"gen-contactanos"}
    >
      <HeadingPage
        sTitle={"CONTÁCTANOS"}
        lTitle={"¡HABLEMOS DE TUS PROYECTOS!"}
      />

      <section className="gen-info-section">
        <div className="container">
          <div className={styles.genWrapInfoContact}>
            <CardInfoContact
              link={"#"}
              icon={IconPhone}
              title={"TELÉFONO"}
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
            <div className="col-12 col-lg-6 px-5">
              <h3 className="gen-info-section__title">
                BUT I MUST EXPLAIN TO YOU HOW ALL THIS MISTAKEN IDEA OF
                DENOUNCING ?
              </h3>
              <div className="gen-info-section__desc">
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system, and expound the actual
                teachings of the great explorer of the truth, the master-builder
                of human happiness. No one rejects, dislikes, or avoids pleasure
                itself, because it is pleasure, but because those who do not
                know how to pursue pleasure rationally encounter consequences
                that are extremely painful. Nor again is there anyone who loves
                .
              </div>

              <ul className={`${styles.genNavSocialContact} nav`}>
                {SocialShapes.map(item => (
                  <li key={item.id} className="nav-item">
                    <a href={item.link} className="nav-link" target="_blank">
                      <FontAwesomeIcon icon={['fab', item.fa]}/>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-12 col-lg-6 px-5">
                <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
