/*
Note: Unlike cookies, the localStorage object doesn't send data to the server with each HTTP request.
localStorage needs to be manually cleared, and it persists until cleared by the user. It does not have an expiration date.
localStorage is used to store larger amounts of data (up to 5MB), whereas cookies can only save up to 4KB.
*/

// 1. Set (add) items in localStorage using setItem() method.
//    We can update the value of a key by simply reassigning the value to that key.
localStorage.setItem("Name", "Rahul");

let myKey = prompt("Please enter the key");
let myValue = prompt("Please enter the value");

localStorage.setItem(myKey, myValue);

// 2. Get the value for that key using getItem() method.
console.log(`The ${myKey} is ${localStorage.getItem(myKey)}`);

// 3. Remove an item from localStorage using the removeItem method.
if (myKey === "remove") {
    localStorage.removeItem(myKey);
}

// 4. Clear localStorage using the clear() method.
if (myKey === "clr") {
    localStorage.clear();
}

// 5. Use key() method to get a particular key.
//    In getItem() method, we can give key() method to fetch the value assigned to that key.
console.log(localStorage.key(1));
console.log(localStorage.getItem(localStorage.key(1)));

// 6. The length property provides the number of localStorage key-value pairs.
console.log(localStorage.length);

// 7. We can also use a key as an object key and set and get the value for that key.
localStorage.color = "red";  // setting value
console.log(`The color value is: ${localStorage.color}`);  // getting value
