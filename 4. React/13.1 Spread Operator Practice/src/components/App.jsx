import React, { useState } from "react";

function App() {
  let value = ""


  const [item, setItem] = useState("")
  const [myItems, setMyItems] = useState(["add Items"])

  const handleChange = (event) =>{
    value = event.target.value
    console.log(value)
  }


  const handleClick = () =>{
    myItems.push(value)
    console.log(myItems);
    setItem(...myItems)
  }



  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" 
          onChange={handleChange}
        />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
        {myItems.map((item)=>{
          console.log(item)
          return <li>{item}</li>
        })}
        </ul>
        

      </div>
    </div>
  );
}

export default App;
