let b = document.body

console.log("The first node of body is", b.firstChild)
console.log("The first Element node of body is", b.firstElementChild)
console.log("The last Element node of body is", b.lastElementChild)


console.log("The children element of the node", b.firstElementChild.firstElementChild.children)

let ulElements = b.firstElementChild.firstElementChild

console.log("The next element sibling of element", ulElements.firstElementChild.nextElementSibling)

console.log("The previous element sibling of element", ulElements.firstElementChild.nextElementSibling.previousElementSibling)