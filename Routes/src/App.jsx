import{BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'

import Home from "./Components/Home"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Header from './Components/Header'
import Main from './Components/mainx'
import { useMemo, useState } from 'react'

let elements = new Array(20_000_000).fill(0).map((_,i)=>{
  return{

    index:i,
   isMagical: i === 19_000_000 
  }
})
function App() {
  

  let [count, setcount] = useState(5);
  const magical = useMemo(()=>elements.find((i)=>i.isMagical===true),[])
  return (
   <>
   <BrowserRouter>
   <h1 >{count}</h1>
   <button onClick={()=>setcount(count++)}>add</button>
    <span>my magical number is {magical.index}</span>
    <Header/>
      {/* <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
      </Routes> */}
      <Main/>
   </BrowserRouter>
   
   </>
  )
}

export default App
