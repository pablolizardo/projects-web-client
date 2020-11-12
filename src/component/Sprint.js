import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import getDaysInYear from '../utils/getDaysInYear'
import getPositionInGrid from '../utils/getPositionInGrid'
import Project from './Project'
import SprintHeader from './SprintHeader'
import SprintProgress from './SprintProgress'

const Sprint = ({ sprint, color, type , clientOnly }) => {
    const { yearWidth } = useContext(AppContext)
    const start = new Date(sprint.start)
    const end = new Date(sprint.end)
    const diff = new Date(end - start).getDate()
    const dayWidth = yearWidth / getDaysInYear()
    const [distanceMoved, setDistanceMoved] = useState(0)
    const [isDragging, setIsDragging] = useState(false)

    const startDragging = e => { e.target.nodeName === 'DIV' && setIsDragging(true) }
    const handleDragging = e => { isDragging && setDistanceMoved(distanceMoved => distanceMoved += e.movementX ) }
    const stopDragging = () => { setIsDragging(false) }

    const gridStart = getPositionInGrid(start.toISOString().split('T')[0]) + Math.floor(distanceMoved / dayWidth)
    const gridSpan = diff

    return (
        <div className={`project-sprint project-type-${ type }` }
            onMouseDownCapture={startDragging}
            onMouseMove={handleDragging}
            onMouseUpCapture={stopDragging}
            onMouseLeave={stopDragging}
            
            style={{
                gridColumn: `${gridStart}  / span ${gridSpan}`,
                backgroundColor: `var(--color-${color})`,
                borderRadius: type === 'rc' ? '20px' : 'var(--border-radius)', 
                opacity: clientOnly ? '0.5' : 1,
                // border: '1px solid red'
            }}>
            { type !== 'rc' && <SprintHeader sprint={sprint}/>}
            { type === 'rc' && <strong>{sprint.title}</strong>}
            { type !== 'rc' && <SprintProgress progress={sprint.progress} color={color}/>}
            <span className='sprint-tail'></span>
        </div>
    )
}


export default Sprint

