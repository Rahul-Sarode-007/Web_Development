//we can add HTML in selected element in below way. 

let a = document.querySelector(".container")
a.innerHTML = a.innerHTML + "<h1>Hello World!</h1>"


//OR we an create an element and insert them

let myH3 = document.createElement('h3');
myH3.innerHTML = "I am programmer"


//Add the element inside the selected element at first
a.prepend(myH3)


//Add the element inside the selected element but at end
a.append(myH3)


//Add the element outside the selected element at above direction
a.before(myH3)


//Add the element outside the selected element but at below direction
a.after(myH3)


let myH4 = document.createElement('h4');
myH4.innerHTML = "I am SDE"


//Replacing H3 with H4 tag
myH3.replaceWith(myH4);
