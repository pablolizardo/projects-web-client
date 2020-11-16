import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import getDaysInYear from '../utils/getDaysInYear'
import getPositionInGrid from '../utils/getPositionInGrid'

const GridToday = () => {
    const [leftPos, setLeftPos] = useState()
    const { yearWidth } = useContext(AppContext)
    useEffect(() => {
        let today = new Date() 
        today.setDate(today.getDate() - 1);
        let position = getPositionInGrid(today.toISOString().split('T')[0])
        const daysInYear = getDaysInYear()
        setLeftPos(Math.floor(((position * yearWidth) / daysInYear) - 1))
        // console.log(leftPos)
    }, [yearWidth, leftPos])

    return leftPos ? <div id='grid-today' style={{ left: Math.floor(leftPos) - 1 }}>
    </div> : ''
}

export default React.memo(GridToday)