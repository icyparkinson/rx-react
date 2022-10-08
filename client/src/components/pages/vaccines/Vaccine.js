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
        <div>
            <h1 onClick= {handleShowItem} name = "pneum" style = {{textDecoration: "underline", cursor: "pointer", color: "#574D68"}}>Pneumonia Guidelines</h1>
            <p>{showItem.pneum === true ? <Pneum /> : null }</p>

            <Line width = "100%"/>

            <h1 onClick= {handleShowItem} name = "cov" style = {{textDecoration: "underline", cursor: "pointer", color: "#574D68"}}>Covid-19 Guidelines</h1>
            <p>{showItem.cov === true ? <Cov handleShowItem = {handleShowItem}/> : null }</p>

            <Line width = "100%"/>

            <h1><a href="images/vivotifcap.pdf">Vivotif (old)</a> || <a href = "https://vivotif.com/downloads/VIVOTIF_CLING-Z.pdf" target = "_blank" style = {{color: "574D68"}}>Vivotif (new)</a></h1>            
            
        </div>
    )
}


export default Vaccine