var countries = [
  "USA",
  "Japan",
  "Australia",
  "Germany",
  "Italy",
  "China",
  "India",
  "Brazil",
  "UAE",
  "South Korea",
  "Mexico",
  "Argentina",
  "Turkey",
  "Egypt",
  "Netherlands",
  "Spain",
  "Singapore",
  "Thailand",
  "Australia",
  "South Africa",
  "Canada",
  "Germany",
  "China",
  "Ireland",
  "Finland",
  "Poland",
  "Austria",
  "Belgium",
  "Portugal",
  "UK",
  "Switzerland",
  "Spain",
  "Japan",
  "Kenya",
  "Colombia",
  "Morocco",
  "New Zealand",
  "Panama"
];

// Loop through the array and create options
for (var i = 0; i < countries.length; i++) {
  var option = document.createElement("option");
  option.value = countries[i];
  option.text = countries[i];
  document.getElementById("dropdown").appendChild(option);
}

const handleOption = () =>{
var dropdown = document.getElementById("dropdown");
  dropdown.addEventListener("change", function (event) {
    main(event.target.value)
  })
}

const main = async (county) => {
  

  let weatherRawData = (
    await fetch(`https://goweather.herokuapp.com/weather/${county}`)
  ).json();
  let weatherData = await weatherRawData;
 
 
  document.querySelector(
    ".temperature"
  ).innerHTML = `The temprature of ${county} is ${weatherData.temperature}`;

 
  document.querySelector(
    ".wind"
  ).innerHTML = `The wind of ${county} is ${weatherData.wind}`;


  document.querySelector(
    ".description"
  ).innerHTML = `The weather description of ${county} is ${weatherData.description}`;
}

handleOption();
