import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext'
import getScrollPos from './../utils/getScrollPos'
const SelectMonth = () => {
    const sidebarWidth = 100
    const context = useContext(AppContext)
    const handleChange = (e) => {
        let element = document.getElementById('project-scroll')
        element.scrollLeft = getScrollPos(e.target.value) - (30 + sidebarWidth)
        context.setCurrentMonth(e.target.value)
    }
    useEffect(() => {
        let element = document.getElementById('project-scroll')
        element.scrollLeft = getScrollPos(context.currentMonth) - (30  + sidebarWidth)
    }, [context.currentMonth])

    return (
        <select defaultValue={context.currentMonth} onChange={handleChange}>
            <option value='01'>January</option>
            <option value='02'>February</option>
            <option value='03'>March</option>
            <option value='04'>April</option>
            <option value='05'>May</option>
            <option value='06'>June</option>
            <option value='07'>July</option>
            <option value='08'>Agost</option>
            <option value='09'>September</option>
            <option value='10'>October</option>
            <option value='11'>November</option>
            <option value='12'>December</option>
        </select>
    )
}

export default React.memo(SelectMonth)