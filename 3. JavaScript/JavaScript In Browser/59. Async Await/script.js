async function main(){
    //unlike function we do not need to call promises
     let p1 = new Promise((resolve,reject)=>{
            console.log("Awaiting Mumbai Wether ...")
            setTimeout(()=>{
                let MumbaiWether = "Mumbai Wether is:  32 Deg Celcius"
                resolve (MumbaiWether)
                console.log("Mumbai Wether Fatched")
            },2000)
    
        })
    
    
    
    let p2 = new Promise((resolve,reject)=>{
            console.log("Awaiting Pune Wether ...")
            setTimeout(()=>{
                let PuneWether = "Pune Wether is: 29 Deg Celcius"
                resolve (PuneWether)
                console.log("Pune Wether Fatched")
            },5000)
    
        })
    

    //When we write "await in front of promise, we can retrive the resolve value of the promise"
    // console.log(await p1)
    // console.log(await p2)  
    
    
    mumbaiWether = await p1
    puneWether = await p2

    console.log(mumbaiWether)
    console.log(puneWether)




    // //Can retrive the promise "p1" value by passing parameter "value" and then using it.
    // p1.then((value)=>{
    //     console.log(value)
    // })
    
    // //Or can retrive the promise "p1" resolve value directly without passing parameter
    // p1.then(console.log)


    
    // p2.then((value)=>{
    //     console.log(value)
    // })
}


main()








// //An async function always return a promise object
// async function rahul (){
//     return 7
// }

// //Calling function rahul and storing recived promise object in variable 'a'
// let a = rahul()

// //Below console.log print a promise object
// console.log(a)


// //Retriving resolve value of promise object using then method.
// a.then((x)=>{
//     console.log(x)
// })