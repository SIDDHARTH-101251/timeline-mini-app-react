// Write your code here
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props
  const timeLine = timelineItemsList.map(eachItem => ({
    title: eachItem.title,
  }))
  return (
    <>
      <h1 className="heading-1">
        MY JOURNEY OF <br /> CCBP 4.0
      </h1>
      <div className="chrono-container">
        <Chrono
          mode="VERTICAL_ALTERNATING"
          items={timeLine}
          theme={{
            primary: '#0967d2',
            secondary: '#ffffff',
            titleColor: 'black',
            titleColorActive: '#0967d2',
          }}
        >
          {timelineItemsList.map(eachItem =>
            eachItem.categoryId === 'COURSE' ? (
              <CourseTimelineCard key={eachItem.id} course={eachItem} />
            ) : (
              <ProjectTimelineCard key={eachItem.id} project={eachItem} />
            ),
          )}
        </Chrono>
      </div>
    </>
  )
}

export default TimelineView
