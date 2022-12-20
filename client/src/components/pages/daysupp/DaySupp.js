import React from "react"
import Line from "../../ui/Line"
import Injectables from "./Injectables"
import TaperBuilder from "./TaperBuilder"


const DaySupp = () => {

    return(
        <div style = {{marginBottom: "20px"}}>
            
            <Injectables />

            <Line width = "100%"/>

            <TaperBuilder />
        </div>
    )
}

export default DaySupp