//Factory Function

function createCircle (radius) {
    return{
        radius, //in ES6 we can use only key name if key and value are name are same (radius:radius) here radius is key and passing parameter radius going to replace with input we provide.
        
        draw: function (){
            console.log(`Drawing ${radius} raduis circle`)
        }
    }
}

const circle1 = createCircle(5)
circle1.draw()
console.log(circle1.radius) //Tapping value

const circle2 = createCircle(12)
circle1.draw()