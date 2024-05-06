import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 let [count, setCount] = useState(5)


  const incre = () => {
    count = count + 1
   setCount(count)
  }
  const decre = () => {
   count = count > 0 ? --count : 0
   setCount(count)
  }


  return (
    <>
      <h1>Counter-- {count}</h1>
      <button onClick={incre}>Add value</button>
      <button onClick={decre}>Remove value</button>
      <button onClick={()=>setCount(0)}>Reset</button>
    </>
  )
}

export default App
