import React from 'react'
import styled from 'styled-components'

export default function Sprint({ sprint, color }) {
    let start = new Date(sprint.start)
    let end = new Date(sprint.end)
    let diff = new Date(end - start).getDate()

    const StyledSprint = styled.div`
        grid-column : ${start.getDate()}  / span ${diff};
        background-color : ${color};
    `

    return (
        <StyledSprint className={`project-sprint `}>
            <span>{sprint.title}</span>
        </StyledSprint>
    )
}
