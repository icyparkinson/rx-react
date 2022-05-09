import React from "react"

const NavBar = () => {
    const navList = ["", "Day Calc", "Vaccine", "Abx"]
    const navMenu = navList.map( (item) =>{
        return <li style = {navListStyle}>{item}</li>
    })

    return(
    <nav style = {navStyle}>
        <ul>
            <li>Reset</li>
           {navMenu}
        </ul>
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