import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import DayCalc from "./DayCalc"
import Vaccine from "./Vaccine"
import Abx from "./Abx"
import Notes from "./Notes"


const WorkSpace = () => {
    return(
        <div style = {{margin: "100 auto"}}>
            <section style = {workSpaceStyle}>
                <Routes>
                <Route exact path = "/" element = {<Home/>} />
                <Route path = "/daycalc" element = {<DayCalc/>} />
                <Route path = "/vaccine" element = {<Vaccine />} />
                <Route path = "/abx" element = {<Abx />} />
                <Route path = "/notes" element = {<Notes />} />
                </Routes> 
            </section>
        </div>
    )
}

const workSpaceStyle = {
    textAlign: "center",
    border: "1px solid black",
    width: "80%",
    height: "100%",
    margin: "50px auto",
    backgroundColor: "#aef6c7"
}

export default WorkSpace