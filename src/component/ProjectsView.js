import React, { useContext, useEffect, useRef, useState } from "react"
import styled from "styled-components"
import GridYear from "./GridYear"
import Project from "./Project"
import { AppContext } from "./../context/AppContext"
import SelectMonth from './SelectMonth'
import getScrollPos from "../utils/getScrollPos"

const ProjectsView = () => {
    const context = useContext(AppContext)
    const StyledProjectsView = styled.div`
		position: relative;
		white-space: nowrap;
		width: ${context.yearWidth}px;
		padding-top: calc(var(--space) / 2 );
		padding-bottom: calc(var(--space) * 4 );
        border:1px solid red;

	`

    return (
        <StyledProjectsView >
            <GridYear />
            {context.projects.map((project) => (
                <Project key={project._id} project={project} />
            ))}
        </StyledProjectsView>
    )
}

export default React.memo(ProjectsView)
