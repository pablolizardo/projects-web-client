import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import getDaysInYear from '../utils/getDaysInYear'
import getPositionInGrid from '../utils/getPositionInGrid'

const Sprint = ({ sprint, color, type , clientOnly }) => {
    const { yearWidth } = useContext(AppContext)
    const start = new Date(sprint.start)
    const end = new Date(sprint.end)
    const diff = new Date(end - start).getDate()
    const dayWidth = yearWidth / getDaysInYear()
    const [distanceMoved, setDistanceMoved] = useState(0)
    const [isDragging, setIsDragging] = useState(false)

    const startDragging = (e) => { 
        // console.log('click parent' ,e)
        if(e.target.nodeName === 'DIV'){
            setIsDragging(true) 
        }

    }
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
            <SprintProgress progress={sprint.progress}/>
        </div>
    )
}


const SprintProgress = (progress) => {

    const [isDragging , setIsDragging] = useState(false)
    const [ newProgress , setNewProgress ] = useState(progress)
    const [ movementX, setMovementX ] = useState(0)
    const startDragging = e => {
        setIsDragging(true)
    }
    const handleDragging = e => {
        if( isDragging ) {
            setMovementX( movementX => movementX += e.movementX)
            console.log('dragging x => ' , Math.floor(movementX / 10) *10)
            setNewProgress(Math.floor(movementX / 10) *10)
        }
    }
    const stopDragging = e => {
        setIsDragging(false)
    }

    return <progress 
    // style={{pointerEvents: 'none'}}
        max={100} 
        value={newProgress}
        onMouseDownCapture={startDragging}
        onMouseMove={handleDragging}
        onMouseUpCapture={stopDragging}
        onMouseLeave={stopDragging}
     ></progress>
}
export default Sprint