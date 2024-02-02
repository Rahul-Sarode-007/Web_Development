import React, { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [headingText, setHeadingText] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleClick = (event) => {
    setHeadingText(name);

    event.preventDefault()
  };

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form onSubmit={handleClick}>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button type="submit">Submit</button>
      </form>
    </div>
  );
}

