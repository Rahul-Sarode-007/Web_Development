let p1 = new Promise((resolve,reject)=>{
    console.log("P1 - Promise is pending")
    setTimeout(()=>{
        resolve("P1 - Order delivered (resolved)")
    },2000)
})



let p2 = new Promise((resolve,reject)=>{
    console.log("P2 - Promise is pending")
    setTimeout(()=>{
        reject(("Order canceled"))
    },2000)
})




// console.log(p1,p2)



.then()
p1.then((value)=>{
    console.log(value)
})

//.catch()
p2.catch((err)=>{
    console.log("P2 - Some error occured (rejected)")
})