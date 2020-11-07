import React from "react";
import styled from "styled-components";
import Sprint from "./Sprint";

export default function Project({ project }) {
  const StyledProject = styled.div`
    color: var(--color-${project.color});
    display: flex;
	align-items: center;
	position: relative;
	min-height : var(--sprint-height);
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
		width:100%;
		height:100%;
		position:absolute;
		top:0;
		left : calc( var(--space) * -1);
		opacity:.1;
	}
  `;
  return (
    <StyledProject className="project-wrap">
		<figure/>
      <h4>{project.title}</h4>
      <div className="project-sprints">
        {project.sprints.map((sprint) => (
          <Sprint sprint={sprint} color={project.color} />
        ))}
      </div>
    </StyledProject>
  );
}
