import React, { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../context/AppContext";

const Grid = () => {
  const context = useContext(AppContext);
  const months = [
    '',
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'Agost',
    'September',
    'October',
    'November',
    'December',
  ]


  return (
    <div id="project-grid-year" style={{ width: `${context.yearWidth}px`, gridTemplateColumns: `repeat(${context.daysInYear}, 1fr)`, }} >
      {context.dayNumbers.map((day, index) => {
          return <figure 
            key={`day-${index}`} 
            data-day={day} 
            data-month={day === 1 ? index : 'Enero'} 
            className={day === 1 ? "month-start" : undefined} 
          />
      }
      )}
    </div>
  );
};

export default React.memo(Grid);
