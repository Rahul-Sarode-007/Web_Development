import React from "react";
import ReactDOM from "react-dom";

let fName = "Rahul";
let lName = "Sarode";
let number = 3;

ReactDOM.render(
  <div>
    <h1>Hello {fName + " " + lName}!</h1>
    <p>My lucky number is {number}</p>
  </div>,
  document.getElementById("root")
);
