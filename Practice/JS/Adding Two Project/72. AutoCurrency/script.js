// https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${countryCode1}/${countryCode2}.json

let countryNames = [];
const userInput = document.querySelector("#autocomplete-input");

const ulList = document.querySelector(".autocomplete-list");

const userInput2 = document.querySelector("#autocomplete-input-2");

const ulList2 = document.querySelector(".autocomplete-list-2");

// *********************

const getCountryData = async () => {
  let countryResp = await fetch("https://restcountries.com/v3.1/all");
  let data = await countryResp.json();

  //Populating countryNames array from API
  countryNames = data.map((country) => {
    return country.name.common;
  });

  countryNames = countryNames.sort((a, b) => b.localeCompare(a));

  // console.log(countryNames)
};

getCountryData();

// *********************

const onInputChange = (e) => {
  value = userInput.value.toLowerCase();
  value = userInput2.value.toLowerCase();

  let clickInput = e.target.id;
  console.log(e.target.id);

  // if (e.target.id === "autocomplete-input"){
  //   console.log("pass")
  // }else{
  //   console.log("failed")
  // }

  //   console.log(value);

  filteredNames = [];

  if (value === "") {
    removeAutoCompleteDropdown();
    return;
  }

  //Populating the filteredNames array, array contain user matched countries
  countryNames.forEach((countryName) => {
    if (countryName.substr(0, value.length).toLowerCase() === value) {
      filteredNames.push(countryName);
    }
  });

  // console.log(filteredNames)
  createAutoCompleteDropdown(filteredNames, clickInput);
};

// *********************

const handleInputClick = (e) => {
  let clickInput = e.target.id;
  filteredNames = [];

  countryNames.forEach((countryName) => {
    filteredNames.push(countryName);
  });
  createAutoCompleteDropdown(filteredNames,clickInput);
};

// *********************

userInput.addEventListener("input", onInputChange);
userInput.addEventListener("click", handleInputClick);

userInput2.addEventListener("input", onInputChange);
userInput2.addEventListener("click", handleInputClick);

// *********************

const createAutoCompleteDropdown = (liItems, clickInput) => {
  removeAutoCompleteDropdown();

  if (clickInput === "autocomplete-input") {
    console.log("pass")
    liItems.forEach((liItem) => {
    ulList.insertAdjacentHTML(
      "afterbegin",
      `<li><button>${liItem}</button></li>`
    );
  });
  } 
  
  if(clickInput === "autocomplete-input-2") {
liItems.forEach((liItem) => {
  console.log("failed")
    ulList2.insertAdjacentHTML(
      "afterbegin",
      `<li><button>${liItem}</button></li>`
    );
  });
  }

  // liItems.forEach((liItem) => {
  //   ulList.insertAdjacentHTML(
  //     "afterbegin",
  //     `<li><button>${liItem}</button></li>`
  //   );
  // });

  let dropdownBtns = document.querySelectorAll(".autocomplete-list button");
  userClick(dropdownBtns);
};

// *********************

const removeAutoCompleteDropdown = () => {
  removeLiItems = document.querySelectorAll(".autocomplete-list li");
  removeLiItems.forEach((removeLiItem) => {
    removeLiItem.remove();
  });
};

// *********************

const onCountryButtonClick = (e) => {
  e.preventDefault();
  btnHTML = e.target.innerHTML;
  console.log(btnHTML);

  userInput.value = btnHTML;
  removeAutoCompleteDropdown();
};

// *********************

const userClick = (dropdownBtns) => {
  let i = 0;
  dropdownBtns.forEach(() => {
    dropdownBtns[i].addEventListener("click", onCountryButtonClick);
    i++;
  });
};
