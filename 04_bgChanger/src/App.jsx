import {useState} from 'react'
function App() {
  const [color, setColor] = useState("pink");
  
  const changecolor=(newcolor)=>{
    setColor(newcolor)
  }

  return (
    <div className={"w-full h-screen duration-200 "}

    //<div className={`w-full h-screen duration-200 bg-${color}`}
      style={{background:color}}
     >

<nav className="bg-white shadow-md rounded-md p-4">
        <ul className="flex space-x-4 justify-center">
          <li>
            <button onClick={()=>{changecolor('red')}}  className="flex felx-wrap justify-center py-2 px-4 rounded gap-3 shadow-xl bg-red-500">Red</button>
          </li>
          <li>
            <button onClick={()=>setColor('blue')} className="bg-blue-500 flex felx-wrap justify-center py-2 px-4 rounded gap-3 shadow-xl">Blue</button>
          </li>
          <li>
            <button onClick={()=>{changecolor('green')}} className="bg-green-500 flex felx-wrap justify-center py-2 px-4 rounded gap-3 shadow-xl">Green</button>
          </li>
          <li>
            <button onClick={()=>{changecolor('yellow')}}  className="bg-yellow-500 flex felx-wrap justify-center py-2 px-4 rounded gap-3 shadow-xl">Yellow</button>
          </li>
          <li>
            <button onClick={()=>changecolor('purple')} className="bg-purple-500 flex felx-wrap justify-center py-2 px-4 rounded gap-3 shadow-xl ">Purple</button>
          </li>
          <li>
            <button onClick={()=>{changecolor('pink')}}  className="bg-pink-500 flex felx-wrap justify-center py-2 px-4 rounded gap-3 shadow-xl">Pink</button>
          </li>
        </ul>
      </nav>
      
    </div>
  )
}

export default App
