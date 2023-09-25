import logo from './logo.svg';
import './App.css';
import Hey from './Component/Hey';
import FirstPage from './Component/FirstPage';
import styled from "styled-components";
import { useState } from 'react';
import SecondPage from './Component/SecondPage';


function App() {
  
  const[flagGame,setFlagGame]=useState(false);

  const toggleGame=()=>{
    setFlagGame((prev)=>!prev);
  }

  return (
    <>
    {flagGame? <SecondPage/>:<FirstPage toggle={toggleGame}/>}     
    </>
  );
}

export default App;
