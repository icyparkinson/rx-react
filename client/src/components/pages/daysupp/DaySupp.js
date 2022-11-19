import React, { useState } from "react"
import Line from "../../ui/Line"
import TaperLine from "./TaperLine"

const DaySupp = () => {

     const [state, setState] = useState({
        vol: "",
        mg: "",
        mL: "",
        freq: "",
        dose: "",
        daySupp: 0,
        totalVolume: "",
        tabDays: "",
        tabFreq: "",
        tabCount: "",
    })

    const[startingQty, setStartingQty] = useState(0)

    const handleChange = (e) => {
        const value = e.target.value;
        setState({
            ...state, [e.target.name]: value
        });
      }

    const daySupply = () => {
        return state.mg / state.mL * state.totalVolume / state.dose / state.freq * 7
    }


    function handleAddLine(){
        console.log("Add a line")
    }

    function handleCalculateTaper(){
        // let qtyLeft = startingQty
        // for (let i = 0; i < takenTabs.length; i++){
        //     qtyLeft -= takenTabs[i]
        // }
        // console.log(qtyLeft)
        console.log(takenTabs)
        
    }

    let takenTabs = 0
    let takenTabsArr = []

    const handleQty = (e) => {
        const value = parseInt(e.target.value)
        setStartingQty(value)
    }





    const inputW = {
        width: "50px",
        margin: "5px",
        paddingLeft: "2px"
    }



    
    return(
        <div style = {{marginBottom: "20px"}}>
            <h1>Injectables</h1>
            <p>(Use for Ozempic, Victoza, etc.)</p>
            <p>Strength: <input 
                    type = "number" 
                    style = {inputW}  
                    name = "mg" 
                    value = {state.mg} 
                    placeholder = "mg" 
                    min = "0"
                    onChange = {handleChange}>
                    </input>
                /
                    <input 
                    type = "number" 
                    style = {inputW}  
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
                 style = {inputW}  
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
                    style = {inputW} 
                    name = "dose" 
                    value = {state.dose} 
                    placeholder = "mg" 
                    min = "0"
                    onChange = {handleChange}>
                </input>
                mg
                    <input 
                    type = "number" 
                    style = {inputW} 
                    name = "freq" 
                    value = {state.freq} 
                    placeholder = "freq" 
                    min = "0"
                    onChange = {handleChange}>
                    </input>  
                times per week.
                    </p>
                    <p style = {{fontWeight: "bold"}}>Day Supply: {daySupply()}</p>

            <Line width = "100%"/>

            <h1>Tapering (coming soon!)</h1>
            
            <div style={{display: "none"}}>
            <p>Quantity:<input 
            type = "number" 
            style = {inputW} 
            value = {startingQty}
            placeholder = "qty" 
            min = "0"
            onChange = {handleQty}>
            </input> tablets
            </p>
           < TaperLine takenTabsArr={takenTabsArr}/>
            <p>
            take 
            <input 
            type = "number" 
            style = {inputW} 
            placeholder = "qty" 
            min = "0"
            onChange = {handleChange}>
            </input> 
            tablets
            <input 
            type = "number" 
            style = {inputW} 
            placeholder = "freq" 
            min = "0"
            onChange = {handleChange}>
            </input>
            times daily thereafter 
            </p>

            <p>
            <button onClick={handleAddLine}>Add Line</button>
            <button onClick={handleCalculateTaper}>Calculate</button>
            </p>

            <p style = {{fontWeight: "bold"}}>Day Supply: </p>
            </div>

        </div>
    )
}

export default DaySupp