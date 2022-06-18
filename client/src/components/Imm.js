import React, { useState } from "react"

const Imm = () => {

    const [showP1, setShowP1] = useState(false)
    const handleShowP1 = () => {
        setShowP1((prevState) => !prevState)
    }

    const [showP2, setShowP2] = useState(false)
    const handleShowP2 = () => {
        setShowP2((prevState) => !prevState)
    }

    const [showM1, setShowM1] = useState(false)
    const handleShowM1 = () => {
        setShowM1((prevState) => !prevState)
    }

    const [showJ1, setShowJ1] = useState(false)
    const handleShowJ1 = () => {
        setShowJ1((prevState) => !prevState)
    }


    return (
        <section>
            <p></p>
            <span onClick= {handleShowP1} style = {itemStyle}>Pfizer 5-11 {showP1 === true ? "▾" : "▸"}</span>
            <span onClick= {handleShowP2} style = {itemStyle}>Pfizer 12+ {showP2 === true ? "▾" : "▸"}</span>
            <span onClick= {handleShowM1} style = {itemStyle}>Moderna {showM1 === true ? "▾" : "▸"}</span>
            <span onClick= {handleShowJ1} style = {itemStyle}>J&J {showJ1 === true ? "▾" : "▸"}</span>



            {showP1 === true ? <P1 /> : null }
            
            {showP2 === true ? <P2 /> : null }            
            
            {showM1 === true ? <M1 /> : null }            
            
            {showJ1 === true ? <J1 /> : null }
        </section>

    )

}

const itemStyle = {
    // textDecoration: "underline",
    cursor: "pointer",
    margin: "20px"
}


const P1 = () => {
    return(
        <section>
            <p></p>
            <p><img src="images/imm_pfizer_ped2.png" width="50%"/></p>
            <p><img src="images/imm_pfizer_ped.png" width="50%"/></p>

        </section>
    )
}

const P2 = () => {
    return(
        <section>
            <p></p>
            <p><img src="images/imm_pfizer2.png" width="50%"/></p>
            <p><img src="images/imm_pfizer.png" width="40%"/></p>
            

        </section>
    )
}

const M1 = () => {
    return(
        <section>
            <p></p>
            <p><img src="images/imm_moderna2.png" width="50%"/></p>
            <p><img src="images/imm_moderna.png" width="40%"/></p>
            
        </section>
    )
}

const J1 = () => {
    return(
        <section>
            <p></p>
            <p><img src="images/imm_jj2.png" width="50%"/></p>
            <p><img src="images/imm_jj.png" width="60%"/></p>
        </section>
    )
}

export default Imm