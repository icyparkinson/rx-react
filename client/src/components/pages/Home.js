import React from "react"
import styled from "styled-components"
import Line from "../ui/Line"

const TopSection = styled.section`
    margin-bottom: 50px;
`

const Title = styled.h1`
    font-size: 3rem;
    text-decoration: underline;
    font-family: "Fredoka One";
`

const Update = styled.p`
    background-color: yellow;
`

const Home = () => {
    return(
        <TopSection>
            <Title>Rx Buddy</Title>
            <img src = "images/logoblack.png" alt = "Rx Buddy logo"/>
            <h2 style = {{fontSize: "2rem"}}>Yay!!</h2>
            <p style = {{margin: "20px"}}>Hi there~ I hope I can help you today. To start, select from one of the options above!</p>
            <em>**Use me at your discretion! Rx Buddy takes no responsibility or liability.**</em>
            <p></p>
        </TopSection>
            
           
        
    )
}

export default Home