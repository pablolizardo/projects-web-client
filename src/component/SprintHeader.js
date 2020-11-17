import React, { useState } from 'react'
import { IconBell, IconCode, IconExclamation, IconRefresh, IconShield } from './../icons'

const SprintHeader = ({ sprint }) => {

  const [showMenu, setShowMenu] = useState(false)
  const handleSprintOptions = () => { setShowMenu(!showMenu) }
  const handleDelete = () => { window.confirm('Are you sure?') }

  return (
    <div className='project-sprint-header'>
      { sprint.type === 'sprints' && <IconCode />}
      { sprint.type === 'rc' && <IconRefresh />}
      { sprint.type === 'support' && <IconShield />}
      { sprint.type === 'fixs' && <IconExclamation />}
      <h5
        style={{
          background: `-webkit-linear-gradient(50%, black, gray)`,

        }}
      >{sprint.title}</h5>
      {/* <span onClick={handleSprintOptions}>···</span>
            { showMenu && <div className='project-sprint-menu' onClick={handleDelete}> </div> } */}
      <img src={`https://robohash.org/${Math.floor(Math.random() * 10)}`} />
    </div>
  )
}

export default SprintHeader
