import React, { useContext, useState } from 'react'
import { mutate } from 'swr'
import { sprintTypes } from '../consts'
import { AppContext } from '../context/AppContext'
import fetcher from '../utils/fetcher'

const FormAddSprint = () => {
    const context = useContext(AppContext)
    const [sprint, setSprint] = useState({
        title: `Sprint ${Math.floor(Math.random() * 100)}`,
        type: 'sprints',
        start: new Date().toISOString().split('T')[0],
        end: new Date().toISOString().split('T')[0],
        project: null,
    })

    const handleChange = e => {
        setSprint({ ...sprint, [e.target.name]: e.target.value })
    }

    const handleSumbit = async (e) => {
        context.setShowForms(false)
        e.preventDefault()
        await fetcher(`${process.env.REACT_APP_API_URL}/sprints`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(sprint)
        })
        mutate(`${process.env.REACT_APP_API_URL}/projects`)
    }

    return (
        <div>
            <h3>New Sprint</h3>
            <div className='form'>
                <select name='project' onChange={handleChange}>
                    <option></option>
                    {context.projects.map((project, index) =>
                        <option key={index} value={project._id}>{project.title}</option>
                    )}
                </select>
                <select name='type' onChange={handleChange} defaultValue={sprint.type}>
                    {sprintTypes.map(({ value, label }) =>
                        <option key={value} value={value}>{label}</option>
                    )}
                </select>
                <input name='title' type='text' onChange={handleChange} defaultValue={sprint.title} />
                <input name='start' type='date' defaultValue={sprint.start} onChange={handleChange} />
                <input name='end' type='date' defaultValue={sprint.end} onChange={handleChange} />
                <button onClick={handleSumbit}> + </button>
            </div>
        </div>
    )
}

export default FormAddSprint
