// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {project} = props
  const {title, projectTitle, description, imageUrl, duration, projectUrl} =
    project
  return (
    <div>
      <img src={imageUrl} alt="project" className="project-image" />
      <div>
        <div className="project-title-and-duration-container">
          <h1 className="project-title">{projectTitle}</h1>
          <div className="calender-icon-duration-container">
            <AiFillCalendar className="calender-icon" />
            <p className="project-duration">{duration}</p>
          </div>
        </div>
        <p className="project-description">{description}</p>
        <a href={projectUrl} className="visit-link">
          Visit
        </a>
      </div>
    </div>
  )
}

export default ProjectTimelineCard
