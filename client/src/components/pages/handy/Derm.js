import React, { useState } from "react"
import Line from "../../ui/Line"

const Derm = () => {


    const [showItem, setShowItem] = useState({
        potency: false
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
        <span style = {itemStyle}><a href="images/steroid_potencies.pdf" target="_blank">Steroid Potency PDF</a></span>


        </>
    )

}



const itemStyle = {
    // textDecoration: "underline",
    cursor: "pointer",
    margin: "20px"
}

export default Derm