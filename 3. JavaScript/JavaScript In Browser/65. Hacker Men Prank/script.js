/*
Question:
Write a Javascript program to pretend to look like a hacker write an async function which will simply display the following output.

Initializing the hack program...
Hacking ashish username...
username found ashish17...
connecting to facebook...

Try to use HTML and styling if possible
*/

const hackerMenPrack = async(hackComment) =>{
    return new Promise((resolve) => {
    setTimeout(() => {
        resolve(hackComment)
    },2000);
})
}

const createP = (message)=>{
    let p = document.createElement("p")
    p.innerHTML = message
    document.body.append(p)
}


const accessGranted = ()=>{
    document.body.style.filter = "blur(1px)"
    document.querySelector(".access-granted").style.visibility="visible"
}

const main = async()=>{

   
    //Why async await needed (wait previous promise to complete)
    // console.log(await hackerMenPrack("Initializing the hack program..."))
    
    createP(await hackerMenPrack("Initializing the hack program..."))
    createP(await hackerMenPrack("Hacking Rupali username..."))
    createP(await hackerMenPrack("username found rupalisarode1998..."))
    createP(await hackerMenPrack("connecting to facebook..."))
    accessGranted() 



 /* Using .then() method.
    1. immediatly execute both below promise - not wait first promise to complete.
    */
    // hackerMenPrack("Initializing the hack program...").then(console.log)
    // hackerMenPrack("Hacking ashish username...").then(console.log)

   
}

main()