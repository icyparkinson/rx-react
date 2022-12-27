import React, { useState } from "react"

const Most = () => {

    const [showItem, setShowItem] = useState({
        tots: false,
        peds: false,
        adults: false,
        jj: false

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
            <p></p>
            <span onClick= {handleShowItem} name = "tots" style = {itemStyle}>6mo - 4yo {showItem.tots === true ? "▾" : "▸"}</span>
            <span onClick= {handleShowItem} name = "peds" style = {itemStyle}>5yo - 11yo {showItem.peds === true ? "▾" : "▸"}</span>
            <span onClick= {handleShowItem} name = "adults" style = {itemStyle}>12+ {showItem.adults === true ? "▾" : "▸"}</span>
            <span onClick= {handleShowItem} name = "jj" style = {itemStyle}>18+ & J&J {showItem.jj === true ? "▾" : "▸"}</span>

            {showItem.tots && <Tots />}
            {showItem.peds && <Peds />}            
            {showItem.adults && <Adults />}            
            {showItem.jj && <JJ />}
        </section>

    )

}

const itemStyle = {
    // textDecoration: "underline",
    cursor: "pointer",
    margin: "20px",
    color: "rgb(39	91	109)"
}


const Tots = () => {
    return(
        <section>
            <p></p>
            <img src="images/most_totsbiv.png" alt = "Tots" width="60%"/>
        </section>
    )
}

const Peds = () => {
    return(
        <section>
            <p></p>
            <img src="images/most_5biv.png" alt = "Fives" width="60%"/>
            <br></br>
            <img src="images/most_pedsbiv.png" alt = "Peds" width="60%"/>
        </section>
    )
}

const Adults = () => {
    return(
        <section>
            <p></p>
            <img src="images/most_adultsbiv.png" alt = "Adults" width="60%"/>
        </section>
    )
}

const JJ = () => {
    return(
        <section>
            <p></p>
            <img src="images/most_jjbiv.png" alt = "J&J" width="60%"/>
        </section>
    )
}

export default Most