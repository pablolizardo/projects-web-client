import React from 'react'
import styled from 'styled-components'

export default function Sprint({ sprint, color }) {
    let start = new Date(sprint.start)
    let end = new Date(sprint.end)
    let diff = new Date(end - start).getDate()

    const StyledSprint = styled.div`
        grid-column : ${start.getDate()}  / span ${diff};
        background-color : var(--color-${color});
        mix-blend-mode:multiply;
        height: var(--sprint-height);
        border-radius: var(--border-radius);
        text-overflow: ellipsis;
        white-space: nowrap;
        position: relative;
	/* border:1px solid red; */
        &:hover{
            opacity: .8;
            cursor: grab;
        }
        &:active{
            opacity: .7;
            cursor: grabbing;
        }
        span {
            font-weight: 700;
            font-size: .7rem;
            align-items: center;
            position: absolute;
            top: -15px;
            color: var(--text-color);
            width: 100%;
            line-height:1;
            text-overflow: ellipsis;
            overflow:hidden;      
            letter-spacing: var(--letter-spacing);
            &::first-letter{
                margin-right: 3px;
            }

        }
        progress {
            -webkit-appearance: none;
            appearance: none;
            position:absolute;
            bottom:0;
            width: 100%;
            left:0; right:0;
            margin:0;padding:0;
            height: 5px;
        }
        progress::-webkit-progress-bar {
            background-color: transparent;
        }
        progress::-webkit-progress-value {
            background-color: var(--color-${color});
            border-bottom-left-radius:  var(--border-radius);
            mix-blend-mode:multiply;
        }
    `

    return (
        <StyledSprint>
            <span>{sprint.title}</span>
            <progress max={100} value={Math.floor(Math.random()*100)}></progress>
        </StyledSprint>
    )
}
