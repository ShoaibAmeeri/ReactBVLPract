import { useState } from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Nav from './cmponents/Nav'
import Home from './cmponents/Home'
import About from './cmponents/About'
import Contact from './cmponents/About'

function App() {

  const Router = createBrowserRouter([
    {
      path:"/",
      element:<> <Nav/> <Home/></>
    },
    {
      path:"/about",
      element:<><Nav /> <About /></> 
    },
    {
      path:"/contact",
      element:<> <Nav /> <Contact/></>
    },
  ])


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
<Nav  />
<RouterProvider router={Router} />  
      <h1>Counter-- {count}</h1>
      <button onClick={incre}>Add value</button>
      <button onClick={decre}>Remove value</button>
      <button onClick={()=>setCount(0)}>Reset</button>
    </>
  )
}

export default App
