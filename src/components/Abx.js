import React, { useState } from "react"

const Abx = () => {
    ///////////////////////////////////
    /////CALCULATING CHILD WEIGHT/////
    ///////////////////////////////////

    //This pair takes care of the max dose/day input
    const [maxDoseInput, setMaxDoseInput] = useState("")

    const handleMaxDose = ( {target }) => {
        const maxDose = target.value
        setMaxDoseInput(Number(maxDose))
    }

    const [volInput, setVolInput] = useState("")

    const handleVolume = ({ target }) => {
        const volume = target.value
        setVolInput(volume)
    }

    const [strInput, setStrInput] = useState("")

    const handleStrength = ({ target }) => {
        const strength = target.value
        setStrInput(strength)
    }

    const [strInput2, setStrInput2] = useState("")

    const handleStrength2 = ({ target }) => {
        const strength2 = target.value
        setStrInput2(strength2)
    }

    const [freqInput, setFreqInput] = useState("")

    const handleFreq = ({ target }) => {
        const freq = target.value
        setFreqInput(freq)
    }

    const dosePrescribed = (a,b,c,d) => {
        return volInput * (strInput / strInput2) * freqInput
    }

    //This does the math for calculating child weight in lbs
    const childWeight = (a,b) => {
        return (dosePrescribed() / maxDoseInput * 2.2).toFixed(1)
    }
    

    ///////////////////////////////////
    //CALCULATING STRENGTH CONVERSION//
    ///////////////////////////////////


    const [startmL, setStartmL] = useState("")

    const handleStartmL = ({ target }) => {
        const startingmL = target.value
        setStartmL(startingmL)
    }
    
    const [startmg, setStartmg] = useState("")

    const handleStartmg = ({ target }) => {
        const startingmg = target.value
        setStartmg(startingmg)
    }

    const [startVol, setStartVol] = useState("")

    const handleStartVol = ({ target }) => {
        const startingVol = target.value
        setStartVol(startingVol)
    }

    const totalDose = (a,b,c) => {
        return startVol * (startmg / startmL)
    }

    const [endmg, setEndmg] = useState("")

    const handleEndmg = ({ target }) => {
        const endingmg = target.value
        setEndmg(endingmg)
    }

    const [endmL, setEndmL] = useState("")

    const handleEndmL = ({ target }) => {
        const endingmL = target.value
        setEndmL(endingmL)
    }

    const convertedDose = (a,b,c) => {
        return (totalDose()) * endmL / endmg
    }


    const inputW = {
        width: "50px",
        margin: "5px"
    }


    return(
        <div>
            <h1>Calculate Child's Minimum Weight</h1>

            <section style = {{display: "flex", justifyContent: "center", flexDirection: "column"}}>
                <section style={{margin: "0 20px"}}>
                    <p>Max dose/day: <input style = {inputW} onChange = {handleMaxDose}></input>mg/kg</p>
                    <p> Taking<input type = "number" style = {inputW} placeholder = "vol" onChange = {handleVolume}></input>mL
                        at<input type = "number" style = {inputW}  placeholder = "mg" onChange = {handleStrength}></input> /
                        <input type = "number" style = {inputW}  placeholder = "mL" onChange = {handleStrength2}></input>mg/mL 
                        <input type = "number" style = {inputW} placeholder = "freq" onChange = {handleFreq}></input>times per day.
                    </p>
                    <p>Total dose prescribed per day: {dosePrescribed()} mg</p>
                    <p style = {{fontWeight: "bold"}}>Child should weigh at least: {childWeight()} lbs</p>
                    {/* {console.log(dosePrescribed())} */}
                </section>
                <section style = {{display: "flex", padding: "5px", margin: "20px", flexDirection: "column", lineHeight: "25px"}}>
                    <p style = {{textDecoration: "underline"}}>Common Dose Limits</p>
                    <span>Amox and Augmentin ES: 90 mg/kg</span><br />
                    <span>Augmentin: 45 mg/kg</span><br />
                    <span>Azith: 12 mg/kg</span><br />
                    <span>Cefdinir: 14 mg/kg</span><br />
                    <span>Cephalexin: 100 mg/kg</span>
                </section>
            </section>

            <section style= {{borderTop: "2px solid #574D68", height: "15px"}}></section>

                <h1>Calculate Strength Conversions</h1>
            <section>
                <p>Starting with: 
                   <input type = "number" style = {inputW} placeholder = "mL" onChange={handleStartVol}></input>mL
                of <input type = "number" style = {inputW} placeholder = "mg" onChange = {handleStartmg}></input>
                 / <input type = "number" style = {inputW} placeholder = "mL" onChange = {handleStartmL}></input>mg/mL</p>
                <p>(Equal to {totalDose()}mg)</p>
                <p>Converting to: 
                    <input type = "number" style = {inputW} placeholder="mg" onChange = {handleEndmg}></input> / 
                    <input type = "number" style = {inputW} placeholder="mL" onChange = {handleEndmL}></input>mg/mL</p>
                <p style = {{fontWeight: "bold"}}>Equivalent to: {convertedDose()} mL</p>
            </section>

        </div>
        
    )

}

export default Abx