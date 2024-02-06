import React, { useState } from "react";

export default function App() {
  let [value, setValue] = useState("");
  let [items, setItems] = useState([]);

  const handleChange = (event) => {
    value = event.target.value;
    setValue(value);
  };

  const handleClick = () => {
    setItems((prevValue) => [...prevValue, value]);
    setValue("");
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          value={value}
          name="itemInput"
          type="text"
          onChange={handleChange}
        />

        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
