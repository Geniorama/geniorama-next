import Link from 'next/link'
import styles from '../styles/ContactForm.module.css'
import swal from 'sweetalert'
import ReCAPTCHA from 'react-google-recaptcha'
import { useRouter } from 'next/router'

export default function ContactForm(){
    const router = useRouter()
    const forceReload = () => {
        router.reload()
    }

    const getValueText = (id) =>{
        const input = document.getElementById(id)
        const valInput = input.value
        if(valInput){
            return valInput
        }

        return false
    }


    const ValidateEmail = (inputId) => {
        const input = document.getElementById(inputId)

        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      
        if (input.value.match(validRegex)) {
      
          input.focus();
      
          return true;
      
        } else {
      
            input.focus();
      
          return false;
      
        }
      
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

        if(!ValidateEmail('email')){
            swal({
                title: "¡Upss!",
                icon: "error",
                text: "Por favor ingresa un email válido",
                button: {
                    text: "Vale"
                }
            });
           return false
        }

        if (grecaptcha.getResponse() === '') {
            swal({
                title: "¡Upss!",
                icon: "error",
                text: "Debes verificar que no eres un robot",
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

                setTimeout(forceReload, 3000)
           } else {
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
       })
    }

    return(
        <div className={styles.genContactForm}>
            <form action="" id="gen-contact-form">
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
                    <input className='gen-input-text' type="email" name='email' id='email' required placeholder='Ingresa tu nombre correo electrónico' />
                </div>

                <div className="form-group gen-input-group">
                    <label className='gen-input-label' htmlFor="">Mensaje</label>
                    <textarea name="message" id="message" className='gen-input-text gen-textarea' placeholder='¿En qué podemos ayudarte?'></textarea>
                </div>

                <div className="form-group">
                    <p className={styles.genPrivacyPolicy}>Al dar click en <strong>&quotENVIAR&quot</strong> aceptas nuestra <Link href='/politica-de-privacidad'><a>Política de privacidad</a></Link></p>
                </div>

                <div className="form-group mb-3">
                    <ReCAPTCHA size='normal' sitekey={"6LcFpi4fAAAAAJl5-nQwrpA_skN6CGh3EGZyf_N1"} />
                </div>
                <button type="submit" onClick={(e) => handleClick(e)} className={styles.submitButton}>
                    <span>ENVIAR</span>
                </button>
            </form>
        </div>
    )
}