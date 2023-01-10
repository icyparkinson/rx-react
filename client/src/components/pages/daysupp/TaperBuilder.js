import React, { useState } from "react"
import styled from "styled-components"
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

    const Marker = styled.span`
    font-size: small;   
    color: white;
    background-color: black;
    padding: 3px 10px;
    border-radius: 100%;
    cursor: pointer;
    `

    const ToolTip = styled.p`
    font-size: small;
    font-style: italic;
    `

function TaperBuilder(){

        const [drugForm, setDrugForm] = useState("tablet")
        const[startingQty, setStartingQty] = useState(0)
    
        function handleStartingQty(e){
            setStartingQty(e.target.value)
        }
      
        const [sigList, setSigList] = useState([])

        
    
        const displaySigList = sigList.map((sigLine, index) => {
            return(
                <SigBox className="line" key={index*Math.random()}>
                    {index > 0 ? "Then take" : "Take" } {sigLine[0]} {drugForm}{sigLine[0] > 1 ? "s" : null} {index === 0 && "by mouth"} {sigLine[1]} time{sigLine[1] > 1 ? "s" : null} daily {sigLine.length === 3 ? `for ${sigLine[2]} day${sigLine[2] > 1 ? "s" : ""}` : "thereafter"}.
                    <button 
                    className="delete-btn"
                    onClick={(event) => deleteLine(event, index)}
                >
                    <i className="gg-trash trash-icon"></i>
                </button>
                </SigBox>
            )
            
        })

        function handleDrugForm(event){
            setDrugForm(event.target.value)
        }
    
        function addToSig(qty, freq, days){
            if (parseFloat(qty) && parseFloat(freq) && parseFloat(days)){
                setSigList((prevSigList) => {
                     return [...prevSigList,
                    [parseFloat(qty), parseFloat(freq), parseFloat(days)]
                    ]
                })
            }
        }

        function deleteLine(event, id){
            setSigList((prevList) => {
                let newList = []
                for (let i = 0; i < prevList.length; i++){
                    if (i === id){
                        continue
                    }else{
                        newList.push(prevList[i])
                    }
                }
                return newList
            })
        }
    
        function addLastLine(qty, freq){
            if (parseFloat(qty) && parseFloat(freq)){
                setSigList((prevSigList) => {
                     return [...prevSigList,
                    [parseFloat(qty), parseFloat(freq)]
                    ]
                })
                setDisplayLastLine(false)
                setDisplayTaperLine(false)
            }
      
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
                            setDayCount(`Error, not enough ${drugForm}`)
                        }else{
                            setDayCount((ultimateDay).toFixed(2))
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


        function calculateFurther(){
            if (currentCount > 0){
                setCurrentCount(0)
                setDayCount((prevDayCount) => {
                    let lastSig = sigList[sigList.length-1][0] * sigList[sigList.length-1][1]
                    let furtherDayAnswer = prevDayCount + (currentCount / lastSig)
                    return furtherDayAnswer.toFixed(2)
                })
            }
        }

        function handleToolTip(){
            setDisplayTooltip((prevState) => {
                return (!prevState)
            })
        }
    
    
        //DISPLAY STATES
    
        const [displayTaperLine, setDisplayTaperLine] = useState(true)
        const [displayLastLine, setDisplayLastLine] = useState(true)
        const [displayCalculate, setDisplayCalculate] = useState(true)
        const [displayTaperAnswer, setDisplayTaperAnswer] = useState(false)
        const [displayTooltip, setDisplayTooltip] = useState(false)
    
    
        const inputW = {
            width: "50px",
            margin: "5px",
            paddingLeft: "2px"
        }
    

    return(
        <div>
        <h1>Tapering Sig Builder</h1>
            
            <div>
            <p>Starting quantity:<input 
            type = "number" 
            style = {inputW} 
            value = {startingQty}
            placeholder = "qty" 
            min = "0"
            onChange = {handleStartingQty}>
            </input> 
            
            <select 
                id="drugForm"
                value={drugForm}
                onChange={handleDrugForm}
                name="drugForm"
            >
                <option value="tablet">tablet</option>
                <option value="capsule">capsule</option>
            </select>
            
            </p>


            <div>
                <p>Current sig:</p>
                {displaySigList}
                {displayTaperLine && <div><TaperLine addToSig={addToSig} drugForm={drugForm}/></div>}
                {displayLastLine && <div><EndTaperLine addLastLine={addLastLine} drugForm={drugForm}/></div>}
            </div>

            <p>
            {displayCalculate && <CalculateButton onClick={handleCalculateTaper}>Calculate</CalculateButton>}
            <ResetButton onClick={resetSig}>Reset</ResetButton>
            </p>

            {displayTaperAnswer && <p style = {{fontWeight: "bold"}}>{
                currentCount >= 0 ? 
                    `${currentCount} ${drugForm}${currentCount === 1 ? 
                        "" : 
                        "s"} over` : 
                    `Need ${currentCount *-1} more ${drugForm}${currentCount === -1 ?
                        "" :
                         "s"}`}</p>}
            {displayTaperAnswer && <p style = {{fontWeight: "bold"}}>Day Supply: {dayCount}</p>}
            {displayTaperAnswer && currentCount > 0 && <CalculateButton onClick={calculateFurther}>Calculate Further</CalculateButton>}
            {displayTaperAnswer && currentCount > 0 && <Marker onMouseOver={handleToolTip} onMouseLeave={handleToolTip}>?</Marker>}
            {displayTooltip && <ToolTip>Calculating further will extend the day supply using the last line in the sig until remaining tablets run out.</ToolTip>}
            

            </div>
        </div>
    )
}

export default TaperBuilder