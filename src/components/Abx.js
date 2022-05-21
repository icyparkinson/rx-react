import React, { useState } from "react"

const Abx = () => {
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

    const inputW = {
        width: "50px",
        margin: "5px"
    }


    return(
        <div>
            <h1>Calculate Child's Minimum Weight</h1>
            <section>
                
                <p>Max dose/day: <input style = {inputW} onChange = {handleMaxDose}></input>mg/kg</p>
                <p> Taking<input type = "number" style = {inputW} placeholder = "vol" onChange = {handleVolume}></input>mL
                    at<input type = "number" style = {inputW}  placeholder = "mg" onChange = {handleStrength}></input> /
                    <input type = "number" style = {inputW}  placeholder = "mL" onChange = {handleStrength2}></input>mg/mL 
                    <input type = "number" style = {inputW} placeholder = "freq" onChange = {handleFreq}></input>times per day.
                </p>
                <p>Total dose prescribed per day: {dosePrescribed()} mg</p>
                <p style = {{fontWeight: "bold"}}>Child should weigh at least: {childWeight()} lbs</p>
                {console.log(dosePrescribed())}
            </section>

            <section style= {{borderTop: "2px solid #574D68", height: "15px"}}></section>

            <section>
                <h1>Calculate Per Dose</h1>
                
            </section>

        </div>
        
    )

}

export default Abx