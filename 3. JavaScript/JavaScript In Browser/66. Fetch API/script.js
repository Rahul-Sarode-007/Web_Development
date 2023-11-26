p = fetch("https://goweather.herokuapp.com/weather/tokiyo")


const elementCreator = (tempData)=>{
    let p = document.createElement("p")
    p.innerHTML = tempData
    document.body.append(p)
}

const wetherApp = (weatherData)=>{
    let temp =  weatherData.forecast[1].temperature
    console.log(temp)
    elementCreator(temp)
}

p.then((response)=>{
        return response.json()
   
}).then((value)=>{
    wetherApp(value)
})


