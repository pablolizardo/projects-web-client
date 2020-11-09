import React, { useContext } from "react"
import { AppContext } from "../context/AppContext"
import Sprint from "./Sprint"

const Project = ({ project }) => {
	const context = useContext(AppContext)

	return (
		<div id="project-wrap"
		style={{
			width: `${context.yearWidth}px`,
			color: `var(--color-${project.color})`
		}}>
			<figure style={{ backgroundColor: `var(--color-${project.color})` }} />
			<div className="project-sprints" style={{ gridTemplateColumns: `repeat(${context.daysInYear}, 1fr)` }} >
				{project.sprints
					.map((sprint) => (
						<Sprint
							key={sprint._id}
							sprint={sprint}
							color={project.color}
						/>
					))}
			</div>
		</div>
	)
}

export default React.memo(Project)