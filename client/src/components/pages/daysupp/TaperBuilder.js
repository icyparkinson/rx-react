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

function TaperBuilder(){

        const [drugForm, setDrugForm] = useState("tablet")
        const[startingQty, setStartingQty] = useState(0)
    
        function handleStartingQty(e){
            setStartingQty(e.target.value)
        }
      
        const [sigList, setSigList] = useState([])
    
        const displaySigList = sigList.map((sigLine, index) => {
            return(
                <SigBox key={index*Math.random()}>
                    {index > 0 ? "Then take" : "Take" } {sigLine[0]} {drugForm}{sigLine[0] > 1 ? "s" : null} {index === 0 && "by mouth"} {sigLine[1]} time{sigLine[1] > 1 ? "s" : null} daily {sigLine.length === 3 ? `for ${sigLine[2]} day${sigLine[2] > 1 ? "s" : ""}` : "thereafter"}.
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
    
    
        //DISPLAY STATES
    
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

            {displayTaperAnswer && <p style = {{fontWeight: "bold"}}>{currentCount >= 0 ? `${currentCount} ${drugForm} left` : `Need ${currentCount *-1} ${drugForm}`}</p>}
            {displayTaperAnswer && <p style = {{fontWeight: "bold"}}>Day Supply: {dayCount}</p>}

            </div>
        </div>
    )
}

export default TaperBuilder