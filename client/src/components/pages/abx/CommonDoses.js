import React, { useState } from "react"

const CommonDoses = ({handleMaxDose}) => {
    return(

    <section style = {{display: "flex", padding: "5px", margin: "20px", flexDirection: "column", lineHeight: "25px"}}>
    <p style = {{textDecoration: "underline"}}>Common Dose Limits: (Select one)</p>
    <span className="hover" onClick = {handleMaxDose}>Amox and Augmentin ES: 90 mg/kg</span><br />
    <span className="hover" onClick = {handleMaxDose}>Augmentin: 45 mg/kg</span><br />
    <span className="hover" onClick = {handleMaxDose}>Azith: 12 mg/kg</span><br />
    <span className="hover" onClick = {handleMaxDose}>Cefdinir: 14 mg/kg</span><br />
    <span className="hover" onClick = {handleMaxDose}>Cephalexin: 100 mg/kg</span>
    </section>
    )
}


const hoverStyle = {
    cursor: "pointer",


    "&:hover": {
      color: "red"
    },
}

export default CommonDoses