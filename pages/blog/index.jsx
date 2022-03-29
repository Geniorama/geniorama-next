import Layout from "../../components/Layout/Layout"
import HeadingPage from "../../components/HeadingPage"
import styles from "../../styles/Blog.module.css"
import CardPost from "../../components/CardPost"
import limitChar from "../../utils/limitChar"

export default function Index({data}) {
  return (
    <Layout
        title={"Blog - Geniorama"}
        idPage={"gen-main-blog"}
    >
        <div className="pt-5 mb-5" style={{background: "#f8f8f8"}}>
            <HeadingPage
            sTitle={"Blog"}
            lTitle={"EL CONOCIMIENTO ES PARA TOD@S"}
            />
        </div>

        <section className="py-5" id="gen-content-blog">
            <div className="container">
                <div className={styles.genGridBlog}>
                    {data.map((item)=>(
                        <div key={item.id}>
                            <CardPost
                                link={`/blog/${item.slug}`}
                                image={item.acf.portada_blog ? item.acf.portada_blog.sizes.large : "https://www.geniorama.site/demo/geniorama/wp-content/uploads/2019/11/nikita-katsevich-QXDJGPZTwxs-unsplash-e1584533063531-1600x900.jpg"}
                                title={item.title.rendered}
                                desc={limitChar(item.excerpt.rendered, 90)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>

    </Layout>
  )
}


export async function getStaticProps(ctx){
    const url_api_blog ="https://www.geniorama.site/demo/geniorama/wp-json/wp/v2/posts"
    try{
        const res = await fetch(url_api_blog)
        const data = await res.json()

        return{
            props: {
                data
            }
        }
    } catch(error){
        console.log(error)
    }
}