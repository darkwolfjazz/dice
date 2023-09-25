import { useState } from "react";
import styled from"styled-components";
const NumberSelect = (Select,setSelect) => {
   
    const arrayNumber=[1,2,3,4,5,6];
    return (
    <NumberSelectorContainer>
        <div className="flex">
        {arrayNumber.map((value,i)=>(
            <Box 
            isSelected={value===Select}
            key={i} onClick={()=>setSelect(value)}>{value}</Box>
        ))}
        </div>
        <p>Select Number</p>
    </NumberSelectorContainer>
  )
}

export default NumberSelect

const Box=styled.div `
height: 72px;
width: 72px;
border: 1px solid black;
display: grid;
place-items: center;
font-size: 24px;
font-weight: 700;
background-color: ${(props)=>props.isSelected ? "black":"white"};
color: ${(props)=>!props.isSelected ? "black":"white"};
`

const NumberSelectorContainer=styled.div`
.flex{
    display: flex;
    gap: 24px;
}
p{
    font-size: 24px;
    font-weight: 700px;
}

`