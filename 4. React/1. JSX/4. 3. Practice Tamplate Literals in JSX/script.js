//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.

import React from "react";
import ReactDOM from "react-dom";

let date = new Date();
let year = date.getFullYear();

ReactDOM.render(
  <div>
    <p>Created by Rahul Sarode</p>
    <p>Copyright {year}</p>
  </div>,
  document.querySelector("#root")
);
