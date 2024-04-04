import { useState, useEffect } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [passwordString, setPasswordString] = useState("qwerty");
  const [numAllowed, setNumAllowed] = useState(false);
  const [symbolAllowed, setSymbolAllowed] = useState(false);

  let char = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let symbol = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

  useEffect(() => {
    if (numAllowed && !symbolAllowed) {
      setPasswordString([...char, ...number]);
      console.log("num-on, sym-off");
    } else if (!numAllowed && symbolAllowed) {
      setPasswordString([...char, ...symbol]);
      console.log("num-off, sym-on");
    } else if (numAllowed && symbolAllowed) {
      setPasswordString([...char, ...number, ...symbol]);
      console.log("num-on, sym-on");
    } else {
      setPasswordString([...char]);
      console.log("num-off, sym-off");
    }
  }, [numAllowed, symbolAllowed, length]);



  const passwordGenerator = (length) => {
    let newPassword = "";
    for (let i = 0; i < length; i++) {
      newPassword +=
        passwordString[Math.floor(Math.random() * passwordString.length)];
    }
    return newPassword;
  };

  let newPassword = passwordGenerator(length);

  return (
    <>
      <h1>Password: {newPassword}</h1>
      <div className="slidecontainer">
        <input
          type="range"
          min={1}
          max={20}
          value={length}
          onChange={(e) => {
            setLength(e.target.value);
          }}
        ></input>
        <label> Length({length})</label>
      </div>

      <div className="checkboxes">
        <input
          type="checkbox"
          checked={numAllowed}
          onChange={() => {
            setNumAllowed((prev) => !prev);
          }}
        ></input>
        <label> Add Number</label>

        <input
          type="checkbox"
          checked={symbolAllowed}
          onChange={() => {
            setSymbolAllowed((prev) => !prev);
          }}
        ></input>
        <label> Add Symbol</label>
      </div>
    </>
  );
}

export default App;
