/*1. Click 
1. Click is a event listener which trigered when we click on element on which we added event listener.
2. And peform the certain things as we declared in function
3. if external event listener is given then inline same event listener won't work.
4. When we want event listener perform number of things that time we use function.
*/

let a = document.querySelector("h1")

a.onclick = () =>{
    alert("I am Rahul")
}


/*
2. On Mouse Enter
1.This event listener perform a given function task, if we move the mouse on added event listener element.

Mixing attribute manipulating knowledge and function knowledge
*/


logFunction = () =>{
    console.log('Rahul Koutik Sarode')
}

a.setAttribute("onmouseenter", "logFunction()")