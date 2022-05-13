import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css'
import { library } from "@fortawesome/fontawesome-svg-core";
import {fab, faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons";
import Script from 'next/script'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';


library.add(fab, faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube)

function MyApp({ Component, pageProps }) {
  return(
    <>
    <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}>
      <Script id='google-tag-manager' strategy='afterInteractive' >
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-NV5Q8CW');`}
        </Script>
      <Component {...pageProps} />
    </GoogleReCaptchaProvider>
      
    </>
  ) 
  

  
  
}

export default MyApp
