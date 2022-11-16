import React, { useState } from "react"
import Line from "../../ui/Line"

const Diabetes = () => {


    const [showItem, setShowItem] = useState({
        insulinsTable: false,
        detailed: false,
        lancetsOnly: false,
        stripsOnly: false,
    })

    const handleShowItem = (e) => {
        let title = e.target.getAttribute("name")
        let status = showItem[title]
        setShowItem({
            ...showItem, [title]: !status
        })
    }

    return(
        <>
        <span onClick= {handleShowItem} name = "insulinsTable" style = {itemStyle}>Insulin Package/Exp {showItem.insulinsTable === true ? "▾" : "▸"}</span>
        <span onClick= {handleShowItem} name = "detailed" style = {itemStyle}>Insulin Types {showItem.detailed === true ? "▾" : "▸"}</span>
        <p></p>
        <span onClick= {handleShowItem} name = "lancetsOnly" style = {itemStyle}>Lancets {showItem.lancetsOnly === true ? "▾" : "▸"}</span>
        <span onClick= {handleShowItem} name = "stripsOnly" style = {itemStyle}>Strips {showItem.stripsOnly === true ? "▾" : "▸"}</span>
        <span style = {itemStyle}><a href="images/diabetes/blood-glucose-meter-compatibility-with-lancets.pdf" target="_blank">Compatibility PDF</a></span>

        {showItem.insulinsTable === true ? <Insulin /> : null } 
        {showItem.detailed === true ? <Detailed /> : null } 
        {showItem.lancetsOnly === true ? <LancetsOnly /> : null } 
        {showItem.stripsOnly === true ? <StripsOnly /> : null } 


        </>
    )

}


const Insulin = () => {
    return(
        <section>
            <p></p>
            <img src="images/diabetes/insulins.png" width="80%"/>
        </section>
    )
}

const Detailed = () => {
    return(
        <section>
            <p></p>
            <img src="images/diabetes/insulins_detailed.png" width="80%"/>
        </section>
    )
}

const LancetsOnly = () => {
    return(
        <section>
            <p></p>
            <img src="images/diabetes/lancets.png" width="80%"/>
        </section>
    )
}

const StripsOnly = () => {
    return(
        <section>
            <p></p>
            <img src="images/diabetes/test_strips.png" width="80%"/>
        </section>
    )
}

const Compatibility = () => {
    return(
        <section>
            <p></p>
        </section>
    )
}


const itemStyle = {
    // textDecoration: "underline",
    cursor: "pointer",
    margin: "20px"
}

export default Diabetes