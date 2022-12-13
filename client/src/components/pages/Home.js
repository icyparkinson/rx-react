import React from "react"
import styled from "styled-components"

const TopSection = styled.section`
    margin-bottom: 50px;
`

const Title = styled.h1`
    font-size: 3rem;
    text-decoration: underline;
    font-family: "Fredoka One";
`

const Home = () => {
    return(
        <TopSection>
            <Title>Rx Buddy</Title>
            <img src = "images/logoblack.png" alt = "Rx Buddy logo"/>
            <h2 style = {{fontSize: "2rem"}}>Yay!</h2>
            <p style = {{margin: "20px"}}>Hi there~ I hope I can help you today. To start, select from one of the options above!</p>
            <p>If you have any suggestions for how to improve or add to Rx Buddy, let Icy know!</p>
            <em>**Use me at your discretion! Rx Buddy takes no responsibility or liability.**</em>
        </TopSection>
            
           
        
    )
}

export default Home