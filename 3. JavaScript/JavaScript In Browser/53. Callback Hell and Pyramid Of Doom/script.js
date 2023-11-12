/* Callbacks
Callbacks are functions which is passed to another function as an argument
*/

function loadScript (url, Callbacks){
    
    //Craeted Script Element
    let script = document.createElement("script")

    //We can add an elemernt attribute by using . notation
    script.src = url  

    //Onload is function in JS

    script.onload = function () {
        console.log("Script Loaded")

        //calling "hello" fuction
        Callbacks(null,url)
    }


    script.onerror = function(){
        console.log("We are facing some error")
        Callbacks(new Error ("ssrc got some error"))
    }

    //Appeneding element just before closing body tag
    document.body.append(script)
    
}



function goodmorning(err,a){
    if(err){
        console.log(err)
        return
    }
    alert("goodmorning " + a)
}



/*
1.When one callback function call another call back and that callback call another call back.
2.when we need this kind of logic in our code it will grow our code horizontially.
3. this nesting become become very hard to read
4. this kind of code is called Callback hell or pyramid of doom


Here we are only loading Bootstarp script reapedetly but what if we need to load the next script after completion of previous script and so on for multiple script.


*/


loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js", function goodmorning(err,a){
    if(err){
        console.log(err)
        return
    }
    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js", function goodmorning(err,a){
        if(err){
            console.log(err)
            return
        }
        loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js", function goodmorning(err,a){
            if(err){
                console.log(err)
                return
            }
            loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js", function goodmorning(err,a){
                if(err){
                    console.log(err)
                    return
                }
                loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js", function goodmorning(err,a){
                    if(err){
                        console.log(err)
                        return
                    }
                    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js", function goodmorning(err,a){
                        if(err){
                            console.log(err)
                            return
                        }
                        loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js", function goodmorning(err,a){
                            if(err){
                                console.log(err)
                                return
                            }
                            loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js", function goodmorning(err,a){
                                if(err){
                                    console.log(err)
                                    return
                                }
                                loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js", function goodmorning(err,a){
                                    if(err){
                                        console.log(err)
                                        return
                                    }
                                    alert("goodmorning " + a)
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})



// //Example 2
// const makingOmlet = ()=>{
//     setTimeout(()=>{
//     console.log("We are today making the omlet")
//     },1000)
// }

// const crackEggs = () =>{
//     setTimeout(()=>{
//         console.log("cracking the eggs")
//     },2000)
// }

// const beatEggs = () =>{
//     setTimeout(()=>{
//         console.log("beating the eggs")
//     },3000)
// }

// const cookOmlet = () =>{
//     setTimeout(()=>{
//         console.log("cooking the eggs")
//     },4000)
// }

// const servingOmlet = () =>{
//     setTimeout(()=>{
//         console.log("serving the eggs")
//     },5000)
// }

// makingOmlet(
//     crackEggs(
//         beatEggs(
//             cookOmlet(
//                 servingOmlet()
//             )
//         )
//     )
// )




// //Attempt 2

// function crackEggs(callback) {
//     console.log("Step 1: Crack the eggs");
//     setTimeout(callback, 1000); // Simulating asynchronous task
// }

// function beatEggs(callback) {
//     console.log("Step 2: Beat the eggs");
//     setTimeout(callback, 1000);
// }

// function cookOmelet(callback) {
//     console.log("Step 3: Cook the omelet");
//     setTimeout(callback, 1000);
// }

// function serveOmelet() {
//     console.log("Step 4: Serve the omelet");
// }

// // Callback hell
// crackEggs(function () {
//     beatEggs(function () {
//         cookOmelet(function () {
//             serveOmelet();
//         });
//     });
// });
