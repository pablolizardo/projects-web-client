import React, { useContext } from "react";
import AppContext from "../context/AppContext";

const Grid = () => {
  const context = useContext(AppContext)

  return (
    <div id='project-grid' style={{ gridTemplateColumns: `repeat(${context.daysInYear}, 1fr)` }} >
      {Array.from({ length: context.daysInYear }).map((l, i) => (
        <figure data-day={i + 1} key={i} />
      ))}
    </div>
  );
}

export default React.memo(Grid)