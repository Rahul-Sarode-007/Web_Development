const lineMark  = () =>{
    document.querySelector("h1").style.textDecoration = "line-through"
    console.log("1")
}

const lineNoMark  = () =>{
    document.querySelector("h1").style.textDecoration = "none"
    console.log("2")
}

document.querySelector(".line").addEventListener("click",lineMark)
document.querySelector(".no-line").addEventListener("click",lineNoMark)