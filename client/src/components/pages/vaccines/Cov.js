import React from "react"

import Imm from "./Imm"
import Most from "./Most"
import Vials from "./Vials"

import useShowItem from "./useShowItem"

const Cov = () => {

    const [showItem, handleShowItem] = useShowItem({
        most: false,
        imm: false,
        vials: false
    })

    return(
        <section>
            <span onClick= {handleShowItem} name = "most" style = {mostStyle}>Most People {showItem.most === true ? "▾" : "▸"}</span>
            <span onClick= {handleShowItem} name = "imm" style = {immStyle}>Immunocompromised {showItem.imm === true ? "▾" : "▸"}</span>
            <span onClick= {handleShowItem} name = "vials" style = {vialStyle}>Vials {showItem.vials === true ? "▾" : "▸"}</span>

            {showItem.most && <Most />}
            {showItem.imm && <Imm />}
            {showItem.vials && <Vials />}
            
        </section>
    )
}

const mostStyle = {
    cursor: "pointer",
    margin: "20px",
    color: "rgb(39	91	109)"
}

const immStyle = {
    cursor: "pointer",
    margin: "20px",
    color: "rgb(165	118	40)"
}

const vialStyle = {
    cursor: "pointer",
    margin: "20px",
    color: "blue"
}

export default Cov