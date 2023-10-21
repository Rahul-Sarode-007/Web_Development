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


/******************************************************************
5. Find the Longest Word:
Write a function to find the longest word in a sentence.
 ****************************************************************/

console.log("**********************************")
console.log("Finding the Longest Word")

let newString = ""
let newLogestString = ""

const longestWord = (strSentance) =>{
    for (let i= 0 ; i<strSentance.length;i++){
        if (strSentance[i] === " "){
            if (newLogestString.length < newString.length) {
                newLogestString = newString
            }
            newString = ""
            
        }

        else{
            newString += strSentance[i]
        }
       
   }

   if (newLogestString.length < newString.length) {
    newLogestString = newString

}

   return newLogestString;
}

console.log(longestWord("Hello Everyone my name is Rahul"))


/***************************************************************
6. Check for Anagrams:
Write a function to determine if two strings are anagrams of each other.
****************************************************************/

/*Anagrams Partially solved */

let newStr2 = ""
const stringAnagrams = (str1,str2) => {

let count = 0;
let str3 = str2.length

    if (str1.length == str2.length){
        for (let i=0; i<str1.length; i++){
            
            for (let j = 0; j<str2.length; j++){
                if (str1[i]===str2[j]){
                    // console.log("Matched", str2[j])


                    //Removing that char for str2 (need to work on this logic)
                    //strings are immutable
                    for (let k = 0; k<str3; k++){
                        
                        if(str2[j] == str2[k]){

                        }
                        else{
                            newStr2 += str2[k]
                        }
                    }

                }
                else{
                    // console.log("not matched", str1[i])
                    count += 1
                }
            }
            //condition 2: checking str1 character present in str2 if not program terminate (not anagrams) 
            if (count == str2.length){
                return "The given string is not a anagrams, charcter not present"
            }
            else{
                count = 0
            }
        }
        
    }
    
    
    //condition 1: Checking if both string has the same length if not the program terminate (not a anagrams)
    else{
        return "The given string is not a anagrams, both strings has different length"
    }
    return "The given string is anagrams"
   
}

console.log(stringAnagrams(str1="race", str2 ="care"))
console.log(newStr2)

