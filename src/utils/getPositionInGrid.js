const getPositionInGrid = (date) => {

    const dateParsed = new Date(date)
    const month = dateParsed.getMonth()
    const dayNumber = dateParsed.getDate()

    let positionInYear = 0

    Array.from({ length: month }).map((m, i) => {
        let day = new Date(2020, i + 1, 0)
        positionInYear += day.getDate()
    })
    return positionInYear + dayNumber + 1
}

export default getPositionInGrid