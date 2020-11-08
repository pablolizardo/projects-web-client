import React, { useContext } from "react"
import styled from "styled-components"
import AppContext from "../context/AppContext"
import Sprint from "./Sprint"

const Project = ({ project }) => {
	const context = useContext(AppContext)
	const StyledProject = styled.div`
		color: var(--color-${project.color});
		display: flex;
		align-items: center;
		position: relative;
		min-height: var(--sprint-height);
		/* border:1px solid red; */
		div {
			flex: 1;
			/* border:1px solid red;  */
		}
		h4 {
			display: block;
			font-size: 1rem;
			font-weight: 700;
			letter-spacing: var(--letter-spacing);
			width: var(--sidebar-width);
			/* border:1px solid green; */
		}
		figure {
			background-color: var(--color-${project.color});
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
			left: calc(var(--space) * -1);
			opacity: 0.1;
		}
		.project-sprints {
			display: grid;
			width: 100%;
			grid-template-columns: repeat(${context.daysInMonth}, 1fr);
			align-items: center;
			grid-auto-flow: column;
			user-select: none;
		}
	`
	return (
		<StyledProject className="project-wrap">
			<figure />
			<h4>{project.title}</h4>
			<div className="project-sprints">
				{project.sprints
					.map((sprint) => (
						<Sprint
							key={sprint._id}
							sprint={sprint}
							color={project.color}
						/>
					))}
			</div>
		</StyledProject>
	)
}

export default React.memo(Project)