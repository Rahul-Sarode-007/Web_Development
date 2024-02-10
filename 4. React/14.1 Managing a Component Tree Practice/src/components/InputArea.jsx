import React, { useState } from "react";

export default function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);


  }

  function handleKeyDown(event){
    if (event.key ==="Enter"){
      props.onButtonClicked(inputText);
      setInputText("");
    }
  }

  return (
    <div className="form">
      <input onKeyDown={handleKeyDown} onChange={handleChange} type="text" value={inputText} />
      <button
        onClick={() => {
          props.onButtonClicked(inputText);
          setInputText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}
