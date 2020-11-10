import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ProjectsList = () => {
  const context = useContext(AppContext);

  return (
    <div id="project-list">
      {context.projects.map((project) => {
        return (
          <div key={project.title} >
            {/* <small><svg fill="currentColor" width='16' height='16' viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg></small> */}
            <h4 style={{ color: `var(--color-${project.color})`, }} >
              {project.title}
            </h4>
          </div>
        );
      })}
    </div>
  );
};

export default React.memo(ProjectsList);
