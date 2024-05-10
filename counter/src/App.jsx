import { useState } from "react";
import "./App.css";
import Nav from "./cmponents/Nav";
import Home from "./cmponents/Home";
import About from "./cmponents/About";
import Contact from "./cmponents/About";
import { counterContext } from "./cmponents/context/context";

function App() {
  let [count, setCount] = useState(5);

  const incre = () => {
    count = count + 1;
    setCount(count);
  };
  const decre = () => {
    count = count > 0 ? --count : 0;
    setCount(count);
  };

  return (
    <>
    <counterContext.Provider value={{count, setCount}}>

      <Nav />

      <h1>Counter-- {count}</h1>
      <button onClick={incre}>Add value</button>
      <button onClick={decre}>Remove value</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </counterContext.Provider>
    </>
  );
}

export default App;
