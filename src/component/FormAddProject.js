import React, { useContext, useState } from 'react'
import { mutate } from 'swr'
import { AppContext } from '../context/AppContext'
import fetcher from '../utils/fetcher'

const FormAddProject = () => {
    const context = useContext(AppContext)
    const [project, setProject] = useState({
        title: '',
        color: 'pink',
        priority: 1,
        type: 'sprints'
    })
   
    const handleSumbit = async (e) => {
        e.preventDefault()
        context.setShowForms(false)
        mutate(`${process.env.REACT_APP_API_URL}/projects`, [...context.projects, {...project, clientOnly : true}], false)
        await fetch(`${process.env.REACT_APP_API_URL}/projects`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(project)
        })
        mutate(`${process.env.REACT_APP_API_URL}/projects`)
    }
    const handleChange = e => { 
        setProject(project => ({ ...project, [e.target.name]: e.target.value })) 
    }
    const colors = [
        { value: 'pink', label: 'Pink' },
        { value: 'green', label: 'Green' },
        { value: 'purple', label: 'Purple' },
        { value: 'blue', label: 'Blue' },
        { value: 'red', label: 'Red' },
        { value: 'teal', label: 'Teal' },
        { value: 'yellow', label: 'Yellow' },
        { value: 'cyan', label: 'Cyan' },
    ]
    const type = [
        { value: 'sprints', label: '🏃‍♂️ Sprint' },
        { value: 'rc', label: '🌀 Release Cycle' },

    ]
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
                    {type.map(({ value, label }) =>
                        <option key={value} value={value}>{label}</option>
                    )}
                </select>
                <button className='primary' onClick={handleSumbit}> + </button>
            </div>
        </div>
    )
}

export default React.memo(FormAddProject)