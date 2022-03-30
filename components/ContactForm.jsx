import Link from 'next/link'
import styles from '../styles/ContactForm.module.css'
import ButtonGen from './ButtonGen'
import swal from 'sweetalert'

export default function ContactForm(){
    const getValueText = (id) =>{
        const input = document.getElementById(id)
        const valInput = input.value
        if(valInput){
            return valInput
        }

        return false
    }

    const handleClick = (e) => {
        e.preventDefault()
       const fullName = getValueText('full-name')
       const reason = getValueText('reason')
       const email = getValueText('email')
       const msg = getValueText('message')
       
       if(!fullName || !reason || !email) {
            swal({
                title: "¡Upss!",
                icon: "error",
                text: "No se ha podido enviar tu mensaje. Revisa los campos e inténtalo de nuevo",
                button: {
                    text: "Vale"
                }
            });
           return false
        }

       fetch(`https://hook.us1.make.com/wq5iw0hx4ptk9i9cuf1o0fif8z38fqyy?name=${fullName}&reason=${reason}&email=${email}&message=${msg}`)
       .then(function(res){
           if(res.ok){
                swal({
                    title: "¡Gracias!",
                    icon: "success",
                    text: "Hemos recibido tu mensaje"
                });
           }
       })
    }

    return(
        <div className={styles.genContactForm}>
            <form action="">
                <div className="form-group gen-input-group">
                    <label className='gen-input-label' htmlFor="">Nombre completo*</label>
                    <input className='gen-input-text' type="text" id='full-name' name='full-name' required placeholder='Ingresa tu nombre completo' />
                </div>

                <div className="form-group gen-input-group">
                    <label className='gen-input-label' htmlFor="">Asunto*</label>
                    <input className='gen-input-text' name='reason' id='reason' type="text" required placeholder='¿De qué se trata tu mensaje?' />
                </div>

                <div className="form-group gen-input-group">
                    <label className='gen-input-label' htmlFor="">Correo*</label>
                    <input className='gen-input-text' type="text" name='email' id='email' required placeholder='Ingresa tu nombre correo electrónico' />
                </div>

                <div className="form-group gen-input-group">
                    <label className='gen-input-label' htmlFor="">Mensaje</label>
                    <textarea name="message" id="message" className='gen-input-text gen-textarea' placeholder='¿En qué podemos ayudarte?'></textarea>
                </div>

                <div className="form-check mb-4">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                         He leído y acepto las <Link href={"/politica-de-privacidad"}><a>Políticas de privacidad</a></Link>
                    </label>
                </div>

                {/* <ButtonGen link={"#"}  text={"ENVIAR"} /> */}
                <button type="submit" onClick={(e) => handleClick(e)} className={styles.submitButton}>
                    <span>ENVIAR</span>
                </button>
            </form>
        </div>
    )
}