import React, { useState } from "react"
import Line from "../../ui/Line"
import TaperLine from "./TaperLine"
import EndTaperLine from "./EndTaperLine"

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

    const [taperArray, setTaperArray] = useState(
        [<TaperLine handleAddLine={handleAddLine}/>, 
        <EndTaperLine />]
    )


    
    const [tabsArray, setTabsArray] = useState([
        {
            qty: 6,
            freq: 2,
            days: 3
        },
        {
            qty: 5,
            freq: 2,
            days: 3
        }
    ])
    
    function handleAddLine(){
        setTabsArray((prevArray) => {
            return [
                ...prevArray,
                {
                    qty: 4,
                    freq: 2,
                    days: 3
                }
            ]
        },
        )


        setTaperArray((prevTaperArray) => {
            let newTaperArray = []

            for (let i = 0; i < prevTaperArray.length; i++){
                if (i === prevTaperArray.length -2){
                    newTaperArray.push(prevTaperArray[i])
                    newTaperArray.push(<TaperLine handleAddLine={handleAddLine}/>)
                }else{
                    newTaperArray.push(prevTaperArray[i])
                }
            }
            return newTaperArray
        })

    }
    
    
    function handleCalculateTaper(){
        let qtyLeft = startingQty
        
        for (let i = 0; i < tabsArray.length; i++){
            let sig = tabsArray[i]
            let qtyThatDay = sig.qty * sig.freq * sig.days
            qtyLeft -= qtyThatDay
        }

        console.log(qtyLeft)
        console.log(tabsArray)
        
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
            
            {/* <div style={{display: "none"}}> */}
            <div>
            <p>Quantity:<input 
            type = "number" 
            style = {inputW} 
            value = {startingQty}
            placeholder = "qty" 
            min = "0"
            onChange = {handleQty}>
            </input> tablets
            </p>

            <p>
                {taperArray}
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