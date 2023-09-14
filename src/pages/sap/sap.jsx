import ParticlesContainer from "../../components/ParticlesContainer"
import { SAP } from "../../portfolio"
import WorkTermContainer from "../WorkTermContainer/WorkTermContainer"
import "./sap.css"
const Sap= () => {
   return (
      <div>
         <ParticlesContainer className="particles" />
         <section className="section workterms">
            <div className="workterm_box">
               <WorkTermContainer workterm={SAP} />
            </div>
            {/* <h1 style={{color: "white"}}>{competers.company}</h1>
         <p style={{color: "white"}}>{competers.description}</p> */}
         </section>
      </div>
   )
}
export default Sap;