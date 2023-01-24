import { useState } from "react"

function useDateCalc(){
    //Easy day to ms converter for math later
    const convertDayToMs = (num) => {
        return num * 86400000
    }

    //local offset in ms needed to fix problem of date coming back 1 day early
    const localOffset = new Date().getTimezoneOffset() * 60000;

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
    }

    const [dateTwo, setdateTwo] = useState("")

    const handleDateTwo = ({ target }) => {
        const dateTwo = target.value
        const newStrDate = `${dateTwo.toString()} 0:0:0`
        const countDate = new Date(newStrDate)
        const countTime = countDate.getTime()
        setdateTwo(countTime)
    }

    const differenceDate = () => {
        return Math.abs((dateTwo - dateOne)/86400000)
    }

    return {
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
    }

}

export default useDateCalc