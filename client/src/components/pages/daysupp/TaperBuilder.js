import React, { useReducer } from "react"
import styled from "styled-components"
import Button from "../../ui/Button"
import TaperLine from "./TaperLine"
import EndTaperLine from "./EndTaperLine"
import TaperAnswer from "./TaperAnswer"
import { taperReducer } from "./TaperReducerFx"
import { initialState } from "./TaperReducerFx"
import { ACTIONS } from "./TaperReducerFx"

const SigBox = styled.div`
    background-color: lightgray;
    margin: auto;
    width: 500px;
    padding: 3px;
`

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
                {state.displayCalculate && <Button text={"Calculate"} styleType={"calculate"} clickEvent={handleCalculateTaper} />}
                {state.displayTaperAnswer && <Button text={"Back"} styleType={"back"} clickEvent={backSig}/>}
                <Button text={"Reset"} styleType={"reset"} clickEvent={resetSig} />
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