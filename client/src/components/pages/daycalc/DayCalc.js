import React, { useState } from "react"
import Line from "../../ui/Line"

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
        const newCountDate = target.value //2022-05-21 (correct)
        const newStrDate = `${newCountDate.toString()} 0:0:0`
        const countDate = new Date(newStrDate)
        const countTime = countDate.getTime()
        const mathCount = (today.getTime() - countTime) / 86400000
        // console.log(today.getTime())
        setCountDate(Math.floor(mathCount))
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

    const [dateOne, setdateOne] = useState("")

    const handleDateOne = ({ target }) => {
        const dateOne = target.value
        const newStrDate = `${dateOne.toString()} 0:0:0`
        const countDate = new Date(newStrDate)
        const countTime = countDate.getTime()
        setdateOne(countTime)
        console.log(countTime)
    }

    const [dateTwo, setdateTwo] = useState("")

    const handleDateTwo = ({ target }) => {
        const dateTwo = target.value
        const newStrDate = `${dateTwo.toString()} 0:0:0`
        const countDate = new Date(newStrDate)
        const countTime = countDate.getTime()
        setdateTwo(countTime)
    }

    const differenceDate = (a,b) => {
        return Math.abs((dateTwo - dateOne)/86400000)
    }



    
    return(
        <div>
            <h1>Today's date: {Date(Date.now()).toString().substr(4, 11)}</h1>

            <Line width = "100%"/>

            Enter date: <input type = "date" onChange = {handleCountDate}></input>
            <p style = {{fontWeight: "bold"}}>Result: {Math.abs(countDate)} {countDate < 0 ? `${Math.abs(countDate) === 1 ? "day" : "days"} in the future` : `${Math.abs(countDate) === 1 ? "day" : "days"} ago`}</p>

            <Line width = "70%"/>

            <span>Go back </span>
            <input type = "number" onChange = {handleBackDate} style = {{width: "40px"}}></input>
            <span> days</span>
            <p style = {{fontWeight: "bold"}}>Result: { (new Date(today.getTime() - convertDayToMs(backDate))).toDateString()  }</p>
            
            <Line width = "70%"/>

            <span> Last fill date: </span>
            <input type = "date" onChange = {handleLastFillDate} style = {{marginBottom: "15px"}}></input>
            <span> plus: </span>
            <input type = "number" style = {{width: "40px"}} onChange = {handleNextFillDate}></input>
            <span> days</span>
            <p style = {{fontWeight: "bold"}}>Result: {  (new Date(lastFillDate + localOffset + convertDayToMs(nextFillDate))).toDateString() }</p>
            {/* {console.log(
                `next fill date is ${convertDayToMs(nextFillDate)} and last fill is ${lastFillDate} which is ${new Date(lastFillDate)} and the offset is ${(new Date()).getTimezoneOffset*60000} `
                )} */}

            <Line width = "70%"/>

            <span>Between two dates:</span>
            <p>
            <input type = "date" onChange = {handleDateOne}></input> and <input type = "date" onChange = {handleDateTwo}></input>
            </p>
            <p style = {{fontWeight: "bold"}}>Result: {differenceDate()} {differenceDate() === 1 ? "day" : "days"}</p>
            
        </div>
    )
}

export default DayCalc