import React, { useContext } from "react";
import Header from "./component/Header";
import { AppContext } from "./context/AppContext";
import FormAddSprint from "./component/FormAddSprint";
import FormAddProject from "./component/FormAddProject";
import GridYear from "./component/GridYear";
import GridToday from "./component/GridToday";
import Project from "./component/Project";
import FormAddTask from "./component/FormAddTask";
import ProjectsList from "./component/ProjectsList";

function App() {
  const context = useContext(AppContext);

  return (
    <main id="app-container">
      <Header />
      {context.showForms && (
        <div id='modal'>
          <FormAddProject />
          <FormAddSprint />
          <FormAddTask />
        </div>
      )}
      <div style={{ position: "relative", }} >
        <ProjectsList />
        <div id='project-scroll' ref={context.scrollRef} >
          <div id='project-view' style={{ width: `${context.yearWidth}px` }}>
            <GridYear />
            <GridToday />
            {context.projects.map((project) => <Project key={project._id} project={project} /> )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
