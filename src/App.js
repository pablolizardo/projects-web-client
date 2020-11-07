import React, { useEffect, useState } from 'react'
import Grid from './component/Grid'
import Project from './component/Project'

function App() {
  const [projects, setProjects] = useState()

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/projects`)
      const json = await res.json()
      setProjects(json)
    }
    fetchProjects()
  }, [])

  if (!projects) return 'Loading...'
  return (
    <div id='projects-wrapper'>
      <Grid />
      {projects.map(project =>
        <Project
          key={project._id}
          project={project} />
      )}
    </div>
  );
}

export default App;

