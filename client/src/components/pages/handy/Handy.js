import React, { useState } from "react"
import Diabetes from "./Diabetes"

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

export default Handy