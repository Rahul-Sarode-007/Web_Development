// 1. Method under an Object:

// When using this within a method (function) that is part of an object (like play and stop), this refers to the object itself.

const video = {
    title: "Sia - Unstoppable",
    play: function (){
        console.log(this)    // Refers to the "video" object
    }
}

//Adding additional key: value pair
video.stop = function (){
    console.log(this)       // Also refers to the "video" object
}

video.stop()


// *****************************************


//2. Function Outside an Object:

// When a function is not part of an object (like playVideo), this inside that function refers to the global object (which is window in a browser context).

function playVideo (){
    console.log(this)   // Refers to the global object (window in a browser)
}

playVideo()


// *****************************************


//3. Constructor Function:

// In a constructor function (like PlayVideo), this initially refers to an empty object ({}), and when you use new PlayVideo(...), properties and methods are added to that object.

function PlayVideo (title){
    this.title = title,
    console.log(this, `playing ${title}`)
}

// "this" refers to the new instance (playVideo1)
const playVideo1 = new PlayVideo("Beliver")


// *****************************************

//4. Using "this" in Callbacks:

// When using this in a callback function (like in forEach), you need to be careful because this can lose its context. In below example with video1.showTags(), we pass this as the second argument to forEach to maintain the reference to the video1 object.

const video1 = {
    title: "Roar",
    tags: ["a", "b", "c"],
    showTags: function (){
        this.tags.forEach(function(tag){
            // "this" refers to the "video1" object
            console.log(this.title,tag)
        },this)
    }
}

video1.showTags()