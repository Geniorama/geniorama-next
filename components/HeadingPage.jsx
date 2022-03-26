import styles from '../styles/HeadingPage.module.css'
import Breadcrumbs from 'nextjs-breadcrumbs';

export default function HeadingPage({sTitle, lTitle}){
    return(
        <section className={`${styles.genHeadingPage} py-5`}>
            <div className="container text-center">
                <h1 className={styles.genHeadingPage__smallTitle}>{sTitle}</h1>
                <h2 className={styles.genHeadingPage__largeTitle}>{lTitle}</h2>
                <Breadcrumbs 
                    listStyle={{'listStyle':"none"}} 
                    listClassName={styles.genBreadcrumbs} 
                    rootLabel="Home"
                    activeItemStyle={{'color':'#ccc'}}
                />
            </div>
        </section>
    )
}