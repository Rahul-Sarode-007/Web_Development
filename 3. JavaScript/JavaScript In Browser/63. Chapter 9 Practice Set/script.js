//1. Write a program to load a javascript file in browser using promise. use ".then" to display an alert when load is complete.

/*
Using Promise
*/

const myFunction1 = () => {
  return new Promise((resolve, reject) => {
    script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js";

    script.onload = () => {
      resolve("JS script loaded");
    };

    script.onerror = () => {
      reject("JS script rejected");
    };

    document.body.append(script);
  });
};

myFunction1()
  .then(alert)

  .catch((err) => {
    alert(err);
  });

/******************************************************************/

//2. Write the same program using async/await
//CSS:
//https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css

const myFunction2 = async (url) => {
  return new Promise((resolve, reject) => {
    let link = document.createElement("link");
    link.href = url;
    link.rel = "stylesheet";

    link.onload = () => {
      resolve("CSS loaded sucessfully");
    };

    link.onerror = () => {
      reject("CSS loading failed");
    };

    document.head.append(link);
  });
};

const main = async () => {
  a = await myFunction2(
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
  );
  alert(a);
};

main();

/******************************************************************/

//3. Create a promise which reject after 3 seconds. use a async await to gets it's value. use try catch to handle it's error.

const myFunction3 = async() => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new ReferenceError ("New Error Found"))
    }, 3000);
  });
};

const main1 = async()=>{
    try {
        let b = await myFunction3()
        console.log(b)
    } catch (error) {
        console.log(error)
    }
}

main1()


/******************************************************************/


//4. Write a program using Promise.all() inside an async/await to await 3 promises. compare it's results with the case where we await these promises one by one.


const p1 = async ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Task 1")
        },5000)
    })   
}


const p2 = async ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Task 2")
        },3000)
    })   
}



const p3 = async ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Task 3")
        },1000)
    })   
}


const main2 = async()=>{
    // Run every promise parallay (total 5 second takes to complte the execution of all three promises)
    
    let pro1 = p1() //function returns promises
    let pro2 = p2()
    let pro3 = p3()

    console.time("a")
    let c = await Promise.all([pro1,pro2,pro3]) //await gives the resolve value

    console.log(c[0])
    console.log(c[1])
    console.log(c[2])

    console.timeEnd("a")



    //Await for each and every function to run (total 9 sec takes to complete the execution of all three promises)
   
    // console.time("run")
    // console.log(await p1())
    // console.log(await p2())
    // console.log(await p3())
    // console.timeEnd("run")

}


main2()