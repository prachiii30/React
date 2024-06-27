import { useState,useCallback ,useEffect , useRef} from 'react'
function App() {
  const[length,setLength]=useState(8);
  const[numallowed,setNumallowed]=useState(false);
  const[charallowed,setCharallowed]=useState(false);
  const [password,setPassword]=useState()

  const passwordRef =useRef(null)

  const copypaste=useCallback(()=>{
    passwordRef.current?.select(password)
      window.navigator.clipboard.writeText(password)
  },[password])

 const passwordgen=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if(numallowed) str+="0123456789"
    if(charallowed) str+=".;./;@#!}{?"

    for(let i=1;i<length;i++){
      let char=Math.floor(Math.random()*str.length+1)
        pass=pass+str.charAt(char)
    }
    setPassword(pass)
 },[length,charallowed,numallowed,setPassword])
 useEffect(()=>{
  passwordgen()}
  ,[length,numallowed,charallowed,passwordgen])
 

  
  return (
    <>
      <div className='w-full max-w-4xl mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-500'> 
      <h1 className="text-4xl text-center text-black">Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden m-5'>
        <input 
        type="text"
        ref={passwordRef}
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly
        />
        <button onClick={copypaste} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 '>Copy</button>
      </div>

      <div className='flex text-sm gap-x-2'>
        <div className='flax items-center gap-x-1 '>
          <input 
          type="range" 
          min={6}
          max={100}
          value={length}
          className='cursor-pointer m-2'
          onChange={(e)=>{setLength(e.target.value)}}
          />
          <label className='text-xl text-gray-700 pl-2'>Length:({length})</label>

        </div>
        <div>
          <input type="checkbox" 
          defaultChecked={numallowed}
          id="numip"
          className='m-3'
          onChange={()=>{
            setNumallowed((prev)=>!prev)
          }}
          />
          <label className='text-xl'>Number</label>
        </div>
        <div>
          <input type="checkbox" 
          defaultChecked={charallowed}
          id="numip"
          className='m-3'
          onChange={()=>{
            setCharallowed((prev)=>!prev)
          }}
          />
          <label className='text-xl'>Character</label>

          </div>
      </div>
      </div>

    </>
  )
}

export default App
