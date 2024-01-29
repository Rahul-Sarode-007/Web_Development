import React from "react";

// let root = document.querySelector("#root");

let isDone = false; //State

function strikeThrough() {
  console.log("1");
  isDone = true
  // root.style.textDecoration = "line-through";
}

function strikeIn() {
  console.log("2");

  isDone = false
  // root.style.textDecoration = "none";
}

export default function App(props) {
  return (
    <>
      <h1
        style={
          isDone
            ? { textDecoration: "line-through" }
            : { textDecoration: "none" }
        }
      >
        Hello World
      </h1>
      <button onClick={strikeThrough}>strike Out</button>
      <button onClick={strikeIn}>strike In</button>
    </>
  );
}
