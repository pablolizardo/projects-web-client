import React from 'react'
import Sprint from './Sprint'

export default function Project({ project }) {
    return (
        <div className='project-wrap' >
            <h4>{project.title}</h4>
            <div className='project-sprints'>
                {project.sprints.map(sprint =>
                    <Sprint
                        sprint={sprint}
                        color={project.color} />
                )}
            </div>

        </div>
    )
}
