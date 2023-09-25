import React from 'react'
import styles from "./first.module.css"
import styled from "styled-components"


const  Container=styled.div`

max-width: 1180px;
display: flex;
margin: 0 auto;
height: 100vh;
align-items: center;
.content {
h1 {
    font-size: 96px;
}
}
`
const Button =styled.button`
padding: 10px 10px;   
background: black;
border-radius: 5px;
color: white;
min-width: 220px;
border: none;
font-size: 16px;

&:hover{
    background-color: aqua;
}

`

const FirstPage = ({toggle}) => {
  return (
    <Container>
       <div>
       <img src="dice1.png" alt="dice image"></img>
       </div>
        <div className='content'>
            <h1>DICE GAME</h1>
            <Button onClick={toggle}>Play now </Button>
        </div>
        
    </Container>
  )
}

export default FirstPage;