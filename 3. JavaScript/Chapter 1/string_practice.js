//1. Reverse a String:
//Write a function to reverse a string in JavaScript.

console.log("**********************************")
console.log("Reversing a String:")


let reversedString = ""

const stringReverseFunction = (string)=>{
    for(let i = string.length-1; i>=0; i--){
        reversedString+=string[i]
    }
    return reversedString
}


let result = stringReverseFunction("Hello World!")
console.log(result)


/*****************************************************
//2.Check for Palindrome:
//Write a function to determine if a given string is a palindrome.
*******************************************************/

console.log("**********************************")
console.log("Checking for Palindrome by reversing a string")


const stringPalindromeChecking = (string1)=>{
    let string2 = ""
    for(let i=string1.length-1; i>=0; i-- ){
        string2 += string1[i]
    }
    if (string1==string2){
        console.log("The given string is palindrome")
    }
    else{
        console.log("The given string is not palindrome")
    }
}

let string1 = "madam"
stringPalindromeChecking(string1)

/* ************************************************ 
//Checking for Palindrome - char by char comparison
 ************************************************ */

console.log("**********************************")
console.log("Checking for Palindrome by comparing char be char")


const stringPalindromeChecking2 = (string4)=>{
    let backLenght = string4.length-1
    let startLenght = 0
    if(string4[startLenght] == string4[backLenght]){
        for(let i=0; i<Math.floor((string4.length-1)/2); i++){
            if (string4[startLenght+=1] == string4[backLenght-=1]){
                if (i==(Math.floor((string4.length-1)/2))-1){
                    console.log("The given string is palindrome")
                }
            }
            else{
                console.log("The ggiven string is not palindrome")
                break
            }
        }
    }
    else{
        console.log("The given string is not palindrome")
    }

}


stringPalindromeChecking2("deified")

/**************************************************************
3. Count Vowels and Consonants:
Write a function to count the number of vowels and consonants in a string.
***************************************************************/

console.log("**********************************")
console.log("Counting Vowels and Consonants")


let totalVowels = 0
let totolConsonants = 0

let vowels = "aeiouAEIOU"


const countVowels = (string5)=>{
    for(let i = 0; i<string5.length; i++){
        for (let j = 0; j<vowels.length; j++){
            if (string5[i] == vowels[j]){
                totalVowels+=1;
            }
        }
    }
    let message = `The string has ${totalVowels} vowels and ${(string5.length)-totalVowels} consonants`
    return  message
}


console.log(countVowels("Rahul"))



