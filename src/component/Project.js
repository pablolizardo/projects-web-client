import React, { useContext } from "react"
import styled from "styled-components"
import { AppContext } from "../context/AppContext"
import Sprint from "./Sprint"

const Project = ({ project }) => {
	const context = useContext(AppContext)
	const StyledProject = styled.div`
		padding-top: calc(var(--space) * 1.5 );
		color: var(--color-${project.color});
		display: flex;
		align-items: center;
		position: relative;
		width: ${context.yearWidth}px;
		min-height: var(--sprint-height);

		figure {
			background-color: var(--color-${project.color});
			width: 100%;
			height: var(--sprint-height);
			position: absolute;
			bottom: 0;
			left: calc(var(--space) * -1);
			opacity: 0.1;
		}
		.project-sprints {
			display: grid;
			width: 100%;
			grid-template-columns: repeat(${context.daysInYear}, 1fr);
			align-items: center;
			grid-auto-flow: column;
			user-select: none;
		}
	`
	return (
		<StyledProject className="project-wrap">
			<figure />
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