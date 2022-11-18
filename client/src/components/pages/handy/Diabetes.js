import React, { useState } from "react"

const Diabetes = () => {

    const [showIn, setShowIn] = useState(false)
    const handleShowIn = () => {
        setShowIn((prevState) => !prevState)
    }

    return(
        <>
        <span onClick= {handleShowIn} style = {itemStyle}>Insulins Table {showIn === true ? "▾" : "▸"}</span>

        {showIn === true ? <Insulin /> : null } 

        </>
    )

}


const Insulin = () => {
    return(
        <section>
            <p></p>
            <img src="images/insulins.png" width="80%"/>
        </section>
    )
}


const itemStyle = {
    // textDecoration: "underline",
    cursor: "pointer",
    margin: "20px"
}

export default Diabetes