import React from 'react'
import { IconCode, IconExclamation, IconRefresh, IconShield } from '../icons'

export default function SprintTimeline({sprint}) {
    return (
        <div className='sprint-timeline'>
            {sprint.tasks.map( task => {
                return <span>
                        
                        <IconCode />
                        
                    </span>
            })}
            
        </div>
    )
}
