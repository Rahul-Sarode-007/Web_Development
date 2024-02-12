import React, { useState } from "react";

export default function App() {
    const [count, setCount] = useState(0)

    function handleClick(){
        setCount(count+1)
      }

  return (
    <div>
      <h1>This is react props practice</h1>
      <Button onClicked = {handleClick} count = {count}/>
      <Button onClicked = {handleClick} count = {count}/>
    </div>
  );


  

  function Button(props){
 

    return <button onClick={props.onClicked}>clicked {props.count} times</button>
  }
}
