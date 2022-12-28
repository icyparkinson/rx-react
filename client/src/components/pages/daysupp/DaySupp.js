import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Line from "../../ui/Line"
import TaperLine from "./TaperLine"
import EndTaperLine from "./EndTaperLine"

const SigBox = styled.div`
background-color: lightgray;
margin: auto;
width: 500px;
padding: 3px;
`

const CalculateButton = styled.button`
padding: 2px 8px;
margin: 0 5px;
background-color: #4B0082;
color: white;
border-radius: 15px;
:hover{
    background-color: #9370DB;
    cursor: pointer;
}
`

const ResetButton = styled.button`
padding: 2px 8px;
margin: 0 5px;
background-color: black;
color: white;
border-radius: 15px;
:hover{
    background-color: darkred;
    cursor: pointer;
}
`

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

    function handleStartingQty(e){
        setStartingQty(e.target.value)
    }

    const handleChange = (e) => {
        const value = e.target.value;
        setState({
            ...state, [e.target.name]: value
        });
      }

    const daySupply = () => {
        return state.mg / state.mL * state.totalVolume / state.dose / state.freq * 7
    }

//TAPER SECTION HERE
  

    const [sigList, setSigList] = useState([])

    const displaySigList = sigList.map((sigLine, index) => {
        return(
            <SigBox key={index*Math.random()}>
                {index > 0 ? "Then take" : "Take" } {sigLine[0]} tablet{sigLine[0] > 1 ? "s" : null} {sigLine[1]} time{sigLine[1] > 1 ? "s" : null} daily {sigLine.length === 3 ? `for ${sigLine[2]} day${sigLine[2] > 1 ? "s" : ""}` : "thereafter"}.
            </SigBox>
        )
        
    })

    function addToSig(qty, freq, days){
        if (parseFloat(qty) && parseFloat(freq) && parseFloat(days)){
            setSigList((prevSigList) => {
                 return [...prevSigList,
                [parseFloat(qty), parseFloat(freq), parseFloat(days)]
                ]
            })
        }
    }

    function addLastLine(qty, freq){
        if (parseFloat(qty) && parseFloat(freq)){
            setSigList((prevSigList) => {
                 return [...prevSigList,
                [parseFloat(qty), parseFloat(freq)]
                ]
            })
        }
        setDisplayLastLine(false)
        setDisplayTaperLine(false)
  
    }


    function resetSig(){
        setSigList(() => {
            return []
        })
        setCurrentCount(startingQty)
        setDayCount(0)

        setDisplayLastLine(true)
        setDisplayTaperLine(true)
        setDisplayCalculate(true)
        setDisplayTaperAnswer(false)
    }

    const [dayCount, setDayCount] = useState(0)

    function handleCalculateTaper(){
        if (sigList.length > 0){
            let finalCount = 0
            let finalDay = 0
    
            for (let i = 0; i < sigList.length; i++){
                let line = sigList[i]
    
                
    
                if (line.length === 3){
                    let tabsInADay = line[0] * line[1] * line[2]
                    finalCount += tabsInADay
                    finalDay += line[2]
                    setCurrentCount(startingQty - finalCount)
                    setDayCount(finalDay)
                    
                }else{
                    let current = (startingQty - finalCount)
                    let lastSigTabs = line[0] * line[1]
                    let ultimateDay = finalDay + (current / lastSigTabs)
    
                    if (current <= 0){
                        setDayCount("Error, not enough tablets")
                    }else{
                        setDayCount(ultimateDay)
                        setCurrentCount(0)
                    }
                    
                }   
            }   
    
            setDisplayLastLine(false)
            setDisplayTaperLine(false)
            setDisplayTaperAnswer(true)
        }
        
    }
    

    const [currentCount, setCurrentCount] = useState(startingQty)


    //DISPLAY SETTINGS

    const [displayTaperLine, setDisplayTaperLine] = useState(true)
    const [displayLastLine, setDisplayLastLine] = useState(true)
    const [displayCalculate, setDisplayCalculate] = useState(true)
    const [displayTaperAnswer, setDisplayTaperAnswer] = useState(false)


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








            <h1>Tapering Sig Builder</h1>
            
            {/* <div style={{display: "none"}}> */}
            <div>
            <p>Starting quantity:<input 
            type = "number" 
            style = {inputW} 
            value = {startingQty}
            placeholder = "qty" 
            min = "0"
            onChange = {handleStartingQty}>
            </input> tablets
            </p>


            <div>
                <p>Current sig:</p>
                {displaySigList}
                {displayTaperLine ? <div><TaperLine addToSig={addToSig}/></div> : null}
                {displayLastLine ? <div><EndTaperLine addLastLine={addLastLine}/></div> : null}
            </div>

            <p>
            {/* <button onClick={handleAddLine}>Add Line</button> */}
            {displayCalculate ? <CalculateButton onClick={handleCalculateTaper}>Calculate</CalculateButton> : null}
            <ResetButton onClick={resetSig}>Reset</ResetButton>
            </p>

            {displayTaperAnswer ? <p style = {{fontWeight: "bold"}}>{currentCount >= 0 ? `${currentCount} tablets left` : `Need ${currentCount *-1} tablets`}</p> : null}
            {displayTaperAnswer ? <p style = {{fontWeight: "bold"}}>Day Supply: {dayCount}</p> : null}

            </div>
        </div>
    )
}

export default DaySupp