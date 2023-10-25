/*
1. Window Object:
Notes: 1. The window object represent the browser window and provides the methods to control it.
2. It is a global object.
*/

window.console.log(window)

/*
2. DOM (Document Object Model):
Notes: DOM represent the page contain as HTML.
*/

console.log(document.body.style.background="white")


/*
3. BOM (Browser Object Model):
Notes: 1.The browser object model represent the additional object provided by the browser (Host Environment)
2. The functions alert/prompt and confirm also the part of the BOM
*/

// location.href = "https://google.com"

alert("Welcom to color change game!")
let color = prompt("Please enter the background color for this page")
let user_confirmation = confirm(`Please confirm do you want to change the color to ${color}`)
if(user_confirmation){
    console.log(document.body.style.background=color)
}

else{
    alert("Your color change request is cancelled")
}
