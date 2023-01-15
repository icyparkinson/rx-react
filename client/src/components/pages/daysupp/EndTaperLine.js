import React, { useState } from "react"
import Button from "../../ui/Button"

function EndTaperLine({addLastLine, drugForm}){

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
        {drugForm}s
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
        <Button text={"← Add last line"} styleType={"add"} clickEvent={() => addLastLine(state.dose2, state.freq2)} />
        </p>
    )
}

export default EndTaperLine