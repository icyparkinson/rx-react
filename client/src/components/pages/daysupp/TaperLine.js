import React, { useState } from "react"
import Button from "../../ui/Button"

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
            <Button text={" ← Add line"} styleType={"add"} clickEvent={() => addToSig(state.dose, state.freq, state.days)}/>
        </div>
    )
}

export default TaperLine