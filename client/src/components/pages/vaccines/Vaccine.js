import React, { useState } from "react"
import Pneum from "./Pneum"
import Cov from "./Cov"
import Line from "../../ui/Line"



const Vaccine = () => {

    const [showItem, setShowItem] = useState({
        pneum: false,
        cov: false
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
            <h1 onClick= {handleShowItem} name = "pneum" style = {{textDecoration: "underline", cursor: "pointer", color: "#574D68"}}>Pneumonia Guidelines</h1>
            <div className = "item">{showItem.pneum === true ? <Pneum /> : null }</div>

            <Line width = "100%"/>

            <h1 onClick= {handleShowItem} name = "cov" style = {{textDecoration: "underline", cursor: "pointer", color: "#574D68"}}>Covid-19 Guidelines (last update: 12/13)</h1>
            <div className = "item">{showItem.cov === true ? <Cov handleShowItem = {handleShowItem}/> : null }</div>

            <Line width = "100%"/>

            <h1><a href="images/vivotifcap.pdf">Vivotif (old)</a> || <a href = "https://vivotif.com/downloads/VIVOTIF_CLING-Z.pdf" target = "_blank" rel = "noreferrer" style = {{color: "574D68"}}>Vivotif (new)</a></h1>            
            
        </>
    )
}


export default Vaccine