/*
1. alert()
Notes: 1. The alert fuction dispalys the dialog box, with message and an 'OK' button.
2. This mainly used to provide user some information or alert.
*/
alert("Hello!, Please under the numberic value")


/*
2. prompt()
Notes: 1. The prompt function displays a dialog box with a message, an input field for the user to enter data, and "OK" and "Cancel" buttons.
2. It is used to collect input from the user, and the entered data is returned as a string.
3. We can convert that string datatype in number using Number.parseInt()
*/

let user_input = prompt("Enter the value in below box")
user_input = Number.parseInt(user_input)

alert(`Your entered value is:  ${user_input} and it's a ${typeof user_input}`)


/*
confirm()
Notes: 1. The confirm function dispaly the dialog box with message and "OK" and "Cancel" button.
2. It is used to obtain a binary (yes/no) decision from the user.
3. It return "true" if user click on "OK" and return "false" if user click on "Cancel"
*/

let user_confirmation = confirm(`Want to proceed with ${user_input}`)

if (user_confirmation){
    document.write(user_input)
}

else{
    document.write("Please allow the value to print")
}
