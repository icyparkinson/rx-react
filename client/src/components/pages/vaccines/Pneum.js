import React, { useState } from "react"

const Pneum = () => {

    const [showPn, setShowPn] = useState(false)
    const handleShowPn = () => {
        setShowPn((prevState) => !prevState)
    }

    const [showUp, setShowUp] = useState(false)
    const handleShowUp = () => {
        setShowUp((prevState) => !prevState)
    }


    return (
        <section>
            <span onClick= {handleShowPn} style = {itemStyle}>Algorithm {showPn === true ? "▾" : "▸"}</span>
            <span style = {itemStyle}><a href="https://www.cdc.gov/vaccines/vpd/pneumo/downloads/pneumo-vaccine-timing.pdf" target="_blank">Timeline Link</a></span>
            <span onClick= {handleShowUp} style = {itemStyle}>1/27/22 Update {showUp === true ? "▾" : "▸"}</span>
                   
            
            {showPn && <Pn />} 
            {showUp && <Up />}              
            
        </section>

    )

}

const itemStyle = {
    // textDecoration: "underline",
    cursor: "pointer",
    margin: "20px"
}


const Pn = () => {
    return(
        <section>
            <p></p>
            <img src="images/pneumonia.png" width="80%"/>
        </section>
    )
}

const Up = () => {
    return(
        <section>
            <p></p>
            <img src="images/pneum_update.png" width = "80%"></img>
        </section>
    )
}


export default Pneum