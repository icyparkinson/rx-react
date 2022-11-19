import React, { useState } from "react"

const Handy = () => {


    const [showItem, setShowItem] = useState({
        diabetes: false
    })

    const handleShowItem = (e) => {
        let title = e.target.getAttribute("name")
        let status = showItem[title]
        setShowItem({
            ...showItem, [title]: !status
        })
    }


    return (
        <section>

            <h1 onClick= {handleShowItem} name = "diabetes" style = {{textDecoration: "underline", cursor: "pointer", color: "#574D68"}}>Diabetes</h1>
            <div className = "item">{showItem.diabetes === true ? <Diabetes /> : null }</div>

        </section>

    )

}

const itemStyle = {
    // textDecoration: "underline",
    cursor: "pointer",
    margin: "20px"
}


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


export default Handy