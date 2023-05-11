import HeadingBlog from "../../components/HeadingBlog";
import Layout from "../../components/Layout/Layout";
import Breadcrumbs from 'nextjs-breadcrumbs';
import styles from '../../styles/SingleBlog.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Single({data}) {
  const router = useRouter()
  const dataPost = data[0]

  if(router.isFallback){
    return <h1>Cargando...</h1>
  }

  return (
    <Layout
      title={dataPost.title.rendered}
      idPage={`post-${dataPost.slug}`}
      isLogoLight
    >
      <HeadingBlog 
            title={dataPost.title.rendered}
            bgImage={dataPost.acf.portada_blog ? dataPost.acf.portada_blog.url : "https://www.geniorama.site/cms/wp-content/uploads/2022/03/andrew-neel-cckf4TsHAuw-unsplash.jpg"}
        />
        <div className="container my-5">
          <Breadcrumbs 
                listStyle={{'listStyle':"none"}} 
                listClassName={styles.genBreadcrumbs} 
                rootLabel="Home"
                activeItemStyle={{'color':'#ccc'}}
            />
        </div>
        <article className={`my-5 ${styles.genArticle}`}>
          <div className="container">
            <div className={styles.genBlogDate}>
              <span className={styles.iconDate}>
                <FontAwesomeIcon icon={faClock} size={"xs"} /> {new Date(dataPost.date).toLocaleString()}
              </span>
            </div>

            <div className={`${styles.genArticleBody} mt-4`} dangerouslySetInnerHTML={{__html: dataPost.content.rendered}}></div>
          </div>
        </article>
    </Layout>
  )
}

export async function getStaticPaths(){
  try {
    const res = await fetch('https://www.geniorama.site/cms/wp-json/wp/v2/posts')
    const data = await res.json()
    const paths = data.map(({slug}) => ({params: {slug: `${slug}`}}))
    return {
      paths,
      fallback: false
    }
  } catch (error) {
    console.log(error)
  }
}

export async function getStaticProps({params}){
  try {
    const res = await fetch(process.env.API_URL + '/posts/?slug=' + params.slug)
    const data = await res.json()

    return{
      props: {
        data
      }
    }
  } catch (error) {
    console.log(error)
  }
}