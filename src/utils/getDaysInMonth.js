// import getDaysInYear from "./getDaysInYear"

const getDaysInMonth = month => {
    let day = new Date(2020, month, 0)
    return day.getDate()
}

export default getDaysInMonth
