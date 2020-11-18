import React from 'react'
import getDiffBetweenDates from '../utils/getDiffBetweenDates'

export default function SprintTimeline({ sprint }) {
  const sprintDuration = getDiffBetweenDates(sprint.start, sprint.end)
  return (
    <div className='sprint-timeline' style={{ gridTemplateColumns: `repeat(${sprintDuration} , 1fr)` }} >
      {sprint.tasks.map(task => {
        const taskStart = getDiffBetweenDates(sprint.start, task.date)
        return <span key={task._id} style={{ gridColumn: taskStart + 1 }} />
      })}
    </div>
  )
}
