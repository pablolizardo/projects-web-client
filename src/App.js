import React from "react"
import Header from "./component/Header"
import ProjectsList from "./component/ProjectsList"
import ProjectsView from "./component/ProjectsView"
import ProjectsWrapper from "./component/ProjectsWrapper"
import AppContextWrapper from "./context/AppContext"
import FormAddSprint from './component/FormAddSprint'
function App() {
  return (
    <AppContextWrapper>
      <div>
        <Header />
        <FormAddSprint />
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'var(--sidebar-width) 1fr'

        }}>
          <ProjectsList />
          <ProjectsWrapper >
            <ProjectsView />
          </ProjectsWrapper>
        </div>
      </div>
    </AppContextWrapper>
  )
}

export default App
