setTimeout(() => {
  console.log("Task 1");
}, 1000);

try {
  console.log(simulating_error_code);
} catch (err) {
  console.log(err);
}

setTimeout(() => {
  console.log("Task 2");
}, 2000);

setTimeout(() => {
  console.log("Task 3");
}, 3000);

setTimeout(() => {
  console.log("Task 4");
}, 4000);

/***********************************************************/
try {
  console.log("Task 5");
  console.log("Task 6");
  //will jump to catch() method and will not execute task 7,8,9
  console(error_simulating);
  console.log("Task 7");
  console.log("Task 8");
  console.log("Task 9");
} catch (err) {
  console.log(err);
}

/***********************************************************/
setTimeout(() => {
  console.log("Task 10");
}, 5000);


//will not catch error as task is schedule and try to look for error syncronusly.

try {
  setTimeout(() => {
    console.log(simulating_error_code);
  }, 6000);
} 

catch (err) {
  console.log(err);
}

setTimeout(() => {
  console.log("Task 11");
}, 7000);
