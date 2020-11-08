import React, { useState } from 'react'
import { mutate } from 'swr'

const FormAddProject = () => {

    const [project, setProject] = useState({
        title: '',
        color: 'pink',
        priority: 1
    })
    const postProject = async () => {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/projects`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(project)
        })
        const json = await res.json()
        return json

    }
    const handleSumbit = async (e) => {
        e.preventDefault()
        await postProject()
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
    return (
        <div>
            <label>New Project</label>
            <div>
                <input name='title' type='text' value={project.title} onChange={handleChange} />
                <select name='color' onChange={handleChange}>
                    {colors.map(({ value, label }) =>
                        <option key={value} value={value}>{label}</option>
                    )}
                </select>
                <button className='primary' onClick={handleSumbit}> + </button>
            </div>
        </div>
    )
}

export default React.memo(FormAddProject)