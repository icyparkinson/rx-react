import React, { useState } from "react"

const DayCalc = () => {
    //Easy day to ms converter for math later
    const convertDayToMs = (num) => {
        return num * 86400000
    }

    //local offset in ms needed to fix problem of date coming back 1 day early
    const localOffset = 25200000

    const today = new Date()

   
    const [countDate, setCountDate] = useState("")

    //Link the input so that it can be changed when values are entered
    const handleCountDate = ({ target }) => {
        const newCountDate = target.value
        const countDate = new Date(newCountDate)
        const countTime = countDate.getTime() + localOffset
        const mathCount = (today.getTime() - countTime) / 86400000
        console.log(countDate.toDateString())
        setCountDate(mathCount)
    }
   
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

            <section style= {{borderTop: "2px solid #574D68", height: "15px"}}></section>

            Enter date: <input type = "date" onChange = {handleCountDate}></input>
            <p style = {{fontWeight: "bold"}}>Result: {countDate}</p>

            <section style= {{borderTop: "2px solid #574D68", height: "15px"}}></section>

            <span>Go back </span>
            <input onChange = {handleBackDate} style = {{width: "40px"}}></input>
            <span> days</span>
            <p style = {{fontWeight: "bold"}}>Result: { (new Date(today.getTime() - convertDayToMs(backDate))).toDateString()  }</p>
            
            <section style= {{borderTop: "2px solid #574D68", height: "15px"}}></section>
            
            <span> Last fill date: </span>
            <input type = "date" onChange = {handleLastFillDate}></input>
            <span> plus: </span>
            <input style = {{width: "40px"}} onChange = {handleNextFillDate}></input>
            <span> days</span>
            <p style = {{fontWeight: "bold"}}>Result: {  (new Date(lastFillDate + localOffset + convertDayToMs(nextFillDate))).toDateString() }</p>
            {console.log(
                `next fill date is ${convertDayToMs(nextFillDate)} and last fill is ${lastFillDate} which is ${new Date(lastFillDate)} and the offset is ${(new Date()).getTimezoneOffset*60000} `
                )}

            
        </div>
    )
}

export default DayCalc