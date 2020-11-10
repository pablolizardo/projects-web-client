import React, { useContext } from "react"
import GridYear from "./GridYear"
import Project from "./Project"
import { AppContext } from "./../context/AppContext"
import GridToday from "./GridToday"
import ScrollContainer from 'react-indiana-drag-scroll'

const ProjectsView = () => {
    const context = useContext(AppContext)

    return (
        <div id='project-view' style={{ width: `${context.yearWidth}px` }}>
                <GridYear />
                <GridToday />
                {context.projects.map((project) => <Project key={project._id} project={project} /> )}
            </div>
    )
}

export default React.memo(ProjectsView)
