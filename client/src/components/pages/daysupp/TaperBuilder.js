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
            console.log(sigLine)
            return(
                <SigBox key={sigLine.id} className="line" >
                    {index > 0 ? "Then take" : "Take" } {sigLine.values[0]} {state.drugForm}{sigLine.values[0] > 1 ? "s" : null} {index === 0 && "by mouth"} {sigLine.values[1]} time{sigLine.values[1] > 1 ? "s" : null} daily {sigLine.values.length === 3 ? `for ${sigLine.values[2]} day${sigLine.values[2] > 1 ? "s" : ""}` : "thereafter"}.
                    <button 
                    className="delete-btn"
                    onClick={() => deleteLine(sigLine.id, index)}
                    >
                    <i className="gg-trash trash-icon"></i>
                    </button>
                </SigBox>
            )
        })

        const injectionSigList = state.sigList.map((sigLine, index) => {
            console.log(sigLine)
            return(
                <SigBox key={sigLine.id} className="line" >
                    {index > 0 ? "Then inject" : "Inject" } {sigLine.values[0]} mg under the skin daily {sigLine.values.length === 3 ? `for ${sigLine.values[2]} week${sigLine.values[2] > 1 ? "s" : ""}` : "thereafter"}.
                    <button 
                    className="delete-btn"
                    onClick={() => deleteLine(sigLine.id, index)}
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
            if (parseFloat(qty) && parseFloat(freq) && parseFloat(days) && state.canAddToSigList){
                dispatch({type: ACTIONS.ADD_LINE, payload: {qty: qty, freq: freq, days: days}})
            }
        }

        function deleteLine(id, index){
            dispatch({type: ACTIONS.DELETE_LINE, payload: {id: id, index: index}})   
        }
    
        function addLastLine(qty, freq){
            if (parseFloat(qty) && parseFloat(freq) && state.canAddToSigList) {
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
    

    return(
        <div>
        <h1>Tapering Sig Builder</h1>
            
            <div>
                <p>Starting quantity:<input 
                    type = "number" 
                    className="inputW"
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
                    disabled={state.disableDrugOptions}
                    >
                    <option value="tablet">tablet</option>
                    <option value="capsule">capsule</option>
                    <option value="injection">mL of victoza</option>
                    </select>
                
                </p>

                <div>
                    <p>Current sig:</p>
                    {state.drugForm === "injection" ? injectionSigList : displaySigList}
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