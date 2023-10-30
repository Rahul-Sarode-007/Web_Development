/*
1.Matches: will return true or false after checking, if the selector present in same line where it self resides
*/

let myID1 = document.getElementById("id1")
myID1.matches(".box") //true as id1 also has box class in same line.
console.log(myID1.matches(".box"))

/*
2. Closest: 

will return parent elemenet if the ancestors (including self) matches the  specified selector, return null if specified selector not matches ancestors (including self).
*/

let mySpan = document.getElementsByClassName("my-span")
mySpan[0].closest(".box")
console.log(mySpan[0].closest(".box"))


/*
3.Contains:
it will return true or false by checking if the given element present within it (children or grandchildren or grand grand children and so on)
*/


let spanClass = document.querySelector(".my-span")
myID1.contains(spanClass)  //true
console.log(myID1.contains(spanClass))