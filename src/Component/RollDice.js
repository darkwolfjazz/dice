import { useState } from "react"
import styled from "styled-components"


const RollDice = (Dice,setDice) => {
 
    


    const generateNumber=(min,max)=>{
        return Math.floor(Math.random() *(max-min)+min);
    }

    const RollDice=()=>{
        const randomNumber=generateNumber(1,7)
        setDice((prev)=>randomNumber)
    }
 
 
 
    return (
    <DiceContainer>
    <div onClick={RollDice}className="dice">
        <img src={`n${Dice}.png`}></img>
    </div>
    <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RollDice

const DiceContainer=styled.div`
align-items: center;
display: flex;
flex-direction: column;
p{
    font-size: 24px;
}
.dice{
    cursor: pointer;
}
`





