import ParticlesContainer from "../../components/ParticlesContainer"
import { robotics } from "../../portfolio"
import WorkTermContainer from "../WorkTermContainer/WorkTermContainer"
import "./robotics.css"
const Competers = () => {
   return (
      <div>
         <ParticlesContainer className="particles" />
         <section className="section workterms">
            <div className="workterm_box">
               <WorkTermContainer workterm={robotics} />
            </div>
            {/* <h1 style={{color: "white"}}>{competers.company}</h1>
         <p style={{color: "white"}}>{competers.description}</p> */}
         </section>
      </div>
   )
}
export default Competers;