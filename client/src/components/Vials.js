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
            <span onClick= {handleShowV1} style = {itemStyle}>Unpunctured</span>
            <span onClick= {handleShowV2} style = {itemStyle}>Punctured</span>
            <span onClick= {handleShowV3} style = {itemStyle}>Expiration Links</span>



            {showV1 === true ? <V1 /> : null }
            
            {showV2 === true ? <V2 /> : null }            
            
            {showV3 === true ? <V3 /> : null }            
            
        </section>

    )

}

const itemStyle = {
    textDecoration: "underline",
    cursor: "pointer",
    margin: "20px"
}


const V1 = () => {
    return(
        <section>
            <p></p>
            <img src="images/unpunctured.png" width="80%"/>
        </section>
    )
}

const V2 = () => {
    return(
        <section>
            <p></p>
            <img src="images/punctured.png" width="80%"/>
        </section>
    )
}

const V3 = () => {
    return(
        <section>
            <ul>
                <li><a href="https://www.fda.gov/emergency-preparedness-and-response/coronavirus-disease-2019-covid-19/comirnaty-and-pfizer-biontech-covid-19-vaccine" target="_blank">Pfizer</a></li>
                <li><a href="https://eua.modernatx.com/covid19vaccine-eua/providers/vial-lookup" target="_blank">Moderna</a></li>
                <li><a href="https://vaxcheck.jnj/" target="_blank">J&J</a></li>
            </ul>
        </section>
    )
}

export default Vials