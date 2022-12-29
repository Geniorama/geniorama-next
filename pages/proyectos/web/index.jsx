import Layout from '../../../components/Layout/Layout'
import PortfolioGallery from '../../../components/PortfolioGallery'
import HeadingPage from '../../../components/HeadingPage'
import { useEffect } from 'react'
import AOS from "aos";

export default function Index({data}) {
  useEffect(()=>{
    AOS.init()
  },[])

  return (
    <Layout
    title={"Proyectos web - Geniorama"}
    idPage={"gen-proyectos-web"}
    >
    <div className="pt-5 mb-5" style={{background: "#f8f8f8"}}>
        <HeadingPage
          sTitle={"Proyectos Web"}
          lTitle={"¡NOS APASIONA LO QUE HACEMOS!"}
        />
      </div>
    
    <section className='container'>
      <div className='mb-5'>
        <PortfolioGallery
          info={data}
        />
      </div>
    </section>
    
    </Layout>
  )
}


export async function getServerSideProps({res}){
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

  const url_api = "https://www.geniorama.site/cms/wp-json/wp/v2/portfolio/?per_page=24&_embed=true"
  try{
    const res = await fetch(url_api)
    const data = await res.json()
    return {
      props: {
        data
      }
    }
  } catch (error){
    console.log(error)
  }
}