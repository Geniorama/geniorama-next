import Layout from "../components/Layout/Layout";
import HeadingPage from "../components/HeadingPage";
import BannerHosting from "../components/BannerHosting";
import ImgBanner from "../public/banners/banner-hosting/bg-hosting.png"

export default function planesHosting(){
    return(
        <Layout
            title={"Planes de hosting - Geniorama"}
            idPage={"gen-home"}
            isLogoLight
         >
            <BannerHosting
            photo={ImgBanner}
            reverse
            textTop={"WEB HOSTING"}
            titleTop={"UN LUGAR, TODOS LOS BENEFICIOS"}
            titleBottom={"Experiencia y pasión"}
            desc={"Tener tu sitio web es importante, pero también lo es el lugar en donde estará alojado. Descubre los beneficios del servicio de hosting de Geniorama y disfruta del acompañamiento experto de nuestros profesionales en cada paso del camino."}
            textButton={"VER PLANES DE HOSTING"}
            linkButton={"#"}
            />
        </Layout>
    );
}