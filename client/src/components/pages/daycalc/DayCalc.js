import React, { useState } from "react"
import Line from "../../ui/Line"
import useDateCalc from "./useDateCalc"

const DayCalc = () => {
    
    const {
        convertDayToMs,
        handleCountDate,
        countDate,
        handleBackDate,
        backDate,
        today,
        handleLastFillDate,
        handleNextFillDate,
        lastFillDate,
        localOffset,
        nextFillDate,
        handleDateOne,
        handleDateTwo,
        differenceDate
    } = useDateCalc()
    
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