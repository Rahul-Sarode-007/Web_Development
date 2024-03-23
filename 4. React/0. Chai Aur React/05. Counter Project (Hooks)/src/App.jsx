import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);


  const handleAdd = () =>{
    if (count < 20){
      setCount(count + 1)
      console.log(count,Math.random())
    }
  }

  const handleRemove = () =>{
    if(count>0){
      setCount(count - 1)
      console.log(count,Math.random())
    }
  }

  return (
    <>
      <h1>useState Tutorial {count}</h1>
      <h3>Counter Value {count}</h3>
      <button onClick={handleAdd}>Add counter {count}</button>
      <button onClick={handleRemove}>Remove counter {count}</button>

    </>
  );
}

export default App;
