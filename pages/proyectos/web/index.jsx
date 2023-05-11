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
  try{
    const res = await fetch(process.env.API_URL + '/portfolio/?per_page=99&_embed=true')
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