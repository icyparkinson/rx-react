import React, { useState } from "react"
import styled from "styled-components"

const AddButton = styled.button`
margin-left: 5px;
padding: 2px 8px;
background-color: darkgreen;
color: white;
border-radius: 15px;
`

const TaperLine = ({addToSig, addLastLine}) => {

    const [state, setState] = useState({
        dose: "",
        days: "",
        freq: "",
        dose2: "",
        freq2: ""
    })


    // function calculateTabsTaken(){
    //     let answer = state.dose * state.freq * state.days
    //     setTabs(answer)
    //     takenTabsArr.push(answer)
    // }

    const handleChange = (e) => {
        const value = e.target.value;
        setState({
            ...state, [e.target.name]: value
        });
      }

      const inputW = {
        width: "50px",
        margin: "5px",
        paddingLeft: "2px"
    }

    return(
        <div>
            <p>
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
            days
            <AddButton onClick={() => addToSig(state.dose, state.freq, state.days)}> ← Add line</AddButton>
            </p>
            <p>
            Then take <input 
                type = "number" 
                style = {inputW} 
                name = "dose2"
                value = {state.dose2}
                placeholder = "qty" 
                min = "0"
                onChange = {handleChange}>
            </input>
            tablets
            <input 
                type = "number" 
                style = {inputW} 
                name = "freq2"
                value = {state.freq2}
                placeholder = "freq" 
                min = "0"
                onChange = {handleChange}>
            </input>
            times daily thereafter
            <AddButton onClick={() => addLastLine(state.dose2, state.freq2)}> ← Add last line</AddButton>
            </p>
        </div>
    )
}

export default TaperLine