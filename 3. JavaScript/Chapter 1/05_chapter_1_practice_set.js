// 1.Create a variable of type string and try to add a number to it.

let a = 10;

//2. use typeof operator to find the datatype of the string in the last question.

console.log(typeof a)

//3. Create a const object in javascript, can you change it hold a to number later?
//Answer-No

let item = {
    "Rahul":30,
    "Rohit": "Absent",
     50: true
}

console.log(item["Rahul"])
console.log(item)

// item = 100

// console.log(item)

//4. Try to add a new key to the const object in problem 3, were you able to do it?
//Answer = Yes

item["ram"] = 80;

console.log(item)

//5. Write a Js program to craete a word meaning dictionary of 5 words.

let my_dictionary = {
    exciting: "Exciting meaning - Causing strong feelings of pleasure and interest",
    consistent: " Consistent meaning - Always having the same opinions, standard, behaviour, etc.; not changing",
    inspiration: "Inspiration meaning - A feeling, person or thing that makes you want to do something or gives you exciting new ideas",
    journey: " Journey meaning - The act of travelling from one place to another",
    insight: "insight meaning - A deep understanding of what somebody/something is like"
}


console.log(my_dictionary["consistent"])
console.log(my_dictionary.insight)
