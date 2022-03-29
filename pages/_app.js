import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css'
import { library } from "@fortawesome/fontawesome-svg-core";
import {fab, faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons";

library.add(fab, faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube)

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
