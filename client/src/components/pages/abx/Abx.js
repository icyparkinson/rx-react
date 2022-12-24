import React, { useState } from "react"

import CommonDoses from "./CommonDoses"
import Line from "../../ui/Line"


const Abx = () => {

    const [state, setState] = useState({
        maxDose: "",
        vol: "",
        mg: "",
        mL: "",
        freq: "",
        startmL: "",
        startmg: "",
        startVol: "",
        endmg: "",
        endmL: ""
    })

    const [maxDose, setMaxDose] = useState("")

    const handleChange = (e) => {
        const value = e.target.value;
        setState({
            ...state, [e.target.name]: value
        });
      }

    ///////////////////////////////////
    /////CALCULATING CHILD WEIGHT/////
    ///////////////////////////////////

    const dosePrescribed = () => {
        return state.vol * (state.mg / state.mL) * state.freq
    }

    //This does the math for calculating child weight in lbs
    const childWeight = (a,b) => {
        return (dosePrescribed() / maxDose * 2.2).toFixed(1)
    }
    

    ///////////////////////////////////
    //CALCULATING STRENGTH CONVERSION//
    ///////////////////////////////////

    const totalDose = () => {
        return state.startmL * (state.startmg / state.startVol)
    }

    const convertedDose = () => {
        return (totalDose()) * state.endmL / state.endmg
    }


    ///////////////////////////////////
    //EXTRA STUFF//
    ///////////////////////////////////

    const [showList, setShowList] = useState(false)
    const handleList = () => {
        setShowList((prevState) => !prevState)
    }

    const inputW = {
        width: "50px",
        margin: "5px"
    }

    const handleMaxInput = ( {target} ) => {
        const maxInput = target.value
        setMaxDose(maxInput)
    }

    const handleMaxDose = (e) => {
        let line = e.target.firstChild.data
        let dose = line.split(":")[1]
        let num = parseInt(dose)
        setMaxDose(num)

    }


    return(
        <div>
            <h1>Calculate Child's Minimum Weight</h1>

            <section style = {{display: "flex", justifyContent: "center", flexDirection: "column"}}>
                <section style={{margin: "0 20px"}}>
                    <p>Max dose/day:    <input style = {inputW} name = "maxDose" value = {maxDose} onChange = {handleMaxInput}></input>mg/kg</p>
                    <p> Taking          <input type = "number" style = {inputW} name = "vol" value = {state.vol} placeholder = "vol" onChange = {handleChange}></input>     mL
                        at              <input type = "number" style = {inputW}  name = "mg" value = {state.mg} placeholder = "mg" onChange = {handleChange}></input>       /
                                        <input type = "number" style = {inputW}  name = "mL" value = {state.mL} placeholder = "mL" onChange = {handleChange}></input>       mg/mL 
                                        <input type = "number" style = {inputW} name = "freq" value = {state.freq} placeholder = "freq" onChange = {handleChange}></input>  times per day.
                    </p>
                    <p>Total dose prescribed per day: {dosePrescribed()} mg</p>
                    <p style = {{fontWeight: "bold"}}>Child should weigh at least: {childWeight()} lbs</p>
                </section>

                <p onClick= {handleList} style = {{textDecoration: "underline", cursor: "pointer"}}>Click to {showList === true ? "hide" : "show" } Notes</p>
                {showList && <CommonDoses handleMaxDose = {handleMaxDose}/>}
                
            </section>

            <Line width = "100%"/>

                <h1>Calculate Strength Conversions</h1>
            <section>
                <p>Starting with: 
                   <input type = "number" style = {inputW} name = "startmL" value = {state.startmL} placeholder = "mL" onChange={handleChange}></input>mL
                of <input type = "number" style = {inputW} name = "startmg" value = {state.startmg} placeholder = "mg" onChange = {handleChange}></input>
                 / <input type = "number" style = {inputW} name = "startVol" value = {state.startVol} placeholder = "mL" onChange = {handleChange}></input>mg/mL</p>
                <p>(Equal to {totalDose()}mg)</p>
                <p>Converting to: 
                    <input type = "number" style = {inputW} name = "endmg" value = {state.endmg} placeholder="mg" onChange = {handleChange}></input> / 
                    <input type = "number" style = {inputW} name = "endmL" value = {state.endmL} placeholder="mL" onChange = {handleChange}></input>mg/mL</p>
                <p style = {{fontWeight: "bold"}}>Equivalent to: {convertedDose()} mL</p>
            </section>

        </div>
        
    )

}

export default Abx
