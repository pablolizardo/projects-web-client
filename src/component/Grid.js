import React from "react";
import styled from "styled-components";

export default function Grid() {
  const StyledGrid = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: var(--sidebar-width);
    display: grid;
    width: calc(100% - var(--sidebar-width));
    height: 100%;
    /* padding: var(--space); */
    user-select: none;
    grid-template-columns: repeat(31, 1fr);
    /* border:1px dotted cyan; */
    figure {
      &::before {
        content: attr(data-day);
        position: absolute;
        top: -10px;
        margin-left: -2px;
        font-size: 0.5rem;
      }
      width: 1px;
      background-color: rgba(0, 0, 0, 0.05);
      height: 100%;
    }
  `;
  return (
    <StyledGrid>
      {Array.from({ length: 31 }).map((l, i) => (
        <figure data-day={i + 1} key={i} />
      ))}
    </StyledGrid>
  );
}
