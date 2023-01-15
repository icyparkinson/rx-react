import React from "react"
import styled from "styled-components"


const StyledButton = styled.button`
    padding: 2px 8px;
    margin: 0 5px;
    border-radius: 15px;
    color: white;
        :hover{
            filter: brightness(150%);
            cursor: pointer;
        }
    `


const Button = ({text, styleType, clickEvent}) => {

    let style

    switch(styleType){
        case "calculate":
            style = {
                backgroundColor: "#4B0082",
            }
            break
        case "reset":
            style = {
                backgroundColor: "darkred",
            }
            break
        case "back":
            style = {
                backgroundColor: "blue",
            }
            break
        case "add":
            style = {
                backgroundColor: "darkgreen",
            }
            break
        default:
            break;
    }

    return ( 
        <StyledButton style={style} onClick={clickEvent}>{text}</StyledButton>
     );
}
 
export default Button;