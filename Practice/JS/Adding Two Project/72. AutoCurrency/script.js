// https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${countryCode1}/${countryCode2}.json

let countryNames = [];
const userInput = document.querySelector("#autocomplete-input");

const ulList = document.querySelector(".autocomplete-list");

const userInput2 = document.querySelector("#autocomplete-input2");

const ulList2 = document.querySelector(".autocomplete-list2");

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
  let value = "";
  let clickInput = e.target.id;
  console.log(e.target.id);

  if (e.target.id === "autocomplete-input") {
    value = userInput.value.toLowerCase();
    console.log("pass");
  }
  if (e.target.id === "autocomplete-input2") {
    value = userInput2.value.toLowerCase();
    console.log("failed");
  }

  //   console.log(value);

  filteredNames = [];

  if (value === "") {
    removeAutoCompleteDropdown(clickInput);
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
  createAutoCompleteDropdown(filteredNames, clickInput);
};

// *********************

userInput.addEventListener("input", onInputChange);
userInput.addEventListener("click", handleInputClick);

userInput2.addEventListener("input", onInputChange);
userInput2.addEventListener("click", handleInputClick);

// *********************

const createAutoCompleteDropdown = (liItems, clickInput) => {
  removeAutoCompleteDropdown(clickInput);

  console.log(clickInput);

  if (clickInput === "autocomplete-input") {
    liItems.forEach((liItem) => {
      ulList.insertAdjacentHTML(
        "afterbegin",
        `<li><button>${liItem}</button></li>`
      );
    });
    // let dropdownBtns = document.querySelectorAll(".autocomplete-list button");
    // dropdownBtns.addEventListener("click", userClick)

    let dropdownBtns = document.querySelectorAll(".autocomplete-list button");
    dropdownBtns.forEach((btn) => {
      btn.addEventListener("click", userClick);
    });
  }

  if (clickInput === "autocomplete-input2") {
    liItems.forEach((liItem) => {
      ulList2.insertAdjacentHTML(
        "afterbegin",
        `<li><button>${liItem}</button></li>`
      );
    });

    // let dropdownBtns = document.querySelectorAll(".autocomplete-list2 button");
    // dropdownBtns.addEventListener("click", userClick)
    let dropdownBtns2 = document.querySelectorAll(".autocomplete-list2 button");
    dropdownBtns2.forEach((btn) => {
      btn.addEventListener("click", userClick);
    });
  }

  // let dropdownBtns2 = document.querySelectorAll(".autocomplete-list2 button");
  // dropdownBtns2.addEventListener("click",userClick)
};

// *********************

const removeAutoCompleteDropdown = (clickInput) => {
  if (clickInput === "autocomplete-input") {
    removeLiItems = document.querySelectorAll(".autocomplete-list li");
    removeLiItems.forEach((removeLiItem) => {
      removeLiItem.remove();
    });
  }

  if (clickInput === "autocomplete-input2") {
    removeLiItems = document.querySelectorAll(".autocomplete-list2 li");
    removeLiItems.forEach((removeLiItem) => {
      removeLiItem.remove();
    });
  }
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

const userClick = () => {
  console.log("hi");

  // btn.addEventListener("click", onCountryButtonClick);
};
