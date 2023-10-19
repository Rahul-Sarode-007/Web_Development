let fname = "Rahul"
let sname = "Sarode"

console.log(fname.length)

console.log(fname.toUpperCase())

console.log(fname.toLowerCase())

console.log(fname.slice(1,3))

console.log(fname.replace('u','oo'))

console.log(fname.concat(" ",sname))


let newName = "               Meena              "

console.log(newName.trim())



/*********************************************************** 
 Coping string using for loop
 **********************************************************/
let sumString = fname+sname
let sumString1 = ""
console.log(sumString)

for (let i=0; i<sumString.length; i++){
    // console.log(sumString[i])
    sumString1+=sumString[i]
}


console.log(sumString1)





