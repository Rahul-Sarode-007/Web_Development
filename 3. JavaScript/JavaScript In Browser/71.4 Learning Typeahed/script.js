let countryNames = []
const userInput = document.querySelector("#autocomplete-input")
const ulList = document.querySelector(".autocomplete-list")


// *********************


const getCountryData = async () =>{
    let countryResp = await fetch("https://restcountries.com/v3.1/all")
    let data = await countryResp.json()

    //Populating countryNames array from API
    countryNames = data.map((country)=>{
        return country.name.common
    })    

    // console.log(countryNames)
    
}

getCountryData()

// *********************

const onInputChange = () =>{
    value = userInput.value.toLowerCase()
    // console.log(value)
    
    filteredNames = []

    if (value===""){
        removeAutoCompleteDropdown()
        return
    }

    //Populating the filteredNames array, array contain user matched countries
    countryNames.forEach(countryName => {
        if (countryName.substr(0, value.length).toLowerCase() === value) {
            filteredNames.push(countryName)
        }
    });

    // console.log(filteredNames)
    createAutoCompleteDropdown(filteredNames)

}

userInput.addEventListener("input",onInputChange)



// *********************

const createAutoCompleteDropdown = (liItems) =>{

    removeAutoCompleteDropdown()

    liItems.forEach(liItem => {  
        ulList.insertAdjacentHTML("afterbegin", `<li><button>${liItem}</button></li>`)
    });

    let dropdownBtn = document.querySelectorAll(".autocomplete-list button")
    userClick(dropdownBtn)
}

// *********************

const removeAutoCompleteDropdown = () =>{
    removeLiItems = document.querySelectorAll(".autocomplete-list li")
    removeLiItems.forEach(removeLiItem => {
        removeLiItem.remove()
    });
}


// *********************

const onCountryButtonClick = (e) =>{ 
        e.preventDefault()
        btnHTML = e.target.innerHTML
        console.log(btnHTML)

        userInput.value = btnHTML
        removeAutoCompleteDropdown()

}

// *********************


const userClick = (dropdownBtn) =>{
    let i = 0
    dropdownBtn.forEach(() => {
        dropdownBtn[i].addEventListener("click", onCountryButtonClick)
        i++
    });
}

