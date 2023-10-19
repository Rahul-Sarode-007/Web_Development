let name1 = "Rahul"

console.log(name1.length)

console.log(name1[0])
console.log(name1[1])

//We can used single or double quote to tell JS it's a string
let friend = 'Prasad'

//  Template Literal

let sentance = `${name1} is a friend of ${friend}` //String interpolation
console.log(sentance)

// Escape squence

//  \n = new line  \t = tab  \'  \''


console.log("Hello \nWorld!")
console.log("Hello \tWorld!")
console.log('You\'re smart')
console.log("You\''re smart")
console.log(`You\'re s\''mart`) //Template literal


/***********************************************************
Reverse the string using for loop
************************************************************/

let sampleString = "Hello World!"
let revesedString =""

console.log(sampleString.length)

for (let i = sampleString.length-1; i>=0; i--){
    revesedString += sampleString[i]
}

console.log(revesedString)
