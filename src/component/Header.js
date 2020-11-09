import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import SelectMonth from "./SelectMonth";

const Header = () => {
  const context = useContext(AppContext)

  const handleShowForms = () => { context.setShowForms(!context.showForms) }

  return (
    <header>
      <h1>Projects</h1>
      <input placeholder="Search..."></input>
      <div>
        <SelectMonth />
        <button>Idea</button>
        <button>View</button>
        <button className='primary' onClick={handleShowForms}>+</button>
      </div>
    </header>
  );
}

export default React.memo(Header)