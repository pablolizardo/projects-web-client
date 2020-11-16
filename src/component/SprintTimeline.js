import React, { useContext } from 'react'

export default function SprintTimeline({sprint}) {

    return (
        <div className='sprint-timeline'>
            {sprint.tasks.map( task => {
                let dateParsed = new Date(task.date )
                let startParsed = new Date(sprint.start )
               console.log( startParsed.toISOString().split('T')[0],  dateParsed.toISOString().split('T')[0])
                let diff = parseInt((dateParsed - startParsed) / (1000 * 60 * 60 * 24), 10);
                console.log(diff)
                return <span style={{
                            left:  28* diff + 'px'
                        }}>
                        {/* {new Date(task.date).toISOString().split('T')[0]} */}
                    </span>
            })}
            
        </div>
    )
}
