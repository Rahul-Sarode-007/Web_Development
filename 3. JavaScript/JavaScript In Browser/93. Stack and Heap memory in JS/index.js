// Note: Primitive data types are immutable and stored in stack memory.
// When assigned to a new variable, they provide a copy of the data, 
// and changes made to the new variable do not affect the original data.

let name = "Rahul"; // Primitive data type: string

let newName = name; // Creating a copy of 'name'

newName = "Sarode"; // Modifying 'newName' does not affect 'name'

console.log(name);    // Output: Rahul
console.log(newName); // Output: Sarode


// *****************************************************
// Note: Non-primitive data types are mutable and stored in heap memory.
// When assigned to a new variable, they refer to the original data.
// Changes made to the new variable will affect the original data.

let userOne = {
    email: "rahul.sarode@google.com",
    upi: "userone@sbi.com"
}; // Non-primitive data type: object

let userTwo = userOne; // Both 'userOne' and 'userTwo' now refer to the same object

userTwo.email = "rahul.sarode@microsoft.com"; // Modifying 'userTwo' also changes 'userOne'

console.log(userOne.email); // Output: rahul.sarode@microsoft.com
console.log(userTwo.email); // Output: rahul.sarode@microsoft.com
