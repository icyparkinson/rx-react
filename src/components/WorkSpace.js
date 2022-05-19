import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import DayCalc from "./DayCalc"
import Vaccine from "./Vaccine"
import Abx from "./Abx"


const WorkSpace = () => {
    return(
        <div style = {{margin: "100 auto"}}>
            <section style = {workSpaceStyle}>
                <Routes>
                <Route exact path = "/" element = {<Home/>} />
                <Route path = "/daycalc" element = {<DayCalc/>} />
                <Route path = "/vaccine" element = {<Vaccine />} />
                <Route path = "/abx" element = {<Abx />} />
                </Routes> 
            </section>
        </div>
    )
}

const workSpaceStyle = {
    textAlign: "center",
    border: "1px solid black",
    width: "80%",
    height: "500px",
    margin: "50px auto",
    backgroundColor: "#aef6c7"
}

export default WorkSpace