// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {course} = props
  const {courseTitle, description, duration, tagsList} = course
  return (
    <div>
      <div className="course-title-and-duration-container">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="duraton-text-icon-container">
          <AiFillClockCircle className="clock-icon" />
          <p className="course-duration">{duration}</p>
        </div>
      </div>
      <p className="course-description">{description}</p>
      <ul className="unordered-list">
        {tagsList.map(eachItem => (
          <p className="list-style">{eachItem.name}</p>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
