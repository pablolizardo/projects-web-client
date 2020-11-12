import React, { useState } from 'react'

const SprintHeader = ({sprint}) => {

    const [showMenu, setShowMenu] = useState(false)
    const handleSprintOptions = () => { setShowMenu(!showMenu) }
    const handleDelete = () => { window.confirm('Are you sure?') }

    return (
        <div className='project-sprint-header'>
            <i>{sprint.type}</i>
            <strong>{sprint.title}</strong>
            <span onClick={handleSprintOptions}>···</span>
            { showMenu && <div className='project-sprint-menu' onClick={handleDelete}> </div> }
        </div>
    )
}

export default SprintHeader