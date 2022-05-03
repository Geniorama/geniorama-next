import styles from "../styles/SectionDataCounters.module.css";
import DataCounter from "./DataCounter";
import IconoExperiencia from "../public/iconos-web_6-anos-experiencia.svg"
import IconoClientes from "../public/iconos-web_clientes-felices.svg"
import IconoTazas from '../public/iconos-web_tazas-de-cafe.svg'
import IconoIdea from '../public/iconos-web_me-gusta-la-idea.svg'
import { useEffect } from "react";

export default function SectionDataCounters() {
    useEffect(() =>{
        const counters = document.querySelectorAll('.gen-item-counter__number')
        const speed = 2000

        counters.forEach(counter => {
        counter.innerText = "0"

        const updateCounter = () =>{
            const target = parseInt(counter.dataset.target)
            const count = parseInt(counter.innerText)

            const inc = target / speed

            if(count < target){
            counter.innerText = `${Math.ceil(count + inc)}`
            setTimeout(updateCounter, 4)
            } else {
            counter.innerText = target
            }
        }

        const genCounters = document.getElementById('gen-section-counters')
        const topGenCounters = genCounters.offsetTop
        window.addEventListener('scroll', function(){
            if(scrollY >= (topGenCounters - 100)){
            updateCounter()
            }
        })
        }) 
    })
  return (
    <div className={styles.sectionDataCounters}>
      <div className="container">
        <div className={styles.grid}>
          <DataCounter
            image={IconoExperiencia}
            prefix="+"
            number="0"
            target="8"
            leyend="Años de experiencia"
          />
          <DataCounter
            image={IconoClientes}
            prefix="+"
            number={"0"}
            target="100"
            leyend="Clientes felices"
          />
          <DataCounter
            image={IconoTazas}
            prefix="+"
            number={"0"}
            target="45789"
            leyend="Tazas de café o un poco más..."
          />
          <DataCounter
            image={IconoIdea}
            prefix="+"
            number={"0"}
            target="367"
            leyend="Veces hemos ecuchado: ¡Me gusta esa idea!"
          />
        </div>
      </div>
    </div>
  );
}
