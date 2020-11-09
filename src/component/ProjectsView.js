import React, { useContext } from "react"
import GridYear from "./GridYear"
import Project from "./Project"
import { AppContext } from "./../context/AppContext"

const ProjectsView = () => {
    const context = useContext(AppContext)

    return (
        <div id='project-view' style={{
            width: `${context.yearWidth}px`
        }}>
            <GridYear />
            {context.projects.map((project) => (
                <Project key={project._id} project={project} />
            ))}
        </div>
    )
}

export default React.memo(ProjectsView)
