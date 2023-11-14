let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Value 1");
  }, 1000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("Value 2");
    reject(new Error("Error occured"))
  }, 200);
});

let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Value 3");
  }, 3000);
});

/*
Static Methods:
*/

/*
1.Promise.all([promises]) 
i. Wait for all promises to resolve and returns the array of thier result.
ii. If any one failed, it become error and all other result and ignored.

*/
let promiseMethode = Promise.all([p1,p2,p3])

promiseMethode.then((value)=>{
    console.log(value)
})


/*
2.Promise.allSettle([Promises])
i. Waits for all the promises to settle and return their result as an array of object.
ii. Unlike promise.all() methode where even one promise reject (fails) the it become error and all the promises value rejected, promise.allSettled()
methode return array of object both resolve and rejected values.
*/

promiseMethode = Promise.allSettled([p1,p2,p3])

promiseMethode.then((value)=>{
    console.log(value)
})



/*
3. Promise.race()
i. Wait for first promise to settle and it's result(value)/error becomes outcome.
ii. It race between the all the other promise and only fasted one executes(it can be result or error), but only 1 firsted promise executes.
*/

promiseMethode = Promise.race([p1,p2,p3])

promiseMethode.then((value)=>{
    console.log(value)
})


/*
4. Promise.any()
i. It also races between all the promises and only one firsted promise execute, but it only executes result
ii. If it encounter error (if error promise is fasted) the moves to next result (resolve) promise
*/

promiseMethode = Promise.any([p1,p2,p3])


promiseMethode.then((value)=>{
console.log(value)    
})



/*
5. Promise.resolve()
i. Makes the resolve promise with given value
*/

promiseMethode = Promise.resolve("Promise resolved")

promiseMethode.then((value)=>{
    console.log(value)
})


/*
6. Promise.reject()
i. Makes the rejected promise with the given error
*/


promiseMethode = Promise.reject(new Error("Promise rejected - Error Occured"))