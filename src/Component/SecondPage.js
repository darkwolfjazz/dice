import React from 'react'
import TotalScore from './TotalScore'
import NumberSelect from './NumberSelect'
import styled from "styled-components"
import RollDice from './RollDice'
import { useState } from 'react'

const SecondPage = () => {
    const[Select,setSelect]=useState()
    const[Dice,setDice]=useState(1);
  
    return (
    <mainContainer>
       <div className='top_section'>
       <TotalScore/>
       <NumberSelect Select={Select} setSelect={setSelect}/>
       </div>
       <RollDice Dice={Dice} setDice={setDice}/>
        </mainContainer>
  )
}
export default SecondPage

const mainContainer=styled.main`
.top_section{
display: flex;
justify-content: space-around;
}


`