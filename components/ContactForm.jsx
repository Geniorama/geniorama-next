import Link from 'next/link'
import styles from '../styles/ContactForm.module.css'
import ButtonGen from './ButtonGen'

export default function ContactForm(){
    return(
        <div className={styles.genContactForm}>
            <form action="">
                <div className="form-group gen-input-group">
                    <label className='gen-input-label' htmlFor="">Nombre completo</label>
                    <input className='gen-input-text' type="text" placeholder='Ingresa tu nombre completo' />
                </div>

                <div className="form-group gen-input-group">
                    <label className='gen-input-label' htmlFor="">Asunto</label>
                    <input className='gen-input-text' type="text" placeholder='¿De qué se trata tu mensaje?' />
                </div>

                <div className="form-group gen-input-group">
                    <label className='gen-input-label' htmlFor="">Correo</label>
                    <input className='gen-input-text' type="text" placeholder='Ingresa tu nombre correo electrónico' />
                </div>

                <div className="form-group gen-input-group">
                    <label className='gen-input-label' htmlFor="">Mensaje</label>
                    <textarea name="" id="" className='gen-input-text gen-textarea' placeholder='¿En qué podemos ayudarte?'></textarea>
                </div>

                <div className="form-check mb-4">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                         He leído y acepto las <Link href={"#"}><a>Políticas de privacidad</a></Link>
                    </label>
                </div>

                <ButtonGen link={"#"} text={"ENVIAR"} />
            </form>
        </div>
    )
}