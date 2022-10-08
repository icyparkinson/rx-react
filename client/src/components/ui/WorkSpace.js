import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import DayCalc from "../pages/daycalc/DayCalc"
import Vaccine from "../pages/vaccines/Vaccine"
import Abx from "../pages/abx/Abx"
import Notes from "../pages/notes/Notes"


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
                <Route path = "/*" element = {<Home/>} />
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