import React, { useContext, useEffect, useRef, useState } from "react";
import { monthsNames } from "../consts";
import { AppContext } from "../context/AppContext";

const Grid = () => {
  const context = useContext(AppContext);
  const [months , setMonths ] = useState([])
  useEffect(() => {
    if(context.dayNumbers) {
      let j = 0
      let names = []
      context.dayNumbers.forEach((day,index) => {
        if ( day === 1) {
          names.push({ day: index, name: monthsNames[j]})
          // console.log({ [index]: monthsNames[j]})
          console.log({day, index, j, month : monthsNames[j]})
          j++;
        }
      })
      setMonths(names)

    }
  }, [context.dayNumbers])
 
  return (
    <div id="project-grid-year" style={{ width: `${context.yearWidth}px`, gridTemplateColumns: `repeat(${context.daysInYear}, 1fr)`, }} >
      {context.dayNumbers.map((day, index) => {
          return <figure 
            key={`day-${index}`} 
            data-day={day !== 1 ? day : ''} 
            data-month={day === 1 ? months.find( month=> month.day === index)?.name: ''} 
            className={day === 1 ? "month-start" : ''} 
          />
      }
      )}
    </div>
  );
};

export default Grid;
