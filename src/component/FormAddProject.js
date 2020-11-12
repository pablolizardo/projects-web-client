import React, { useContext, useState } from 'react'
import { mutate } from 'swr'
import { colors, projectTypes } from '../consts'
import { AppContext } from '../context/AppContext'

const FormAddProject = () => {
    const context = useContext(AppContext)
    const [project, setProject] = useState({
        title: `Proj ${Math.floor(Math.random()*100)}`,
        color: 'pink',
        priority: 1,
        type: 'sprints',
        sprints : []
    })
    const handleChange = e => { setProject(project => ({ ...project, [e.target.name]: e.target.value })) }

    const handleSumbit = async (e) => {
        e.preventDefault()
        context.setShowForms(false)
        mutate(`${process.env.REACT_APP_API_URL}/projects`, [...context.projects, {...project, clientOnly : true, _id:Math.floor(Math.random()*999)}], false)
        await fetch(`${process.env.REACT_APP_API_URL}/projects`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(project)
        })
        mutate(`${process.env.REACT_APP_API_URL}/projects`)
    }
    
    
    return (
        <div>
            <h3>New Project</h3>
            <div className='form'>
                <input name='title' type='text' value={project.title} onChange={handleChange} />
                <select name='color' onChange={handleChange}>
                    {colors.map(({ value, label }) =>
                        <option key={value} value={value}>{label}</option>
                    )}
                </select>
                <select name='type' onChange={handleChange} defaultValue={project.type}>
                    {projectTypes.map(({ value, label }) =>
                        <option key={value} value={value}>{label}</option>
                    )}
                </select>
                <button onClick={handleSumbit}> + </button>
            </div>
        </div>
    )
}

export default FormAddProject