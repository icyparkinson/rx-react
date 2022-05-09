import React from "react"
import { NavLink } from "react-router-dom"

const NavBar = () => {
    return(
            // const navList = ["Home", "Day Calc", "Vaccine", "Abx"]
        <nav>
            <NavLink
            className = "navbarItem"
            activeClassName = "is-active"
            to = "/"
            exact
            >
                Home
            </NavLink>

            <NavLink
            className = "navbarItem"
            activeClassName = "is-active"
            to = "/daycalc"
            exact
            >
                Day Calculator
            </NavLink>

            <NavLink
            className = "navbarItem"
            activeClassName = "is-active"
            to = "/vaccine"
            exact
            >
                Vaccine
            </NavLink>

            <NavLink
            className = "navbarItem"
            activeClassName = "is-active"
            to = "/abx"
            exact
            >
                Abx
            </NavLink>

        </nav>
    


    )

}


const navStyle = {
    display: "flexbox", 
    textAlign: "center",
    marginTop: "30px",
}

const navListStyle = {
    display: "inline",
    padding: "25px",
}

export default NavBar