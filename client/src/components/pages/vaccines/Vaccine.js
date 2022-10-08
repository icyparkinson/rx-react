import React, { useState } from "react"
import Imm from "./Imm"
import Most from "./Most"
import Vials from "./Vials"
import Pneum from "./Pneum"


const Vaccine = () => {

    const [showCov, setShowCov] = useState(false)
    const handleShowCov = () => {
        setShowCov((prevState) => !prevState)
    }
    

    const [showPneum, setShowPneum] = useState(false)
    const handleShowPneum = () => {
        setShowPneum((prevState) => !prevState)
    }


    return(
        <div>
            <h1 onClick= {handleShowPneum} style = {{textDecoration: "underline", cursor: "pointer", color: "#574D68"}}>Pneumonia Guidelines</h1>
            <p>{showPneum === true ? <Pneum /> : null }</p>

            <section style= {{borderTop: "2px solid #574D68", height: "15px"}}></section>

            <h1 onClick= {handleShowCov} style = {{textDecoration: "underline", cursor: "pointer", color: "#574D68"}}>Covid-19 Guidelines</h1>
            <p>{showCov === true ? <Cov /> : null }</p>

            <section style= {{borderTop: "2px solid #574D68", height: "15px"}}></section>

            <h1><a href="images/vivotifcap.pdf">Vivotif (old)</a> || <a href = "https://vivotif.com/downloads/VIVOTIF_CLING-Z.pdf" target = "_blank" style = {{color: "574D68"}}>Vivotif (new)</a></h1>



            
            
            {/* <iframe title = "pneumonia" style = {{width: "95%", height: "750px"}}src="https://doh.wa.gov/sites/default/files/2022-05/348-875-AdultPCVRecommendations.pdf?uid=6282ca13dd8fc"></iframe> */}
        </div>
    )
}

const Cov = () => {

    const [showImm, setShowImm] = useState(false)
    const handleShowImm = () => {
        setShowImm((prevState) => !prevState)
    }

    const [showMost, setShowMost] = useState(false)
    const handleShowMost = () => {
        setShowMost((prevState) => !prevState)
    }

    const [showVials, setShowVials] = useState(false)
    const handleShowVials = () => {
        setShowVials((prevState) => !prevState)
    }

    return(
        <section>
            <span onClick= {handleShowMost} style = {mostStyle}>Most People {showMost === true ? "▾" : "▸"}</span>
            <span onClick= {handleShowImm} style = {immStyle}>Immunocompromised {showImm === true ? "▾" : "▸"}</span>
            <span onClick= {handleShowVials} style = {vialStyle}>Vials {showVials === true ? "▾" : "▸"}</span>


            {showMost === true ? <Most /> : null }
            {showImm === true ? <Imm /> : null }
            {showVials === true ? <Vials /> : null }
            
        </section>
    )
}

const mostStyle = {
    cursor: "pointer",
    margin: "20px",
    color: "rgb(39	91	109)"
}

const immStyle = {
    cursor: "pointer",
    margin: "20px",
    color: "rgb(165	118	40)"
}

const vialStyle = {
    cursor: "pointer",
    margin: "20px",
    color: "blue"
}


export default Vaccine