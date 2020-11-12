import React, { useState } from 'react'

const SprintProgress = ({progress,color}) => {

    const [isDragging , setIsDragging] = useState(false)
    const [ movementX, setMovementX ] = useState(0)
    const [ newProgress , setNewProgress ] = useState(progress.progress)
    const startDragging = e => {
        setIsDragging(true)
    }
    const handleDragging = e => {
        if(isDragging) {
            if( movementX < 0 ) setMovementX(0)
            if( movementX > 100 ) setMovementX(100)
            if( movementX >=0 && movementX <= 100) {
                setMovementX( movementX => movementX += e.movementX)
                setNewProgress( Math.floor(movementX / 10) *10  )
            }
        }
    }
    const stopDragging = e => {
        setIsDragging(false)
    }
   


    return <progress className={`progress progress-color-${color}`}
    // style={{pointerEvents: 'none'}}
        max={100} 
        value={newProgress}
        onMouseDownCapture={startDragging}
        onMouseMove={handleDragging}
        onMouseUpCapture={stopDragging}
        onMouseLeave={stopDragging}
     ></progress>
}

export default SprintProgress