
//Parent
console.log(document.body.firstChild) //will return any node it can be comment, text or element, waht ever first //comment
let node = document.body.firstChild


console.log(document.body.firstElementChild)  //only return first element node  //div with class "div-1"
let elements = document.body.firstElementChild


console.log(node.parentNode) //will return parent node it can be comment, text or element  //body
console.log(node.parentElement) //only return parent element node //body

console.log(document.documentElement.parentNode) // document
console.log(document.documentElement.parentElement) //null




//Sibling

console.log(elements.nextSibling) // will give div with class "div-2"
console.log(elements.nextSibling.firstChild.nextSibling) //will give div with class "three"