import React, { useContext } from "react";
import Header from "./component/Header";
import ProjectsList from "./component/ProjectsList";
import ProjectsView from "./component/ProjectsView";
import ProjectsWrapper from "./component/ProjectsWrapper";
import { AppContext } from "./context/AppContext";
import FormAddSprint from "./component/FormAddSprint";
import FormAddProject from "./component/FormAddProject";
function App() {
  const context = useContext(AppContext);
  return (
    <div>
      <Header />
      {context.showForms && (
        <>
          <FormAddProject />
          <FormAddSprint />
        </>
      )}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "var(--sidebar-width) 1fr",
        }}
      >
        <ProjectsList />
        <ProjectsWrapper>
          <ProjectsView />
        </ProjectsWrapper>
      </div>
    </div>
  );
}

export default App;
