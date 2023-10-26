/*

1.Object:

An object is a fundamental data structure in JavaScript that represents a collection of key-value pairs, where each key (property) maps to a value (data).
Objects can hold various data types, including other objects, functions, and primitive values.

2.Function:
A function is a block of reusable code that can be called to perform a specific task or set of tasks.
Functions can be defined in JavaScript and stored as variables, assigned to properties of objects, and passed as arguments to other functions.
Functions are a type of object in JavaScript.

3.Method:

A method is a function that is associated with an object. It is a property of an object that holds a reference to a function.
Methods are used to perform actions on the object to which they belong or to retrieve information from that object.
For example, object.method() is a common way to call a method on an object.

4.Property:
A property is a key-value pair within an object. It represents an attribute or data associated with the object.
Properties can hold values, including primitive data types (e.g., numbers, strings) or references to other objects and functions.
Properties can also be functions, in which case they are referred to as methods.
Here's an example to illustrate these concepts:

*/


// Define an object

const person = {
    firstName: "John",  // Property (firstName)
    lastName: "Doe",    // Property (lastName)
    sayHello: function() {  // Method (sayHello)
      return `Hello, ${this.firstName} ${this.lastName}!`;
    }
  };
  
  // Access properties and call the method
  console.log(person.firstName);      // Access a property
  console.log(person.sayHello());     // Call a method
  

  /*
  In this example, firstName and lastName are properties of the person object, while sayHello is a method. Methods are essentially functions that are stored as object properties.
  
  */