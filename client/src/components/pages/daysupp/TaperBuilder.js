import React, { useReducer } from "react"
import styled from "styled-components"
import TaperLine from "./TaperLine"
import EndTaperLine from "./EndTaperLine"
import TaperAnswer from "./TaperAnswer"

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
const BackButton = styled.button`
    padding: 2px 8px;
    margin: 0 5px;
    background-color: blue;
    color: white;
    border-radius: 15px;
    :hover{
        background-color: darkred;
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

const ACTIONS = {
    SET_STARTING_QTY: "set-starting-qty",
    SET_DRUG_FORM: "set-drug-form",
    ADD_LINE: "add-line",
    ADD_LAST_LINE: "add-last-line",
    DELETE_LINE: "delete-line",
    CALCULATE_TAPER: "calculate-taper",
    CALCULATE_FURTHER: "calculate-further",
    RESET: "reset",
    BACK: "back"
}

const initialState={
    drugForm: "tablet",
    startingQty: 0,
    currentCount: 0,
    sigList: [],
    dayCount: 0,
    displayTaperLine: true,
    displayLastLine: true,
    displayCalculate: true,
    displayTaperAnswer: false,
}

const taperReducer = (state, action) => {
    switch(action.type) {
        
        case ACTIONS.SET_STARTING_QTY:
            return{
                ...state,
                startingQty: action.payload.startingQty
            }

        case ACTIONS.SET_DRUG_FORM:
            return{
                ...state,
                drugForm: action.payload.drugForm
            }

        case ACTIONS.ADD_LINE: 
            return {
                ...state,
                sigList: [
                    ...state.sigList,
                    newSigLine(action.payload.qty, action.payload.freq, action.payload.days)
                ]
            }

        case ACTIONS.ADD_LAST_LINE:
            return {
                ...state,
                sigList: [
                    ...state.sigList,
                    newLastLine(action.payload.qty, action.payload.freq)
                ],
                displayLastLine: false,
                displayTaperLine: false
            }

        case ACTIONS.DELETE_LINE:
            return {
                ...state,
                sigList: state.sigList.filter(line => line.id !== action.payload.id)
            }
        
        case ACTIONS.CALCULATE_TAPER:

            let finalCount = 0
            let finalDay = 0
        
            for (let i = 0; i < state.sigList.length; i++){
                let line = state.sigList[i].values
                if (line.length === 3){
                    let tabsInADay = line[0] * line[1] * line[2]
                    finalCount += tabsInADay
                    finalDay += line[2]
                    
                }else{
                    let current = (state.startingQty - finalCount)
                    let lastSigTabs = line[0] * line[1]
                    let ultimateDay = finalDay + (current / lastSigTabs)
    
                    if (current <= 0){
                        return({
                            ...state,
                            dayCount: `Error, not enough ${state.drugForm}`,
                            displayTaperAnswer: true,
                            displayTaperLine: false,
                            displayLastLine: false
                        })
                    }else{
                        return({
                            ...state,
                            dayCount: ultimateDay.toFixed(2),
                            currentCount: 0,
                            displayTaperAnswer: true,
                            displayTaperLine: false,
                            displayLastLine: false
                        })
                    }
                }   
            }
            
            return({
                    ...state,
                    currentCount: state.startingQty - finalCount,
                    dayCount: finalDay,
                    displayTaperAnswer: true,
                    displayTaperLine: false,
                    displayLastLine: false
                })

        case ACTIONS.CALCULATE_FURTHER:
            let sig = state.sigList
            let lastSig = sig[sig.length-1].values[0] * sig[sig.length-1].values[1]
            let furtherDayAnswer = state.dayCount + (state.currentCount / lastSig)
            return {
                ...state,
                currentCount: 0,
                dayCount: furtherDayAnswer.toFixed(2)
            }

        case ACTIONS.RESET:
            return initialState
        
        case ACTIONS.BACK:
            return{
                ...state,
                displayTaperLine: true,
                displayLastLine: true,
                displayCalculate: true,
                displayTaperAnswer: false,
            }

        default: 
            return state
    }
}

function newSigLine(qty, freq, days){
    return {
        id: Date.now(),
        values: [parseFloat(qty), parseFloat(freq), parseFloat(days)]
    }
}

function newLastLine(qty, freq){
    return {
        id: Date.now(),
        values: [parseFloat(qty), parseFloat(freq)]
    }
}



function TaperBuilder(){

    const [state, dispatch] = useReducer(taperReducer, initialState)        

        const displaySigList = state.sigList.map((sigLine, index) => {
            return(
                <SigBox key={sigLine.id} className="line" >
                    {index > 0 ? "Then take" : "Take" } {sigLine.values[0]} {state.drugForm}{sigLine.values[0] > 1 ? "s" : null} {index === 0 && "by mouth"} {sigLine.values[1]} time{sigLine.values[1] > 1 ? "s" : null} daily {sigLine.values.length === 3 ? `for ${sigLine.values[2]} day${sigLine.values[2] > 1 ? "s" : ""}` : "thereafter"}.
                    <button 
                    className="delete-btn"
                    onClick={() => deleteLine(sigLine.id)}
                    >
                    <i className="gg-trash trash-icon"></i>
                    </button>
                </SigBox>
            )
            
        })

        function handleStartingQty(event){
            dispatch({type: ACTIONS.SET_STARTING_QTY, payload: {startingQty: event.target.value}})
        }

        function handleDrugForm(event){
            dispatch({type: ACTIONS.SET_DRUG_FORM, payload: {drugForm: event.target.value}})
        }
    
        function addToSig(qty, freq, days){
            if (parseFloat(qty) && parseFloat(freq) && parseFloat(days)){
                dispatch({type: ACTIONS.ADD_LINE, payload: {qty: qty, freq: freq, days: days}})
            }
        }

        function deleteLine(id){
            dispatch({type: ACTIONS.DELETE_LINE, payload: {id}})
        }
    
        function addLastLine(qty, freq){
            if (parseFloat(qty) && parseFloat(freq) && state.sigList[state.sigList.length-1].values.length !== 2) {
                dispatch({type: ACTIONS.ADD_LAST_LINE, payload: {qty: qty, freq: freq}})
            }
        }

        function backSig(){
            dispatch({type: ACTIONS.BACK})
        }
    
        function resetSig(){
            dispatch({type: ACTIONS.RESET})
        }

        function handleCalculateTaper(){
            if (state.sigList.length > 0){
                dispatch({type: ACTIONS.CALCULATE_TAPER})
            }
        }

        function calculateFurther(){
            if (state.currentCount > 0){
               dispatch({type: ACTIONS.CALCULATE_FURTHER})
            }
        }
    
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
                    value = {state.startingQty}
                    placeholder = "qty" 
                    min = "0"
                    onChange = {handleStartingQty}
                    >
                    </input> 
                
                    <select 
                    id="drugForm"
                    value={state.drugForm}
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
                    {state.displayTaperLine && <div><TaperLine addToSig={addToSig} drugForm={state.drugForm}/></div>}
                    {state.displayLastLine && <div><EndTaperLine addLastLine={addLastLine} drugForm={state.drugForm}/></div>}
                </div>

                <p>
                {state.displayCalculate && <CalculateButton onClick={handleCalculateTaper}>Calculate</CalculateButton>}
                {state.displayTaperAnswer && <BackButton onClick={backSig}>Back</BackButton>}
                <ResetButton onClick={resetSig}>Reset</ResetButton>
                </p>

                {state.displayTaperAnswer && <TaperAnswer 
                    displayTaperAnswer={state.displayTaperAnswer} 
                    currentCount={state.currentCount}
                    drugForm={state.drugForm}
                    calculateFurther={calculateFurther}
                    dayCount={state.dayCount}
                    />
                }
            </div>
        </div>
    )
}

export default TaperBuilder