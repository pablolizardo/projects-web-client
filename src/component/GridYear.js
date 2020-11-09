import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../context/AppContext";

const Grid = () => {
  const context = useContext(AppContext)
  const StyledGrid = styled.div`
    position: absolute;
    top: var(--space); left: 0; bottom: 0; right: 0;
    width: ${context.yearWidth}px;
    display: grid;
    user-select: none;
    ${'' /* border: 3px solid palegreen; */}
    
        scroll-snap-align: start;

    grid-template-columns: repeat(${context.daysInYear}, 1fr);
    figure {
      &::before {
        content: attr(data-day);
        position: absolute;
        top: calc(var(--space) * -1 );
        margin-left: -2px;
        font-size: 0.5rem;
      }
      width: 1px;
      background-color: rgba(0, 0, 0, 0.2);
    }
  `;

  return (
    <StyledGrid>
      {context.dayNumbers.map((day, index) => (
        <figure data-day={day} key={index} />
      ))}
    </StyledGrid>
  );
}

export default React.memo(Grid)