import React from 'react'
import getPositionInGrid from '../utils/getPositionInGrid'

const Sprint = ({ sprint, color }) => {

    let start = new Date(sprint.start)
    let end = new Date(sprint.end)
    let diff = new Date(end - start).getDate()

    return (
        <div className='project-sprint'
        style={{
            gridColumn : `${getPositionInGrid(start.toISOString().split('T')[0])}  / span ${diff}`,
            backgroundColor : `var(--color-${color})`,
        }}>
            <span>
                <i>{sprint.type}</i>
                <strong>{sprint.title}</strong>
            </span>
            <progress max={100} value={50}></progress>
        </div>
    )
}

export default React.memo(Sprint)