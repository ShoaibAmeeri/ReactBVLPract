import React, { useContext } from 'react'
import { counterContext } from './context/context'


function Component1() {
    let value = useContext(counterContext)
  return (
<div>Component---{value.count}</div>
  )
}

export default Component1