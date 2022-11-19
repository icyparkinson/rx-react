import React, { useState, useEffect } from "react"

const TaperLine = ({takenTabsArr}) => {

    const [state, setState] = useState({
        dose: "",
        days: "",
        freq: ""
    })

    const [tabs, setTabs] = useState(0)

    useEffect(() => {
        calculateTabsTaken()
    })

    function calculateTabsTaken(){
        let answer = state.dose * state.freq * state.days
        setTabs(answer)
        takenTabsArr.push(answer)
    }

    const handleChange = (e) => {
        const value = e.target.value;
        setState({
            ...state, [e.target.name]: value
        });
        calculateTabsTaken()
      }

      const inputW = {
        width: "50px",
        margin: "5px",
        paddingLeft: "2px"
    }

    return(
        <div>
            Take <input 
                type = "number" 
                style = {inputW} 
                name = "dose"
                value = {state.dose}
                placeholder = "qty" 
                min = "0"
                onChange = {handleChange}>
            </input>
            tablets
            <input 
                type = "number" 
                style = {inputW} 
                name = "freq"
                value = {state.freq}
                placeholder = "freq" 
                min = "0"
                onChange = {handleChange}>
            </input>
            times daily for 
            <input 
                type = "number" 
                style = {inputW} 
                name = "days"
                value = {state.days}
                placeholder = "days" 
                min = "0"
                onChange = {handleChange}>
            </input>
            days. Then
        </div>
    )
}

export default TaperLine