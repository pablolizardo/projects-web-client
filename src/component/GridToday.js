import React, { useEffect, useState } from 'react'
import getDaysInYear from '../utils/getDaysInYear'
import getPositionInGrid from '../utils/getPositionInGrid'

const GridToday = () => {
    const [leftPos, setLeftPos] = useState()

    useEffect(()=>{
        let today = new Date()
        let position = getPositionInGrid(today.toISOString().split('T')[0])
        const yearWidth = 10000
        const daysInYear = getDaysInYear()
        setLeftPos(Math.floor(((position * yearWidth) / daysInYear) -2 ))
        console.log(leftPos)
    },[leftPos])

    return leftPos ? <div id='grid-today' style={{ left: Math.floor(leftPos) -2 }}>
        </div> : ''
}

export default React.memo(GridToday)