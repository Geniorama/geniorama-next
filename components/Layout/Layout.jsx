import Head from "next/head";
import Footer from "../Footer";
import Header from "../Header";

export default function Layout({children, title, description, idPage, isLogoLight}){
    return(
        <div className="gen-layout">
            <div id="gen-ancle-top"></div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta charSet="utf-8" />
            </Head>

            <Header
                isLogoLight={isLogoLight ? isLogoLight : false}
            />
            
            <main className="gen-main" id={idPage}>
                {children}
            </main>

            <Footer />
        </div>
    )
}