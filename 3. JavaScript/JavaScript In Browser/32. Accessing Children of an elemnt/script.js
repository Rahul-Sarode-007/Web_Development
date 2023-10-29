console.log(document.body.firstChild)  // will return any first node
console.log(document.body.firstElementChild)  //"div-1"
console.log(document.body.lastChild)  //script
console.log(document.body.childNodes) //will return all child nodes
console.log(document.body.children)  //will element nodes

console.log(document.querySelector("div"))

/*
Notes: 1. Child notes gives the collections of notes.
2. They are not array but we can convert that nodes collection in array.
*/

let arr = Array.from(document.body.childNodes)
console.log(arr)

