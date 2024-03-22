import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";


//Directly storing HTML in varivale
const anotherElement = (
  <>
    <a href="https://www.google.com" target="_black">
      Visit Google
    </a>
    <h1>ABC</h1>
  </>
);


//This is how react create object form JSX
const reactElement = React.createElement(
  "a",
  { href: "https://www.google.com", target: "_blank" },
  "Please Visit Google"
);

ReactDOM.createRoot(document.getElementById("root")).render(
  // anotherElement
  reactElement
);
