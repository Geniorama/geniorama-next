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
                    <label className='gen-input-label' htmlFor="">Nombre completo</label>
                    <input className='gen-input-text' type="text" placeholder='Ingresa tu nombre completo' />
                </div>

                <ButtonGen link={"#"} text={"ENVIAR"} />
            </form>
        </div>
    )
}