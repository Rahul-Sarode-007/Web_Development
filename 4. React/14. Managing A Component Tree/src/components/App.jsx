import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function deleteItem(id) {
    items.splice(id, 1);
    setItems((prevItems) => {
      return [...prevItems];
    });
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      addItem();
    }
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          type="text"
          value={inputText}
        />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>

      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              items={todoItem}
              key={index}
              id={index}
              onClicked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
