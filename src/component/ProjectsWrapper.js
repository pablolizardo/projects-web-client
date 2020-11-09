import React, { useContext, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { AppContext } from '../context/AppContext'
import getScrollPos from '../utils/getScrollPos'
import SelectMonth from './SelectMonth'

const ProjectsWrapper = ({ children }) => {
    const context = useContext(AppContext)

    const StyledProjectsWrapper = styled.div`
        position:relative;
        overflow:overlay;
        scroll-behavior: smooth;

    `

    const scrollRef = useRef()

    useEffect(() => {
        let prevScrollPos = scrollRef.current.scrollLeft
        const scrollPos = getScrollPos(context.currentMonth)
        console.log('new month scroll pos (in px) ', scrollPos)
        console.log('current scroll pos (in px) ', prevScrollPos)
        const el = document.getElementById('scroll-view')
        // console.log('current scroll pos (in px) ', el.scrollIntoView(true))
        scrollRef.current.scroll({ left: scrollPos - prevScrollPos })
    }, [context.currentMonth])

    return (
        <StyledProjectsWrapper ref={scrollRef} id='scroll-view'>
            <SelectMonth />
            {children}
        </StyledProjectsWrapper>
    )
}

export default React.memo(ProjectsWrapper)