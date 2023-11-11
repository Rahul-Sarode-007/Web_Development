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


function hello (error,a){
    if(error){
        console.error(error)
        return
    }
    alert("The URL Is: " + a)
}

function goodmorning(err,a){
    if(err){
        console.log(err)
        return
    }
    alert("goodmorning " + a)
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js", goodmorning)