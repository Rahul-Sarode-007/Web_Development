import React, { useState } from "react";

function App(props) {
  let time = new Date().toLocaleTimeString();
  let initialState = time;

  let [state, setState] = useState(initialState);

  const updateState = () => {
    let newState = new Date().toLocaleTimeString();
    // console.log(newState)
    setState(newState);
  };
  
  
  setInterval(updateState,1000)

  return (
    <div className="container">
      <h1>{state}</h1>
      <button onClick={updateState}>Get Time</button>
    </div>
  );
}

export default App;
