import React, { useState} from "react"

function Injectables(){

    const [state, setState] = useState({
        mg: "",
        mL: "",
        freq: "",
        dose: "",
        totalVolume: "",
    })

    const handleChange = (e) => {
        const value = e.target.value;
        setState({
            ...state, [e.target.name]: value
        });
      }

    const daySupply = () => {
    return state.mg / state.mL * state.totalVolume / state.dose / state.freq * 7
    }



    return(
        <div>
            <h1>Injectables</h1>
            <p>(Use for Ozempic, Victoza, etc.)</p>
            <p>Strength: <input 
                    type = "number" 
                    className="inputW"  
                    name = "mg" 
                    value = {state.mg} 
                    placeholder = "mg" 
                    min = "0"
                    onChange = {handleChange}>
                    </input>
                /
                    <input 
                    type = "number" 
                    className="inputW"  
                    name = "mL" 
                    value = {state.mL} 
                    placeholder = "mL" 
                    min = "0"
                    onChange = {handleChange}>
                    </input>       
                mg/mL
            </p>
            <p>
                Quantity: <input
                type = "number" 
                className="inputW"  
                name = "totalVolume" 
                value = {state.totalVolume} 
                placeholder = "mL" 
                min = "0"
                onChange = {handleChange}>
                </input>
                mL
            </p>

            <p> Taking <input 
                    type = "number" 
                    className="inputW" 
                    name = "dose" 
                    value = {state.dose} 
                    placeholder = "mg" 
                    min = "0"
                    onChange = {handleChange}>
                </input>
                mg
                    <input 
                    type = "number" 
                    className="inputW" 
                    name = "freq" 
                    value = {state.freq} 
                    placeholder = "freq" 
                    min = "0"
                    onChange = {handleChange}>
                    </input>  
                times per week.
            </p>
                <p style = {{fontWeight: "bold"}}>Day Supply: {daySupply() > 0 ? daySupply() : "Awaiting input"}</p>
        </div>

    )
}

export default Injectables