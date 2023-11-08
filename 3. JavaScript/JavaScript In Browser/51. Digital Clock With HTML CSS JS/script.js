let clock = document.querySelector(".container h1")
const digitalClock = () =>{
    let a = new Date()
    let h = a.getHours()
    let m = a.getMinutes()
    let s = a.getSeconds()
    // console.log(h,m,s)

    if(s<=9){
        s = "0"+s
    }

    if(m<=9){
        m = "0"+m
    }

    if(h<=9){
        h = "0"+h
    }

    if (h>12){
        h  = h -12
     }

    clock.innerHTML = `${h}:${m}:${s} ${"PM"} `
}

setInterval(digitalClock,1000)