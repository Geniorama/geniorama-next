import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css'
import iconShapes from '../utils/IconShapes';
iconShapes()

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
