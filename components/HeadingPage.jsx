import styles from '../styles/HeadingPage.module.css'

export default function HeadingPage(){
    return(
        <section className={`${styles.genHeadingPage} py-5`}>
            <div className="container text-center">
                <h1 className={styles.genHeadingPage__smallTitle}>SOBRE NOSOTROS</h1>
                <h2 className={styles.genHeadingPage__smallSubTitle}>¡MARKETING DE RESULTADOS DIGITALES!</h2>
            </div>
        </section>
    )
}