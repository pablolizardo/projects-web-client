import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const ProjectsWrapper = ({ children }) => {
    const context = useContext(AppContext)
   
    return (
        <div ref={context.scrollRef} id='project-scroll'>
            {children}
        </div>
    )
}

export default React.memo(ProjectsWrapper)