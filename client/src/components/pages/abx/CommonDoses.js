import React, { useState } from "react"

const CommonDoses = () => {
    return(

    <section style = {{display: "flex", padding: "5px", margin: "20px", flexDirection: "column", lineHeight: "25px"}}>
    <p style = {{textDecoration: "underline"}}>Common Dose Limits</p>
    <span>Amox and Augmentin ES: 90 mg/kg</span><br />
    <span>Augmentin: 45 mg/kg</span><br />
    <span>Azith: 12 mg/kg</span><br />
    <span>Cefdinir: 14 mg/kg</span><br />
    <span>Cephalexin: 100 mg/kg</span>
    </section>
    )
}

export default CommonDoses