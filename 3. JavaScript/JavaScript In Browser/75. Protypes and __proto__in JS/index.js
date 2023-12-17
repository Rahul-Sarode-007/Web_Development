// Note: In JavaScript, the prototype is an essential part of how inheritance is implemented. Every JavaScript object has a prototype, which is essentially a reference to another object. This object is used to look up properties and methods that are not found on the object itself.

let a = {
    name: "Rahul",
    lname: "Sarode"
}


let b = {
    address: "xyz",
    number: 9837545051
}

a.__proto__ = b


b.__proto__ = {
    education: "B.E",
    occupation: "Frond End Developer" 
}

console.log(a.occupation) // OUTPUT: Frond End Developer