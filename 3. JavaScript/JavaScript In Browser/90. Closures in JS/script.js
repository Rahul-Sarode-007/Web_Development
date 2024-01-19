// Note: In JavaScript, a closure is created when a function is defined within another function, and it has access to the outer function's variables. 
// This allows the inner function to "close over" or capture the outer function's scope, even after the outer function has finished executing. 
// Closures are a powerful and flexible feature in JavaScript, often used to create private variables, maintain state, and create functions with dynamic behavior.


message = "I am global variable";

function hello1() {
  let message = "Good Morning";
  console.log(message);

  let myFun = function hello2() {
    console.log("This is myFun: ", message);
  };
  return myFun;
}

let closure1 = hello1();
closure1(); //OUTPUT: This is myFun:  Good Morning

// Note: 'myFun - inner function' function has the access of outter function varible 'hello1', even though 'hello1 - outter function' has completed exwcution. This is a closure in action.

//inner function return with it's lexical enviroment, means the outter varibale which inner function is accessing will also return.

// ***************************************

function outerFunction() {
  let outerVariable = "I am from outer function";

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

const closure = outerFunction();
closure(); // Outputs: "I am from outer function"

// ***************************************

const myFun2 = () => {
  const x = () => {
    let a = 1;
    console.log(a);
    const y = () => {
    //   let a = 2;
      console.log(a);
      const z = () => {
        // let a = 3;
        console.log(a);
      };
      z();
    };
    a = 999 
    y();
  };

  return x
};


let closure2 = myFun2()
closure2()