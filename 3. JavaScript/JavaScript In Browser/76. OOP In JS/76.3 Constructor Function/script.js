function Circle (radius) {
    this.radius = radius,
    this.draw = function (){
        console.log("Drawing circle")
    }
}


const circle2 = new Circle(1)
circle2.draw()