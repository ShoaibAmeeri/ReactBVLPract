import React, { useContext } from 'react'
import Component1 from './Component1'
import { counterContext } from './context/context'



function Button() {
    let value = useContext(counterContext)
  return (
    <>
   <button onClick={()=> value.setCount(count=> count + 1)}> <span><Component1/></span> Im a button</button>
    </>
  )
}

export default Button