let myPromise = new Promise(function(resolve, reject){
    console.log("I am promise block")
    resolve("Promise resolved blocked")
    reject("Promise reject blocked")
})


console.log("Hello 1")


setTimeout(()=> {
    console.log("Hello 2")
},2000)


console.log("Hello 3")
console.log(myPromise)


