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