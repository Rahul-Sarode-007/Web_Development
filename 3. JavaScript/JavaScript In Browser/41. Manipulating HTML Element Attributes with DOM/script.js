/* Manipulating HTML Element Attributes
*/

//will give us all the attribute of selected element as HTML collection
document.querySelector("a").attributes
//Returns - NamedNodeMap {0: href, 1: class, href: href, class: class, length: 2}0: href1: classclass: classhref: hreflength: 2[[Prototype]]: NamedNodeMap


//will give us single attribute by providing attribute name
document.querySelector("a").getAttribute("href")
//Returns - 'https://www.google.com'


//will give us single attribute by providing attribute name
document.querySelector("a").getAttribute("class")
//Returns - 'first-link'


//we can set the attribute value
document.querySelector("a").setAttribute("href", "https://www.bing.com")
//Returns - 'https://www.google.com'

//check if element has the attribute, return boolean
console.log(document.querySelector("a").hasAttribute("href"))

//we can remove an attribute
document.querySelector("a").removeAttribute("href")

//add and modify using set attribute method
document.querySelector("a").setAttribute("href", "https://www.bing.com")

//check custom attribute
console.log(document.querySelector("input").dataset.game)



