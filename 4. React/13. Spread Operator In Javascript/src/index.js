import React from "react";
import {createRoot} from "react-dom/client";
import App from "./components/App";


const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)

//Spread operator with array
const singleDigit = [1,2,3]
const doubleDigit = [10,20,30,...singleDigit]

console.log(doubleDigit)


//Spread operator with object
const fullName = {
    fName: "James",
    lName: "Bond"
}

const identity = {
    ...fullName,
    id: "007",
    userName: "bondJamesBond"
}

console.log(identity);

