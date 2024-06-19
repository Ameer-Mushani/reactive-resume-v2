import Image from "react-bootstrap/Image";
import Typewriter from "typewriter-effect";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import './About.css'
const About = () => {
   return (
      <div className="about">
         <Image
            src={window.location.origin + '/profilepic.jpg'}
            fluid
            roundedCircle
            style={{ margInTop: "100px", width: "50vmin" }}
         />
         <h1 style={{ color: 'white', userSelect: 'none', marginTop: "1em" }}>Ameer Mushani</h1>
         <h2 style={{ color: 'white' }}>
            <Typewriter
               options={{
                  autoStart: true,
                  loop: true,
               }}
               onInit={(typewriter) => {
                  typewriter.typeString('I am a Software Engineer')
                     .pauseFor(300)
                     .deleteChars(17)
                     .typeString('Student')
                     .pauseFor(300)
                     .deleteChars(7)
                     .typeString('Full Stack Developer')
                     .pauseFor(300)
                     .deleteChars(20)
                     .typeString('Creator')
                     .pauseFor(300)
                     .deleteChars(7)
                     .start();
               }}
            />
         </h2>
         <div className="links">
            <a href={window.location.origin  + "/Ameer_Mushani_Resume.pdf"} >
               <span type='button' className='btn btn--outline'>
                  Resume
               </span>
            </a>
            <a href="https://github.com/Ameer-Mushani" className="link">
               <GitHubIcon fontSize="large" />
            </a>
            <a href="https://www.linkedin.com/in/ameer-mushani/" className="link">
               <LinkedInIcon fontSize="large" />
            </a>
            <a href="https://medium.com/@ameermushani" className="link">
                <CollectionsBookmarkIcon fontSize="large" />
            </a>
            <a href="mailto:ameermushani@gmail.com" className="link">
               <EmailIcon fontSize="large" />
            </a>
         </div>
      </div>
   )
}
export default About;