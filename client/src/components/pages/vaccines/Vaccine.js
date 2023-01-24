import React from "react"
import Pneum from "./Pneum"
import Cov from "./Cov"
import Line from "../../ui/Line"
import useShowItem from "./useShowItem"



const Vaccine = () => {

    const [showItem, handleShowItem] = useShowItem({
        pneum: false,
        cov: false
    })


    return(
        <>
            <h1 onClick= {handleShowItem} name = "pneum" style = {{textDecoration: "underline", cursor: "pointer", color: "#574D68"}}>Pneumonia Guidelines</h1>
            <div className = "item">{showItem.pneum && <Pneum />}</div>

            <Line width = "100%"/>

            <h1 onClick= {handleShowItem} name = "cov" style = {{textDecoration: "underline", cursor: "pointer", color: "#574D68"}}>Covid-19 Guidelines (last update: 12/13)</h1>
            <div className = "item">{showItem.cov && <Cov handleShowItem = {handleShowItem}/>}</div>

            <Line width = "100%"/>

            <h1><a href="images/vivotifcap.pdf">Vivotif (old)</a> || <a href = "https://vivotif.com/downloads/VIVOTIF_CLING-Z.pdf" target = "_blank" rel = "noreferrer" style = {{color: "574D68"}}>Vivotif (new)</a></h1>            
            
        </>
    )
}


export default Vaccine