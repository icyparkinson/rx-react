import React, { useState } from "react"

const Abx = () => {
    //This pair takes care of the max dose/day input
    const [maxDoseInput, setMaxDoseInput] = useState("")

    const handleMaxDose = ( {target }) => {
        const maxDose = target.value
        setMaxDoseInput(Number(maxDose))
    }

    //This pair takes care of the total prescribed dose input
    const [dosePrescribedInput, setDosePrescribedInput] = useState("")

    const handleDosePrescribed = ({ target }) => {
        const dosePrescribed = target.value
        setDosePrescribedInput(Number(dosePrescribed))
    }

    //This does the math for calculating child weight in lbs
    const childWeight = (a,b) => {
        return (dosePrescribedInput / maxDoseInput * 2.2).toFixed(1)
    }


    return(
        <section>
            <h1>Calculate Per Day</h1>
            <p>Max dose/day: <input style = {{width: "40px"}} onChange = {handleMaxDose}></input> mg/kg</p>
            <p>Total dose prescribed per day: <input style = {{width: "40px"}} onChange = {handleDosePrescribed}></input> mg</p>
            <p style = {{fontWeight: "bold"}}>Child should weigh at least: {childWeight()} lbs</p>
        </section>
        
    )
}

export default Abx