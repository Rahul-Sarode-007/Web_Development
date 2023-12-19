//Radius and position are properties here and draw is a method.

const circle = {
    radius: 1,
    position: {
        x: 10,
        y: 10
    },
    draw: function (){
        console.log("draw")
    }
}

//retreving property value
console.log(circle.position.y)

//calling method
circle.draw()