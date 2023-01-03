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

const TaperLine = ({addToSig, drugForm}) => {

    const [state, setState] = useState({
        dose: "",
        days: "",
        freq: "",
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
        <div>
            <p></p>
            Take <input 
                type = "number" 
                style = {inputW} 
                name = "dose"
                value = {state.dose}
                placeholder = "qty" 
                min = "0"
                onChange = {handleChange}>
            </input>
            {drugForm}s
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
        </div>
    )
}

export default TaperLine