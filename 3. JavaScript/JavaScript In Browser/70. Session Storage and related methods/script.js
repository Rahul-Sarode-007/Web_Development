/*
Notes: The main difference between local and sessionStorage is that sessionStorage is stored for a session only. If we close the tab or browser or even open the same link in a new tab, the sessionStorage will be deleted.
*/


//1. SetItem()
sessionStorage.setItem("Name", "Rahul")
sessionStorage.setItem("City", "Mumbai")



//2.getItem()
console.log(sessionStorage.getItem("City"))

//3.removeItem()
sessionStorage.removeItem("City")

//4.Clear()
// sessionStorage.clear()

//5.key() - accept index, provide the key
console.log(sessionStorage.key(1))

//6.length property
console.log(sessionStorage.length)


// When changes are made to localStorage or sessionStorage, the storage event will trigger.
window.onstorage = (e)=>{
    alert("changed")
    console.log(e)
}