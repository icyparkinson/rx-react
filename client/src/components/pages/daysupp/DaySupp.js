import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Line from "../../ui/Line"
import TaperLine from "./TaperLine"

const SigBox = styled.div`
background-color: lightgray;
margin: auto;
width: 500px;
padding: 3px;
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




    ///TAPER STUFF STARTS HERE

    // const [taperArray, setTaperArray] = useState(
    //     [<TaperLine addToTabsArray={addToTabsArray}/>, 
    //     <EndTaperLine />]
    // )

    // function handleAddLine(){

    //     setTaperArray((prevTaperArray) => {
    //         let newTaperArray = []

    //         for (let i = 0; i < prevTaperArray.length; i++){
    //             if (i === prevTaperArray.length -2){
    //                 newTaperArray.push(prevTaperArray[i])
    //                 newTaperArray.push(<TaperLine addToTabsArray={addToTabsArray}/>)
    //             }else{
    //                 newTaperArray.push(prevTaperArray[i])
    //             }
    //         }
    //         return newTaperArray
    //     })

    // }
    


    // const displayTaper = taperArray.map((taper, index) => {
    //     return(
    //         <div key={index*Math.random()}>{taper}</div>
    //     )
    // })


  

    const [sigList, setSigList] = useState([[1, 2, 3], [2, 2, 2]])

    const displaySigList = sigList.map((sigLine, index) => {
        return(
            <SigBox key={index*Math.random()}>
                {index > 0 ? "Then take" : "Take" } {sigLine[0]} tablets {sigLine[1]} times daily {sigLine.length === 3 ? `for ${sigLine[2]} days` : "thereafter"}.
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
  
    }


    function resetSig(){
        setSigList(() => {
            return []
        })
        setCurrentCount(startingQty)
    }

    const [dayCount, setDayCount] = useState(0)

    function handleCalculateTaper(){
        let finalCount = 0
        let finalDay = 0

        for (let i = 0; i < sigList.length; i++){
            let line = sigList[i]

            

            if (line.length === 3){
                let tabsInADay = line[0] * line[1] * line[2]
                finalCount += tabsInADay
                finalDay += line[2]
            }
            

            if (line.length === 3){
                setCurrentCount(startingQty - finalCount)
                setDayCount(finalDay)
            }else{
                let current = (startingQty - finalCount)
                let lastSigTabs = line[0] * line[1]
                let ultimateDay = finalDay + (current / lastSigTabs)
                setDayCount(ultimateDay)
                setCurrentCount(0)
            }
            
        }
        
        
        
    }
    

    const [currentCount, setCurrentCount] = useState(startingQty)

    

    // let takenTabs = 0
    

    // const handleQty = (e) => {
    //     const value = parseInt(e.target.value)
    //     setStartingQty(value)
    //     setTabletsLeft(value)    
    // }

    // const [tabletsLeft, setTabletsLeft] = useState(startingQty)





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
                <div><TaperLine addToSig = {addToSig} addLastLine={addLastLine}/></div>
            </div>

            <p>
            {/* <button onClick={handleAddLine}>Add Line</button> */}
            <button onClick={handleCalculateTaper}>Calculate</button>
            <button onClick={resetSig}>Reset</button>
            </p>

            <p style = {{fontWeight: "bold"}}>{currentCount} tablets left</p>

            <p style = {{fontWeight: "bold"}}>Day Supply: {dayCount}</p>
            </div>

        </div>
    )
}

export default DaySupp