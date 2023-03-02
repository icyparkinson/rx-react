import React, { useState } from "react"
import styled from "styled-components"

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

function TaperAnswer({displayTaperAnswer, currentCount, drugForm, calculateFurther, dayCount}) {

    function handleToolTip(){
        setDisplayTooltip((prevState) => {
            return (!prevState)
        })
    }

    const [displayTooltip, setDisplayTooltip] = useState(false)

    return ( 
        <div>
            {displayTaperAnswer && <p style = {{fontWeight: "bold"}}>{
                currentCount >= 0 ? 
                    `${currentCount} ${drugForm === "injection" ? "mL" : drugForm}${currentCount === 1 ? 
                        "" : 
                        "s"} over` : 
                    `Need ${(currentCount *-1).toFixed(2)} more ${drugForm === "injection" ? "mL" : drugForm}${currentCount === -1 ?
                        "" :
                         "s"}`}</p>}
            {displayTaperAnswer && <p style = {{fontWeight: "bold"}}>Day Supply: {dayCount}</p>}
            {displayTaperAnswer && currentCount > 0 && <CalculateButton onClick={calculateFurther}>Calculate Further</CalculateButton>}
            {displayTaperAnswer && currentCount > 0 && <Marker onMouseOver={handleToolTip} onMouseLeave={handleToolTip}>?</Marker>}
            {displayTooltip && <ToolTip>Calculating further will extend the day supply using the last line in the sig until remaining tablets run out.</ToolTip>}
        </div>
     );
}

export default TaperAnswer;