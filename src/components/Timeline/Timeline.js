import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import { resume } from '../../portfolio';
import './Timeline.css';
import uniqid from 'uniqid';
import Image from 'react-bootstrap/Image';
const Timeline = () => {
   return (
      <VerticalTimeline>
         {resume.map((resumeItem) => (
            <VerticalTimelineElement
               className={resumeItem.type === 'work' ? 'vertical-timeline-element--work' : 'vertical-timeline-element--education'}
               date={resumeItem.date}
               iconStyle={{ background: resumeItem.type === 'work' ? 'rgb(33, 150, 243)' : 'rgb(233, 30, 99)', color: '#fff' }}
               icon={resumeItem.type === 'work' ? <WorkIcon /> : <SchoolIcon />}
               key={uniqid()}

            >
               <h3 className='vertical-timeline-element-title'>{resumeItem.title}</h3>
               <h4 className='vertical-timeline-element-subtitle'>{resumeItem.subtitle}</h4>
               <p className='resume-desc'>{resumeItem.description}</p>
               <p>{resumeItem.stack.join(', ')}</p>
               { resumeItem.image !== 'null' ? <Image className="logo-image" src={window.location.origin + '/' + resumeItem.image} fluid /> : null}
            </VerticalTimelineElement>
         ))}
      </VerticalTimeline>
   );
}
export default Timeline;