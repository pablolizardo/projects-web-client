const getDayNumbers = () => {
    let dayNumbers = []
    for (let i = 0; i < 12; i++) {
        let day = new Date(2020, i + 1, 0)
        for (let j = 0; j < day.getDate(); j++) {
            dayNumbers.push(j + 1)
        }
    }
    return dayNumbers

}

export default getDayNumbers