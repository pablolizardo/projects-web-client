import React, { useState } from 'react'
import { IconCode, IconTest } from '../consts/icons'

const SprintHeader = ({sprint}) => {

    const [showMenu, setShowMenu] = useState(false)
    const handleSprintOptions = () => { setShowMenu(!showMenu) }
    const handleDelete = () => { window.confirm('Are you sure?') }

    return (
        <div className='project-sprint-header'>
            { sprint.type ==='dev' && <IconCode />}
            { sprint.type ==='test' && <IconTest />}
            <strong>{sprint.title}</strong>
            <span onClick={handleSprintOptions}>···</span>
            { showMenu && <div className='project-sprint-menu' onClick={handleDelete}> </div> }
        </div>
    )
}

export default SprintHeader
