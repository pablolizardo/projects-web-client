import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Grid = () => {
  const context = useContext(AppContext)

  const months = ['month-00','month-01','month-02','month-03','month-04','month-05','month-06','month-07','month-08','month-09','month-10','month-11','month-12']
  let j = 0
  return (
    <div id='project-grid-year'
      style={{
        width: `${context.yearWidth}px`,
        gridTemplateColumns: `repeat(${context.daysInYear}, 1fr)`
      }}
    >
      {context.dayNumbers.map((day, index) => {
        if( day === 1) { j ++ }
       return <figure data-day={day} data-month={day === 1 ? months[j] : null} key={index} id={day === 1 ? months[j] : null} className={ day === 1  ? 'month-start' : undefined}/>
      })}
     
    </div>
  );
}

export default React.memo(Grid)