import styles from '../styles/ContactForm.module.css';
import Link from 'next/link';

export default function FormHosting() {
  return (
    <div className={styles.genContactForm}>
            <form action="" id="gen-contact-hosting">
                <div className='row'>
                  <div className="form-group gen-input-group col-12 col-lg-6">
                      <label className='gen-input-label' htmlFor="">Tu nombre</label>
                      <input className='gen-input-text' type="text" id='full-name' name='full-name' />
                  </div>

                  <div className="form-group gen-input-group col-12 col-lg-6">
                      <label className='gen-input-label' htmlFor=""> Tu email</label>
                      <input className='gen-input-text' name='email' id='email' type="email" />
                  </div>
                </div>

                <div className={styles.genInputGroup1}>
                    <label className='gen-input-label' htmlFor="">Celular</label>
                    <input className='gen-input-text2' type="number" name='number' id='number' />
                </div>

                <div className='row'>
                  <div className="form-group gen-input-group col-12 col-lg-6">
                      <label className='gen-input-label' htmlFor="">Nombre empresa</label>
                      <input className='gen-input-text' type="text" id='company' name='com' />
                  </div>

                  <div className="form-group gen-input-group col-12 col-lg-6">
                      <label className='gen-input-label' htmlFor=""> Cargo</label>
                      <input className='gen-input-text' name='range' id='range' type="text" />
                  </div>
                </div>

                <div className="form-group acceptance">
                    <input type='checkbox' id='carrots' name='carrots' value='carrots' />
                    <p className={styles.genPrivacyPolicy}>Acepto las <Link href='/politica-de-privacidad'><a>Políticas de privacidad</a></Link></p>
                </div>
                <button type="submit" onClick={(e) => handleClick(e)} className={styles.submitButton2}>
                    <span>SOLICITAR ASESORÍA GRATUITA</span>
                </button>
            </form>
        </div>
  )
}
