let mainDiv = document.querySelector(".container")

//Add HTML before begin of selected element in above direction
mainDiv.insertAdjacentHTML("beforebegin", "<h3>Before Begin</h3>")


//Add HTML inside selected element at first
mainDiv.insertAdjacentHTML("afterbegin", "<h3>After Begin</h3>")


//Add HTML inside selected element at last
mainDiv.insertAdjacentHTML("beforeend", "<h3>Before End</h3>")


//Add HTML after end of selected element in below direction
mainDiv.insertAdjacentHTML("afterend", "<h3>After End</h3>")


//Remove selected element
document.querySelector(".second-div").remove()


