import React from "react"
import { NavLink } from "react-router-dom"
import styled from "styled-components"

const StyledLink = styled.ul`

    a.navbarItem.active{
        color: white;
    }

    .navbarItem{
        text-decoration: none;
        font-family: Tahoma;
        color: #FE9000;
        padding: 0 30px;
        line-height: 5px;
        &:hover{
            color: #EEE5E9;
            border-bottom: 2px solid #EEE5E9;
        }
        }
    }

    `;

const NavBar = () => {


    return(
        <StyledLink>
        <nav style = {{textAlign: "center", paddingTop: "30px"}}>
            
            <NavLink
            className = "navbarItem"
            activeClassName = "isActive"
            to = "/"
            exact
            >
                Home
            </NavLink>

            <NavLink
            className = "navbarItem"
            activeClassName = "isActive"
            to = "/daycalc"
            exact
            >
                Day Calculator
            </NavLink>

            <NavLink
            className = "navbarItem"
            activeClassName = "isActive"
            to = "/vaccine"
            exact
            >
                Vaccine
            </NavLink>

            <NavLink
            className = "navbarItem"
            activeClassName = "isActive"
            to = "/abx"
            exact
            >
                Abx
            </NavLink>
            
        </nav>
        </StyledLink>


    )

}


export default NavBar