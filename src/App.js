import React, { useEffect, useState } from 'react'

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
    <div>
    <table>
    <thead>
      <tr>
        <th>title</th>
        <th>order</th>
        <th>color</th>
      </tr>
    </thead>
      <tbody>
        {projects.map(project=>
          <tr key={project._id}>
            <td>{project.title}</td>
            <td>{project.order}</td>
            <td>{project.color}</td>
          </tr>
        )}
      </tbody>
    </table>
    </div>
  );
}

export default App;
