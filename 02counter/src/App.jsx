import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  let [counter,setcounter] =useState(15)
  // let counter=5
  // const addValue =()=>{
  //  counter=counter+1
  //  setcounter(counter)
  //  setcounter(counter)
  //  setcounter(counter)
  // }
  const addValue=()=>{
    setcounter((prevState)=>prevState+1)
    setcounter((prevState)=>prevState+1)
    setcounter((prevState)=>prevState+1)
  }
  const removeValue=()=>{
    counter=counter-1;
    if(counter<0)
      counter=0;
    
    setcounter(counter)
    
  }
  return (
    <>
      <h1>Hello World</h1>
      <h2>counter value: {counter}</h2>

      <button 
      onClick={addValue}>Add value</button>
    <br></br>
    <br></br>
      <button onClick={removeValue}> remove value</button>

    </>
  )
}

export default App
