import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
      <Card username="Prachi" btnText="click me"/>
      <Card username="Youvraj"/>
      <Card username="Youvraj"/>

   
    </> 
  )
}

export default App
