import React, { useState } from 'react'
import getPositionInGrid from '../utils/getPositionInGrid'

const Sprint = ({ sprint, color, type , clientOnly }) => {

    const start = new Date(sprint.start)
    const end = new Date(sprint.end)
    const diff = new Date(end - start).getDate()
    const dayWidth = 10000/366 //had to fix it.
    const [distanceMoved, setDistanceMoved] = useState(0)
    const [isDragging, setIsDragging] = useState(false)

    const startDragging = () => { setIsDragging(true) }
    const stopDragging = () => { setIsDragging(false) }
    const handleDragging = e => { isDragging && setDistanceMoved(distanceMoved => distanceMoved += e.movementX ) }
    const gridStart = getPositionInGrid(start.toISOString().split('T')[0]) + Math.floor(distanceMoved / dayWidth)
    const gridSpan = diff

    const [showMenu, setShowMenu] = useState(false)
    const handleSprintOptions = () => { setShowMenu(!showMenu) }

    const handleDelete = () => { window.confirm('Are you sure?') }
    return (
        <div className='project-sprint'
            onMouseDownCapture={startDragging}
            onMouseMove={handleDragging}
            onMouseUpCapture={stopDragging}
            onMouseLeave={stopDragging}
            style={{
                gridColumn: `${gridStart}  / span ${gridSpan}`,
                backgroundColor: `var(--color-${color})`,
                borderRadius: type === 'rc' ? '20px' : 'var(--border-radius)', 
                opacity: clientOnly ? '0.5' : 1
            }}>
            <div className='project-sprint-header'>
                <i>{sprint.type}</i>
                <strong>{sprint.title}</strong>
                <span onClick={handleSprintOptions}>···</span>
            </div>
            { showMenu && <div className='project-sprint-menu' onClick={handleDelete}> </div> }

            <progress max={100} value={50} ></progress>
        </div>
    )
}

export default React.memo(Sprint)