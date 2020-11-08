import React, { useEffect, useState } from "react"
import useSWR from "swr"
import FormAddSprint from "./component/FormAddSprint"
import FormAddProject from "./component/FormAddProject"
import Grid from "./component/Grid"
import Header from "./component/Header"
import Project from "./component/Project"
import fetcher from "./utils/fetcher"
import SelectMonth from "./component/SelectMonth"
import AppContext from "./context/AppContext"

function App() {

  const options = {
    revalidateOnFocus: false,
  }
  const { data: projects, error } = useSWR(
    `${process.env.REACT_APP_API_URL}/projects`,
    fetcher,
    options
  )
  const [month, setMonth] = useState(11)
  const [daysInMonth, setDaysInMonth] = useState(1)

  useEffect(() => {
    let date = new Date(2020, month, 0)
    setDaysInMonth(date.getDate())
  }, [month])

  if (error) return <div>failed to load</div>
  if (!projects) return "Loading..."
  return (
    <AppContext.Provider value={{ month, daysInMonth }}>
      <main>
        <Header />
        <SelectMonth setMonth={setMonth} />
        <FormAddProject />
        <FormAddSprint projects={projects} />
        <div id="projects-wrapper">
          <Grid />
          {projects.map((project) => (
            <Project key={project._id} project={project} />
          ))}
        </div>
      </main>
    </AppContext.Provider>
  )
}

export default App
