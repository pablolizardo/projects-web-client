import React, { useContext } from "react"
import { AppContext } from "../context/AppContext"

const ProjectsList = () => {
    const context = useContext(AppContext)
    
    return (
        <div id='project-list'>
            {context.projects.map((project) => {
                return <h4 key={project.title}>{project.title}</h4>
            })}
        </div>
    )
}

export default React.memo(ProjectsList)
