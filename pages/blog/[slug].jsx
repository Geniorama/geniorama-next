import HeadingBlog from "../../components/HeadingBlog";
import Layout from "../../components/Layout/Layout";
import Breadcrumbs from 'nextjs-breadcrumbs';
import styles from '../../styles/SingleBlog.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from "@fortawesome/free-solid-svg-icons";

export default function Single({data}) {
  const dataPost = data[0]
  return (
    <Layout
      title={"lorem"}
      idPage={"gen-single-blog"}
      isLogoLight
    >
      <HeadingBlog 
            title={dataPost.title.rendered}
            bgImage={dataPost.acf.portada_blog ? dataPost.acf.portada_blog.url : "https://www.geniorama.site/demo/geniorama/wp-content/uploads/2022/03/andrew-neel-cckf4TsHAuw-unsplash.jpg"}
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
              <span>
                <FontAwesomeIcon icon={faClock} /> {new Date(dataPost.date).toLocaleString()}
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
    const res = await fetch('https://www.geniorama.site/demo/geniorama/wp-json/wp/v2/posts')
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
    const res = await fetch('https://www.geniorama.site/demo/geniorama/wp-json/wp/v2/posts/?slug=' + params.slug)
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