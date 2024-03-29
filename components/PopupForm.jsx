import styles from "../styles/PopupForm.module.css"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';

export default function PopupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [policy, setPolicy] = useState(1);
  const [message, setMessage] = useState({});
  const [token, setToken] = useState();

  const { executeRecaptcha } = useGoogleReCaptcha();

  async function handleReCaptchaVerify(){
    if (!executeRecaptcha) {
        console.log('Execute recaptcha not yet available');
        return;
      }
  
      const token = await executeRecaptcha('yourAction');
      console.log(token)
  }


  function handleChange(e){
      const {name, value} = e.target
      if(name == "name"){
        setName(value)
      } else if (name == "email") {
        setEmail(value)
      } else if(name == "company"){
        setCompany(value)
      } else if(name == "position"){
        setPosition(value)
    }
  }
    

  async function sendHook(object){
    const res = await fetch(`https://hook.us1.make.com/uk4g16rucoxomb8niqalk5qcyd5l1c7q?name=${object.name}&email=${object.email}&phone=${object.phone}&company=${object.company}&position=${object.position}&policy=${object.policy}`)
    if(res.ok && res.status == 200){
        return
    }
        return false
    }

  function sendData(e){
      e.preventDefault()

      //   Verify Recaptcha
      handleReCaptchaVerify()

      if(name.length > 1 && email.length > 1 && phone.length > 1 && company.length > 1 && position.length > 1 && position.length > 1){
        const data = {
            name,
            email,
            phone,
            position,
            company,
            policy
        }
        
        if(sendHook(data)){
            

            setName("")
            setEmail("")
            setCompany("")
            setPhone("")
            setPosition("")
            setMessage({
                success: true,
                message: "Tus datos han sido enviados."
            })

            if(typeof window !== 'undefined'){
                localStorage.setItem('isFormComplete', true)
            }

            return
        }

        setMessage({
            error: true,
            message: "Hubo algún error, por favor inténtalo de nuevo"
        })
        
      }

      setMessage({
        error: true,
        message: "Hubo algún error, por favor verifica los campos"
      })
      
  }

  function closePopup(e){
      e.preventDefault()
      const popup = document.getElementById('pop-up')
      popup.classList.remove('Home_activePopup__361KU')
  }

  return (
    <form action="" className={styles.popupForm} onSubmit={sendData}>
        <div>
            {message.success ?
                <div className="alert alert-success text-center" role="alert">
                    {message.message} <br />
                    <a href="#" onClick={closePopup} className="gen-text-link text-danger">Cerrar ventana</a>
                </div>
               : ""
            }

            {message.error ?
            <div className="alert alert-danger text-center" role="alert">
                {message.message}
            </div>
            : ""
            }
            
        </div>
        <div className="row mt-5">
            <div className="gen-input-group col-12 col-lg-6">
                <label htmlFor="" className="gen-input-label">Tu nombre*</label>
                <input type="text" className="gen-input-text input-small" name="name" required value={name} onChange={handleChange} placeholder="Tu nombre completo"/>
            </div>
            <div className="gen-input-group col-12 col-lg-6">
                <label htmlFor="" className="gen-input-label">Tu email*</label>
                <input type="email" className="gen-input-text input-small" name="email" required value={email} onChange={handleChange} placeholder="Ingresa tu email"/>
            </div>
            <div className="gen-input-group col-12">
                <label htmlFor="" className="gen-input-label">Celular*</label>
                <PhoneInput 
                    value={phone} defaultCountry="CO" onChange={setPhone} placeholder="Ingresa tu número"
                />
            </div>
            <div className="gen-input-group col-12 col-lg-6">
                <label htmlFor="" className="gen-input-label">Nombre empresa*</label>
                <input type="text" className="gen-input-text input-small" name="company" required value={company} onChange={handleChange} placeholder="Nombre de la empresa"/>
            </div>
            <div className="gen-input-group col-12 col-lg-6">
                <label htmlFor="" className="gen-input-label">Cargo*</label>
                <input type="text" className="gen-input-text input-small" name="position" required value={position} onChange={handleChange} placeholder="Ingresa tu cargo"/>
            </div>
            <div className="form-group">
                <p className={styles.genPrivacyPolicy}>Al dar click en <strong>&quot;QUIERO RECIBIR EL DESCUENTO&quot;</strong> aceptas nuestra <Link href="/politica-de-privacidad"><a rel="noreferrer" target={"_blank"}>Política de privacidad</a></Link></p>
            </div>
            <button type="submit" className={styles.submitButton}>
                <span>QUIERO RECIBIR EL DESCUENTO</span>
            </button>

            <a href="#" onClick={closePopup} className="gen-text-link text-center mt-4">
                No me interesa
            </a>
        </div>
    </form>
  )
}
