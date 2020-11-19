import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { IconFolder } from '../icons'

export default function ProjectsList() {
  const context = useContext(AppContext)
  return (
    <aside id="project-list">

      {context.projects.map((project) =>
        <article key={project.title} >
          <p>{project.type}</p>
          <h4 style={{ opacity: project.clientOnly ? '.5' : 1 }} > {project.title} </h4>
        </article>
      )}
    </aside>
  )
}
