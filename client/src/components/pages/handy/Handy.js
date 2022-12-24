import React, { useState } from "react"
import Derm from "./Derm"
import Diabetes from "./Diabetes"
import Line from "../../ui/Line"

const Handy = () => {


    const [showItem, setShowItem] = useState({
        diabetes: false,
        derm: false
    })

    const handleShowItem = (e) => {
        let title = e.target.getAttribute("name")
        let status = showItem[title]
        setShowItem({
            ...showItem, [title]: !status
        })
    }


    return (
        <>

            <h1 onClick= {handleShowItem} name = "diabetes" style = {{textDecoration: "underline", cursor: "pointer", color: "#574D68"}}>Diabetes</h1>
            <div className = "item">{showItem.diabetes && <Diabetes />}</div>

            <Line width = "100%"/>
            
            <h1 onClick= {handleShowItem} name = "derm" style = {{textDecoration: "underline", cursor: "pointer", color: "#574D68"}}>Dermatology</h1>
            <div className = "item">{showItem.derm && <Derm />}</div>

        </>

    )

}

export default Handy