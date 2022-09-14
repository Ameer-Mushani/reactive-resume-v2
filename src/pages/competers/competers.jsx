import ParticlesContainer from "../../components/ParticlesContainer"
import { competers } from "../../portfolio"
import WorkTermContainer from "../WorkTermContainer/WorkTermContainer"
import "./competers.css"
const Competers = () => {
   return (
      <div>
         <ParticlesContainer className="particles" />
         <section className="section workterms">
            <div className="workterm_box">
               <WorkTermContainer workterm={competers} />
            </div>
            {/* <h1 style={{color: "white"}}>{competers.company}</h1>
         <p style={{color: "white"}}>{competers.description}</p> */}
         </section>
      </div>
   )
}
export default Competers;