import React, { useState } from "react";

function App() {
  const [mouseOver, setMouseOver] = useState(false);

  const handleMouseOver = () => {
    setMouseOver(true);
  };

  const handleMouseOut = () => {
    setMouseOver(false);
  };

  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: mouseOver ? "black" : "white" }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
