import React, { useContext } from "react";
import { timelineZooms } from "../consts";
import { AppContext } from "../context/AppContext";
import SelectMonth from "./SelectMonth";

const Header = () => {
  const context = useContext(AppContext)

  const handleShowForms = () => { context.setShowForms(!context.showForms) }
  const handleChangeYearWidth = e => { context.setYearWidth(e.target.value)}
  return (
    <header>
      <h1>Projects</h1>
      <div>
        <SelectMonth />
        <select defaultValue={context.yearWidth} onChange={handleChangeYearWidth}>
          { timelineZooms.map( zoom => <option key={zoom.value} value={zoom.value}>{zoom.label}</option>)}
        </select>
        <button className='primary' onClick={handleShowForms}>+</button>
      </div>
    </header>
  );
}

export default React.memo(Header)