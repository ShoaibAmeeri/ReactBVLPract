import{BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'

import Home from "./Components/Home"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Header from './Components/Header'
function App() {
  

  return (
   <>
   <BrowserRouter>
    <Header/> 
      <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
      </Routes>
   </BrowserRouter>
   
   </>
  )
}

export default App
