// https://restcountries.com/v3.1/all
//object.name.common

const getCountryData = async () =>{
    const countryRes = await fetch("https://restcountries.com/v3.1/all")
    console.log(await countryRes.json())
}

getCountryData()



