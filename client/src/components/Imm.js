import React, { useState } from "react"

const Imm = () => {

    const [showTots, setShowTots] = useState(false)
    const handleShowTots = () => {
        setShowTots((prevState) => !prevState)
    }

    const [showPeds, setShowPeds] = useState(false)
    const handleShowPeds = () => {
        setShowPeds((prevState) => !prevState)
    }

    const [showAdults, setShowAdults] = useState(false)
    const handleShowAdults = () => {
        setShowAdults((prevState) => !prevState)
    }

    const [showJJ, setShowJJ] = useState(false)
    const handleShowJJ = () => {
        setShowJJ((prevState) => !prevState)
    }


    return (
        <section>
            <p></p>
            <span onClick= {handleShowTots} style = {itemStyle}>6mo - 4yo {showTots === true ? "▾" : "▸"}</span>
            <span onClick= {handleShowPeds} style = {itemStyle}>5yo - 11yo {showPeds === true ? "▾" : "▸"}</span>
            <span onClick= {handleShowAdults} style = {itemStyle}>12+ {showAdults === true ? "▾" : "▸"}</span>
            <span onClick= {handleShowJJ} style = {itemStyle}>18+ & J&J {showJJ === true ? "▾" : "▸"}</span>



            {showTots === true ? <Tots /> : null }
            
            {showPeds === true ? <Peds /> : null }            
            
            {showAdults === true ? <Adults /> : null }            
            
            {showJJ === true ? <JJ /> : null }
        </section>

    )

}

const itemStyle = {
    // textDecoration: "underline",
    cursor: "pointer",
    margin: "20px",
    color: "rgb(165	118	40)"
}


const Tots = () => {
    return(
        <section>
            <p></p>
            <p><img src="images/imm_tots.png" width="50%"/></p>

        </section>
    )
}

const Peds = () => {
    return(
        <section>
            <p></p>
            <p><img src="images/imm_peds.png" width="50%"/></p>
            

        </section>
    )
}

const Adults = () => {
    return(
        <section>
            <p></p>
            <p><img src="images/imm_adults.png" width="50%"/></p>
            
        </section>
    )
}

const JJ = () => {
    return(
        <section>
            <p></p>
            <p><img src="images/imm_jj.png" width="50%"/></p>
        </section>
    )
}

export default Imm