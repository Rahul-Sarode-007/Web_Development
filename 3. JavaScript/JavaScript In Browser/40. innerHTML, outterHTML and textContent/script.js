//Text Manipulation and the Text Content 
//The inner and outter HTML property only works on element node

//This is how we can get the value

console.log(document.querySelector("#title").innerHTML)
//<b>Hello</b>

console.log(document.querySelector("#title").outerHTML)
//<b>Hello</b>

console.log(document.querySelector("#title").textContent)
//<b>Hello</b>


//This is how we can set the value

//Change the inner HTML
console.log(document.querySelector("#title").innerHTML = "<em>Bye</em>")


//Chnage the element itself
console.log(document.querySelector(".btn").outerHTML = "<h1>Hi</h1>")


//Change the text content
console.log(document.querySelector("#list").lastElementChild.textContent = "Don't Click")