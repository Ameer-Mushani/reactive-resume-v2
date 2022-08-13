import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';

import './Timeline.css';
const Timeline = () => {
   return (
      <VerticalTimeline>
         <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2022 - August 2022"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<WorkIcon />}
         >
            <h3 className="vertical-timeline-element-title">Machine Vision and Robotics Research Assitant</h3>
            <h4 className="vertical-timeline-element-subtitle">University of Guelph, Robotics Institute</h4>
            <p>
               Developed a full stack project to display data collected by one of the lab's robots.
               <br />
               Vue.js, FastAPI, PostgreSQL, Docker, and AWS.
            </p>
         </VerticalTimelineElement>
         <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="June 2021 - December 2021"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<WorkIcon />}
         >
            <h3 className="vertical-timeline-element-title">Full Stack Dev. Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Competers Inc, Guelph</h4>
            <p>
               Worked on all aspects of our stacks to provide software with consitent uptime and imporvments to over 500+ daily users.
            </p>
         </VerticalTimelineElement>
         <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Setember 2018 - Present"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<SchoolIcon />}
         >
            <h3 className="vertical-timeline-element-title">Software Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">University of Guelph</h4>
            <p>
               Throughout my time at the University of Guelph, I have gained experience in a wide range of technologies. 
               I have also gained practical expereince by taking sveral courses involving software development in an agile environment.
            </p>
         </VerticalTimelineElement>
      </VerticalTimeline>
   );
}
export default Timeline;