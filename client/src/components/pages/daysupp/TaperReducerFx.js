export const ACTIONS = {
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

export const initialState={
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

export function taperReducer(state, action){
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
                            dayCount: `Error, need at least ${Math.abs(current) === 0 ? 
                                `1 more ${state.drugForm}` : 
                                `${Math.abs(current) +1} more ${state.drugForm}s`}`,
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