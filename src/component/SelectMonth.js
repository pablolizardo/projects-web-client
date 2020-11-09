import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const SelectMonth = () => {
    const context = useContext(AppContext)
    const handleChange = (e) => { context.setCurrentMonth(e.target.value) }
    return (
        <div style={{ position: 'fixed', bottom: 20, left: 10, zIndex: 99 }}>
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
        </div>
    )
}

export default React.memo(SelectMonth)