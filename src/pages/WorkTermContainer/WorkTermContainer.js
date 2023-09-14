import './WorkTermContainer.css'
import Image from 'react-bootstrap/Image';

const WorkTermContainer = ({ workterm }) => (
  <div className='workterm'>
    <h3>{workterm.company}</h3>

    <p className='workterm__description'>{workterm.description}</p>
    { workterm.image !== 'null' ? <Image className="logo-image" src={window.location.origin + '/' + workterm.image} fluid /> : null}
    {/* {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {project.sourceCode && (
      <a
        href={project.sourceCode}
        aria-label='source code'
        className='link link--icon'
      >
        <GitHubIcon />
      </a>
    )}

    {project.livePreview && (
      <a
        href={project.livePreview}
        aria-label='live preview'
        className='link link--icon'
      >
        <LaunchIcon />
      </a>
    )} */}
  </div>
)

export default WorkTermContainer
