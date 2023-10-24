/* ***********************************************************
1. Arithmatic operators
***********************************************************/

let a = 10;
let b = 4;
let c = 20;

console.log("a+b =",a+b)
console.log("a-b =",a-b)
console.log("a*b =",a*b)
console.log("a/b =",a/b)

//a power b
console.log("a**b =",a**b)

//moduler operator will give the remainder of the division
console.log("a%b =",a%b)


//a++ first print then increment the value of a where's ++a will first increment then print the value of a
//similarly a-- first print the a value then decrement where's --a will first decrement the a value and then print
console.log("a++ is =",a++ +" and ++b is "+ ++b)
console.log("--a is =",--a + " and b-- is" + b--)


/* ***********************************************************
2. Assignment operators
**************************************************************/

console.log(a=b)   // previously a value is 10 now a become 4 as b value overide the a value

console.log(a+=b)  //a = a + b;  //   a will be 4+4=8

console.log(a-=b)  //a = a - b;  //   a will be 8-4=4

console.log(a*=b)  //a = a * b;  //   a will be 4*4=16

console.log(a/=b)  //a = a / b;  //   a will be 16/4=4

console.log(a**=b) //a = a ** b; //   a will be 4 power of 4 = 256

console.log(a%=b)  //a = a % b;  //   a will be 256 % 4 = 0


/***********************************************************
3. Comparison operator
************************************************************/

console.log(a==b)  //will retuen boolean here a=0 and b=4, will check only value not data type

console.log(a!=b)  //not operator

console.log(a===b) //check data type too

console.log(a!==b) //check data type too

console.log(a>b)
console.log(a<b)
console.log(a>=b)
console.log(a<=b)


/***********************************************************
4.Logical Operators
************************************************************/

console.log(a>b && a<b) //both condition need to be true to get true result, return if any of condition, both condition are false

console.log(a>b || a<b) //if any of the condition,both constion is true will return true, only when both condition false will return false

console.log(!false) //will flip the value = true
console.log(!true)  //will flip the value = false