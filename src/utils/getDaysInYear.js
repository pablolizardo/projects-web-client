const getDaysInYear = () => {
    let days = 0
    Array.from({ length: 12 }).forEach((m, i) => {
        let day = new Date(2020, i + 1, 0)
        days += day.getDate()
    })
    return days
}

export default getDaysInYear