import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import getDaysInYear from '../utils/getDaysInYear'
import getPositionInGrid from '../utils/getPositionInGrid'
import SprintHeader from './SprintHeader'
import SprintProgress from './SprintProgress'
import SprintTimeline from './SprintTimeline'

const Sprint = ({ sprint, color, type, clientOnly }) => {
    const { yearWidth } = useContext(AppContext)
    const start = new Date(sprint.start)
    const end = new Date(sprint.end)
    const diff = new Date(end - start).getDate()
    const dayWidth = yearWidth / getDaysInYear()
    const [distanceMoved, setDistanceMoved] = useState(0)
    const [isDragging, setIsDragging] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    const handleOnWheel = e => {
        if (e.type === 'wheel') {
            setIsOpen(e.deltaY > 0)
        }
    }
    const handleOnDoubleClick = e => {
        if (!isDragging) {
            setIsOpen(!isOpen)
        }
    }
    const startDragging = e => { e.target.nodeName === 'DIV' && setIsDragging(true) }
    const handleDragging = e => { isDragging && setDistanceMoved(distanceMoved => distanceMoved += e.movementX) }
    const stopDragging = () => { setIsDragging(false) }

    const gridStart = getPositionInGrid(start.toISOString().split('T')[0]) + Math.floor(distanceMoved / dayWidth)
    const gridSpan = diff

    return (
        <div className={`project-sprint project-type-${type}`}
            onMouseDownCapture={startDragging}
            onMouseMove={handleDragging}
            onMouseUpCapture={stopDragging}
            onMouseLeave={stopDragging}
            onDoubleClick={handleOnDoubleClick}
            onWheel={handleOnWheel}
            style={{
                gridColumn: `${gridStart}  / span ${gridSpan}`,
                backgroundColor: `var(--color-${color})`,
                borderRadius: (type === 'rc' && !isOpen )? '20px' : 'var(--border-radius) ',
                height: isOpen ? 'fit-content' : 'min-content'
            }}>
            <SprintHeader sprint={sprint} />
            <SprintTimeline sprint={sprint} />
            { isOpen && <div className='project-sprint-details'>
                        <ul>
                            {sprint.tasks.map(task =>
                                <li>{task.type}  {task.title} </li>
                            )}
                            {sprint.tasks.length === 0 && <li>No tasks assigned to sprint</li>}
                        </ul>
                    </div>}
            <SprintProgress progress={sprint.progress} color={color} />
            {/* <span className='sprint-tail'></span> */}
        </div>
    )
}


export default Sprint

