import React  from 'react'

const SprintHeader = ({ sprint , sprintWidth}) => {
  return (
    <div className='project-sprint-header'>
      <h5 style={{ backgroundImage: `linear-gradient( 90deg, var(--text-color) ${sprintWidth-20}px, silver ${(sprintWidth)+5}px )` }} >
      {sprint.title} 
      </h5>
      {/* <span onClick={handleSprintOptions}>···</span>
            { showMenu && <div className='project-sprint-menu' onClick={handleDelete}> </div> } */}
      <img src={`https://robohash.org/${Math.floor(Math.random() * 10)}`} />
    </div>
  )
}

export default SprintHeader
