//Callback Hell
const p1 = (a,b,callback) =>{
    let result = a+b
    callback(result)
}

const p2 = (a,b,callback) =>{
    let result = a-b
    callback(result)
}


p1(5,3,function sum(a){
    console.log(a)
    p2(a,2,function diff(b){
        console.log(b)
    })

})


/******************************************************************/

const myMain = async () =>{
    const b1 = async()=>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve("First Promise")
            },5000)
        })
    }

    const b2 = async()=>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve("Second Promise")
            },3000)
        })
    }

    const b3 = async()=>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve("Third Promise")
            },1000)
        })
    }

    console.log(await b1())
    console.log(await b2())
    console.log(await b3())
  
    
    // b1().then(console.log)
    // b2().then(console.log)
    // b3().then(console.log)

}


myMain()


