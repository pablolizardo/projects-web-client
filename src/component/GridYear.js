import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Grid = () => {
  const context = useContext(AppContext);

  return (
    <div id="project-grid-year" style={{ width: `${context.yearWidth}px`, gridTemplateColumns: `repeat(${context.daysInYear}, 1fr)`, }} >
      {context.dayNumbers.map((day, index) => 
          <figure key={`day-${index}`} data-day={day} className={day === 1 ? "month-start" : undefined} />
      )}
    </div>
  );
};

export default React.memo(Grid);
