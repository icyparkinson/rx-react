import React, { useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import DayCalc from "../pages/daycalc/DayCalc"
import Vaccine from "../pages/vaccines/Vaccine"
import DaySupp from "../pages/daysupp/DaySupp"
import Abx from "../pages/abx/Abx"
import Handy from "../pages/handy/Handy"
import Contact from "../pages/contact/Contact"
import Notes from "../pages/notes/Notes"
import ReactGA from "react-ga4"




const WorkSpace = () => {

    useEffect(() => {
        ReactGA.send(window.location.pathname)
    }, [])

    return(
        <div style = {{margin: "100 auto"}}>
            <section style = {workSpaceStyle}>
                <Routes>
                <Route exact path = "/" element = {<Home/>} />
                <Route path = "/daycalc" element = {<DayCalc/>} />
                <Route path = "/vaccine" element = {<Vaccine />} />
                <Route path = "/daysupp" element = {<DaySupp />} />
                <Route path = "/abx" element = {<Abx />} />
                <Route path = "/handy" element = {<Handy />} />
                <Route path = "/contact" element = {<Contact />} />
                {/* <Route path = "/notes" element = {<Notes />} /> */}
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