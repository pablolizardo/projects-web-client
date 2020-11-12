import getPositionInGrid from './../utils/getPositionInGrid'
import getDaysInYear from './getDaysInYear'

const getScrollPos = (month, yearWidth) => {
    if (month === '01') { return 0 }
    else {
        const position = getPositionInGrid(`2020-${month}-01`)
        const daysInYear = getDaysInYear()
        return (position * yearWidth) / daysInYear
    }
}

export default getScrollPos