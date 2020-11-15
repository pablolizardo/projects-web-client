import React, { useContext, useState } from 'react'
import { mutate } from 'swr'
import { taskTypes } from '../consts'
import { AppContext } from '../context/AppContext'
import fetcher from '../utils/fetcher'

const FormAddTask = () => {
    const context = useContext(AppContext)
    const [task, setTask] = useState({
        title: `Task ${Math.floor(Math.random() * 1000)}`,
        type: 'dev',
        start: new Date().toISOString().split('T')[0],
        end: new Date().toISOString().split('T')[0],
        project: null,
        sprint: null,
    })

    const handleChange = e => {
        setTask({ ...task, [e.target.name]: e.target.value })
    }

    const handleSumbit = async (e) => {
        context.setShowForms(false)
        e.preventDefault()
        await fetcher(`${process.env.REACT_APP_API_URL}/tasks`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(task)
        })
        mutate(`${process.env.REACT_APP_API_URL}/projects`)
    }

    return (
        <div>
            <h3>New Task</h3>
            <div className='form'>
                <select name='project' onChange={handleChange}>
                    <option></option>
                    {context.projects.map((project, index) =>
                        <option key={index} value={project._id}>{project.title}</option>
                    )}
                </select>
                <select name='sprint' onChange={handleChange}>
                    { task.project && <option ></option> }
                    { task.project ? context.projects.find(project=> project._id === task.project )
                            .sprints.map((sprint, index) =>
                                <option key={index} value={sprint._id}>{sprint.title}</option>
                            ) : <option disabled>Select a project</option>}
                </select>
                <input name='title' type='text' onChange={handleChange} defaultValue={task.title} />
                <input name='date' type='date' defaultValue={task.date} onChange={handleChange} />
                <button onClick={handleSumbit}> + </button>
            </div>
        </div>
    )
}

export default FormAddTask
