import { useCallback } from "react"
import { useState } from "react"

export default function App() {

  let [length, setLength] = useState(8)
  let [numAllowed, setNumAllowed] = useState(false) 
  let [charAllowed, setCharAllowed] = useState(false) 
  let [Password, setPassword] =useState()

  let passGenrator = useCallback(()=>{

    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if(numAllowed) str+="0123456789"
    if(charAllowed) str += "!@#$%^&*()-_=+[]{}|;:',.<>?/"

    for (let i = 1; i <= array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass = str.charAt(char)
    }


  },[length,numAllowed,charAllowed,setPassword])


  return (
    <>
      <div className="w-full  ">

      </div>


    </>
  )
}