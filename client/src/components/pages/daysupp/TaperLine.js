import React, { useState } from "react"
import Button from "../../ui/Button"

const TaperLine = ({addToSig, drugForm}) => {

    const [state, setState] = useState({
        dose: "",
        days: "",
        freq: "",
        dose2: "",
        freq2: "",
        weeks: ""
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

    if (drugForm === "injection"){
        return(
            <div>
                <p></p>
                Inject <input 
                    type = "number" 
                    className="inputW" 
                    name = "dose"
                    value = {state.dose}
                    placeholder = "mg" 
                    min = "0"
                    onChange = {handleChange}>
                </input>
                mg under the skin daily for 
                <input 
                    type = "number" 
                    className="inputW" 
                    name = "weeks"
                    value = {state.weeks}
                    placeholder = "weeks" 
                    min = "0"
                    onChange = {handleChange}>
                </input>
                week(s)
                <Button text={" ← Add line"} styleType={"add"} clickEvent={() => addToSig(state.dose, 1, (state.weeks))}/>
            </div>
        )
    } else{
        return(
            <div>
                <p></p>
                Take <input 
                    type = "number" 
                    className="inputW" 
                    name = "dose"
                    value = {state.dose}
                    placeholder = "qty" 
                    min = "0"
                    onChange = {handleChange}>
                </input>
                {drugForm}s
                <input 
                    type = "number" 
                    className="inputW" 
                    name = "freq"
                    value = {state.freq}
                    placeholder = "freq" 
                    min = "0"
                    onChange = {handleChange}>
                </input>
                times daily for 
                <input 
                    type = "number" 
                    className="inputW" 
                    name = "days"
                    value = {state.days}
                    placeholder = "days" 
                    min = "0"
                    onChange = {handleChange}>
                </input>
                day(s)
                <Button text={" ← Add line"} styleType={"add"} clickEvent={() => addToSig(state.dose, state.freq, state.days)}/>
            </div>
        )
    }


}

export default TaperLine