import React, { useState } from "react"

const DayCalc = () => {
    //Easy day to ms converter for math later
    const convertDayToMs = (num) => {
        return num * 86400000
    }

    const today = new Date()

    const [backDate, setDate] = useState("")

    //Link the input so that it can be changed when values are entered
    const handleBackDate = ({ target }) => {
        const newDate = target.value
        setDate(newDate)
    }

    const [nextFillDate, setNextFillDate] = useState("")

    const handleNextFillDate = ({ target }) => {
        const nextDate = target.value
        setNextFillDate(nextDate)
    }

    const [lastFillDate, setLastFillDate] = useState("")

    const handleLastFillDate = ({ target }) => {
        const lastDate = target.value
        const editDate = new Date(lastDate)
        const lastDateInMs = Number(editDate.getTime())
        setLastFillDate(lastDateInMs)
    }

    
    return(
        <div>
            <h1>Today's date: {Date(Date.now()).toString().substr(4, 11)}</h1>

            <section style= {{borderTop: "2px solid red", height: "15px"}}></section>

            <span>Go back </span>
            <input onChange = {handleBackDate} value = {backDate} style = {{width: "40px"}}></input>
            <span> days</span>
            <p style = {{fontWeight: "bold"}}>Result: { (new Date(today.getTime() - convertDayToMs(backDate))).toDateString()  }</p>
            
            <section style= {{borderTop: "2px solid red", height: "15px"}}></section>
            
            <span> Last fill date: </span>
            <input type = "date" onChange = {handleLastFillDate}></input>
            <span> plus: </span>
            <input style = {{width: "40px"}} onChange = {handleNextFillDate}></input>
            <span> days</span>
            <p>Result: {  (new Date(lastFillDate - convertDayToMs(nextFillDate))).toDateString() }</p>
            {console.log(convertDayToMs(nextFillDate))}
        </div>
    )
}

export default DayCalc