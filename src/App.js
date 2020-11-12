import React, { useContext } from "react";
import Header from "./component/Header";
import { AppContext } from "./context/AppContext";
import FormAddSprint from "./component/FormAddSprint";
import FormAddProject from "./component/FormAddProject";
import GridYear from "./component/GridYear";
import GridToday from "./component/GridToday";
import Project from "./component/Project";
function App() {
  const context = useContext(AppContext);
  const handleCloseModal = () => { context.setShowForms(false) }
  return (
    <main id="app-container">
      <Header />
      {context.showForms && (
        <div id='modal'>
          <button className='primary' onClick={handleCloseModal}>x</button>
          <FormAddProject />
          <FormAddSprint /> 
        </div>
      )}
      {/* <div className='card'> */}
          {/* <FormAddSprint /> */}
          {/* <FormAddProject /> */}
      {/* </div> */}
      <div style={{ position: "relative", }} >
        <div id="project-list">
          {context.projects.map((project) => 
              <div key={project.title} >
                <h4 style={{ 
                  color: project.clientOnly ? 'var(--color-gray)' : `var(--color-${project.color})`, 
                  opacity : project.clientOnly ? '.5' : 1
                  }} > {project.title} </h4>
              </div>
          )}
        </div>
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
