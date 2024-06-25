import { useState,useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {

  const [len,setLen]=useState(6)
  const [num,setNum]=useState(false)
  const [char,setChar]=useState(false)
  const [pwd,setPwd]=useState("")

  const pwdGenarator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(num) str+="0123456789"
    if(char) str+="!@#$%^&*()?/"

    for(let i=1;i<=len;i++){
      let char=Math.floor(Math.random()*str.length+1)
      let pass=str.charAt(char)
    }
    setPwd(pass)
  },[len,num,char,setPwd])
  
  return (
    <>
      <h1 className="text-4xl text-center text-white">Password Generator</h1>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-500'> 
      <div className='flex shadow rounded-lg overflow-hidden '>
        <input type="text"
        value={pwd} 
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly/>
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
      </div>

      <div className='flex text-sm gap-x-2'>
        <div className='flax items-center gap-x-1 '>
          <input type="range" 
          name="" id=""/>

        </div>
      </div>
      </div>

    </>
  )
}

export default App
