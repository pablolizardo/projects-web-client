import React, { useContext } from "react"
import styled from "styled-components"
import { AppContext } from "../context/AppContext"
import getPositionInGrid from "../utils/getPositionInGrid"

const ProjectsList = () => {
    const context = useContext(AppContext)
    const StyledProjectsList = styled.div`
		display: flex; 
		flex-direction: column; 
        padding-top: calc(var(--space) / 2 );
		h4 {
			display: flex;
            align-items:center;
			font-size: 1rem;
			font-weight: 700;

			letter-spacing: var(--letter-spacing);
			min-height: calc(var(--sprint-height) * 1.87);
		}
	`
    return (
        <StyledProjectsList>
            {context.projects.map((project) => {
                return <h4 key={project.title}>{project.title}</h4>
            })}
        </StyledProjectsList>
    )
}

export default React.memo(ProjectsList)
