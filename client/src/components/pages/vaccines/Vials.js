import React, { useState } from "react"

const Vials = () => {

    const [showV1, setShowV1] = useState(false)
    const handleShowV1 = () => {
        setShowV1((prevState) => !prevState)
    }

    const [showV2, setShowV2] = useState(false)
    const handleShowV2 = () => {
        setShowV2((prevState) => !prevState)
    }

    const [showV3, setShowV3] = useState(false)
    const handleShowV3 = () => {
        setShowV3((prevState) => !prevState)
    }


    return (
        <section>
            <p></p>
            <span onClick= {handleShowV1} style = {itemStyle}>Unpunctured {showV1 === true ? "▾" : "▸"}</span>
            <span onClick= {handleShowV2} style = {itemStyle}>Punctured {showV2 === true ? "▾" : "▸"}</span>
            <span onClick= {handleShowV3} style = {itemStyle}>Expiration Links {showV3 === true ? "▾" : "▸"}</span>



            {showV1 && <V1 />}
            
            {showV2 && <V2 />}            
            
            {showV3 && <V3 />}            
            
        </section>

    )

}

const itemStyle = {
    // textDecoration: "underline",
    cursor: "pointer",
    margin: "20px",
    color: "blue"
}


const V1 = () => {
    return(
        <section>
            <p></p>
            <img src="images/unpunctured.png" alt = "Unpunctured Chart" width="80%"/>
        </section>
    )
}

const V2 = () => {
    return(
        <section>
            <p></p>
            <img src="images/punctured.png" alt = "Punctured Chart" width="80%"/>
        </section>
    )
}

const V3 = () => {
    return(
        <section>
            <ul style = {{listStyleType: "none" }}>
                <li><a href="https://lotexpiry.cvdvaccine.com/" target="_blank" rel="noreferrer">Pfizer</a></li>
                <li><a href="https://eua.modernatx.com/covid19vaccine-eua/providers/vial-lookup" target="_blank" rel="noreferrer" >Moderna</a></li>
                <li><a href="https://vaxcheck.jnj/" target="_blank" rel="noreferrer">J&J</a></li>
            </ul>
        </section>
    )
}

export default Vials