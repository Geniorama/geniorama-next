import styles from '../styles/HeadingPage.module.css'

export default function HeadingPage({sTitle, lTitle}){
    return(
        <section className={`${styles.genHeadingPage} py-5`}>
            <div className="container text-center">
                <h1 className={styles.genHeadingPage__smallTitle}>{sTitle}</h1>
                <h2 className={styles.genHeadingPage__largeTitle}>{lTitle}</h2>
            </div>
        </section>
    )
}