import React, { useState } from 'react'
import './App.css'
import Navbar from './assets/Components/Navbar'
import Carousel from './assets/Components/Carousel'
import CardsSec1 from './assets/Components/CardsSec1'
import CardsSec2 from './assets/Components/CardsSec2'
import CardsSec3 from './assets/Components/CardsSec3'
import Counter from './assets/Components/Counter'

export default function App() {
  let [count, setCount] = useState(10)
  let incre = ()=>{
    setCount(++count)
    console.log(count)
  }
  return (
    <>
      <header>
       <Navbar count={count}  />
      </header>

      <main>
        <Carousel />
    <button onClick={incre}>hhh</button>
        <CardsSec1 />
        <CardsSec2 />
        <CardsSec3  count={count} increment={incre} />
        <Counter />

      </main>
    </>
  )
}
