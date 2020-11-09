import React, { useState } from 'react'
import { createContext } from 'react'
import useSWR from 'swr'
import fetcher from '../utils/fetcher'
import getDayNumbers from '../utils/getDayNumbers'
import getDaysInMonth from '../utils/getDaysInMonth'
import getDaysInYear from '../utils/getDaysInYear'
export const AppContext = createContext()

const AppContextWrapper = ({ children }) => {

    const options = { revalidateOnFocus: false, }
    const { data: projects, error } = useSWR(`${process.env.REACT_APP_API_URL}/projects`, fetcher, options)

    const [currentMonth, setCurrentMonth] = useState(11)

    const value = {
        daysInMonth: getDaysInMonth(currentMonth),
        daysInYear: getDaysInYear(),
        dayNumbers: getDayNumbers(),
        yearWidth: 10000,
        projects,
        currentMonth,
        setCurrentMonth
    }

    if (error) return <div>failed to load</div>
    if (!projects) return "Loading..."
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextWrapper