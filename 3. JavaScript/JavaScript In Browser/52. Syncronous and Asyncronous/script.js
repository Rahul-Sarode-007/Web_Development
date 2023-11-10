/* Syncronous programming
 Note: Syncronous action are actions that initiated and finish one-by-one
 */

let a = prompt("What is your name?")
let b = prompt("What is your age?")
let c = prompt("What is your favorite color?")

console.log(a + " is " + b + " years old and has " + c + " favorite color.")


/* Asycronous programming
Note: Asycronous action are action that are initiated now and then they finished letter, e.g: setTimeOut()
*/
console.log("Start")

setTimeout(() => {

    console.log("I am good")
}, 3000)

console.log("end")
