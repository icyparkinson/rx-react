import React, { useState } from "react"
import styled from "styled-components"

const AddButton = styled.button`
margin-left: 5px;
padding: 2px 8px;
background-color: darkgreen;
color: white;
border-radius: 15px;
:hover{
    background-color: green;
    cursor: pointer;
}
`

function EndTaperLine({addLastLine, hideTaperLine, hideLastLine}){

    const [state, setState] = useState({
        dose2: "",
        freq2: ""
    })

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
    )
}

export default EndTaperLine