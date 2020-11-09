import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../context/AppContext";
// import { AppContext } from "../context/AppContext";

const Header = () => {
  const context = useContext(AppContext)
  const StyledHeader = styled.header`
    display: flex;
    align-items:center;
    justify-content:space-between;
    padding-bottom: calc( var(--space) * 2 );
    h1 {
      font-size: calc( 2rem + 5vw);
      font-weight: 800;
      letter-spacing: var(--letter-spacing);
    }
    
    @media only screen and (max-width: 800px) {
        flex-direction: column;
    }
  `;
  return (
    <StyledHeader>
      <h1>Projects</h1>
      {context.daysInYear}
      <input placeholder="Search..."></input>
      <div>
        <button>Idea</button>
        <button>View</button>
        <button className='primary'>+</button>
      </div>
    </StyledHeader>
  );
}

export default React.memo(Header)