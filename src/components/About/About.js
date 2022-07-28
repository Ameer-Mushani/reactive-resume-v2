import Image from "react-bootstrap/Image";
import Typewriter from "typewriter-effect";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './About.css'
const About = () => {
    return (
        <div className="about">
            <Image
                src="https://static-cdn.jtvnw.net/jtv_user_pictures/a982ad29-1b19-4d8d-8a40-7285b3ed4465-profile_image-300x300.png"
                fluid
                roundedCircle
                style={{ margInTop: "100px" }}
            />
            <h1 style={{ color: 'white' }}>Ameer Mushani</h1>
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
                <a href="https://github.com/Ameer-Mushani" className="link">
                    <GitHubIcon/>
                </a>
                <a href="https://www.linkedin.com/in/ameer-mushani/" className="link">
                    <LinkedInIcon/>
                </a>
            </div>
        </div>
    )
}
export default About;