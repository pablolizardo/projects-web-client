import React, { useContext } from 'react'
import IconCode from '../consts/icons'
import { AppContext } from '../context/AppContext'

export default function ProjectsList() {
  const context = useContext(AppContext)
  return (
    <aside id="project-list">

      {context.projects.map((project) =>
        <article key={project.title} >
          <IconCode />
          <div>
            <p>{project.type}</p>
              <h4 style={{
              color: project.clientOnly ? 'var(--color-gray)' : `var(--color-${project.color})`,
              opacity: project.clientOnly ? '.5' : 1
            }} > {project.title} </h4>
          </div>
        </article>
      )}
    </aside>
  )
}
