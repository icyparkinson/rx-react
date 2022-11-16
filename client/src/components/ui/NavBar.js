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

    @media (max-width: 550px){
        .navbarItem{
            padding: 0 15px;
        }
    }

    `;

const NavBar = () => {


    return(
        <StyledLink>
        <nav style = {{textAlign: "center", paddingTop: "30px"}}>
            
            <NavLink
            className = "navbarItem"
            to = "/"
            exact = "true"
            >
                Home
            </NavLink>

            <NavLink
            className = "navbarItem"
            to = "/daycalc"
            exact = "true"
            >
                Dates
            </NavLink>

            <NavLink
            className = "navbarItem"
            to = "/vaccine"
            exact = "true"
            >
                Vaccine
            </NavLink>

            <NavLink
            className = "navbarItem"
            to = "/daysupp"
            exact = "true"
            >
                Day Supply
            </NavLink>

            <NavLink
            className = "navbarItem"
            to = "/abx"
            exact = "true"
            >
                Abx
            </NavLink>

            <NavLink
            className = "navbarItem"
            to = "/notes"
            exact = "true"
            >
                Notes
            </NavLink>
            
        </nav>
        </StyledLink>


    )

}


export default NavBar