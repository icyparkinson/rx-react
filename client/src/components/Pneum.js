import React, { useState } from "react"

const Pneum = () => {

    const [showPn, setShowPn] = useState(false)
    const handleShowPn = () => {
        setShowPn((prevState) => !prevState)
    }


    return (
        <section>
            <span onClick= {handleShowPn} style = {itemStyle}>Algorithm</span>
            <span style = {itemStyle}><a href="https://www.cdc.gov/vaccines/vpd/pneumo/downloads/pneumo-vaccine-timing.pdf" target="_blank">Timeline Link</a></span>
                   
            
            {showPn === true ? <Pn /> : null }            
            
        </section>

    )

}

const itemStyle = {
    textDecoration: "underline",
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


export default Pneum