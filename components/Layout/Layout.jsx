import Head from "next/head";
import Footer from "../Footer";
import Header from "../Header";

export default function Layout({children, title, description, idPage}){
    return(
        <div className="gen-layout">
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Head>

            <Header />
            
            <main className="gen-main" id={idPage}>
                {children}
            </main>

            <Footer />
        </div>
    )
}