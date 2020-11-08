import React from 'react'
import styled from 'styled-components'

const Sprint = ({ sprint, color }) => {

    let start = new Date(sprint.start)
    let end = new Date(sprint.end)
    let diff = new Date(end - start).getDate()

    const StyledSprint = styled.div`
        grid-column : ${start.getDate() + 1}  / span ${diff};
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
            i {
                margin-right: 5px;
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
            <span>
                <i>{sprint.type}</i>
                <strong>{sprint.title}</strong>
            </span>
            <progress max={100} value={50}></progress>
        </StyledSprint>
    )
}

export default React.memo(Sprint)