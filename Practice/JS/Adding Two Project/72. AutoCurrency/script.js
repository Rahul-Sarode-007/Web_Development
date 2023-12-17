let countries = {
  aed: "Emirati Dirham",
  afn: "Afghan Afghani",
  all: "Albanian Lek",
  amd: "Armenian Dram",
  ang: "Dutch Guilder",
  aoa: "Angolan Kwanza",
  ars: "Argentine Peso",
  aud: "Australian Dollar",
  awg: "Aruban or Dutch Guilder",
  azm: "Azerbaijani Manat",
  azn: "Azerbaijan Manat",
  bam: "Bosnian Convertible Mark",
  bbd: "Barbadian or Bajan Dollar",
  bdt: "Bangladeshi Taka",
  bgn: "Bulgarian Lev",
  bhd: "Bahraini Dinar",
  bif: "Burundian Franc",
  bmd: "Bermudian Dollar",
  bnd: "Bruneian Dollar",
  bob: "Bolivian Bolíviano",
  brl: "Brazilian Real",
  bsd: "Bahamian Dollar",
  btn: "Bhutanese Ngultrum",
  bwp: "Botswana Pula",
  byr: "Belarusian Ruble",
  bzd: "Belizean Dollar",
  cad: "Canadian Dollar",
  chf: "Swiss Franc",
  clp: "Chilean Peso",
  cny: "Chinese Yuan Renminbi",
  cop: "Colombian Peso",
  crc: "Costa Rican Colon",
  cuc: "Cuban Convertible Peso",
  cup: "Cuban Peso",
  czk: "Czech Koruna",
  dkk: "Danish Krone",
  dop: "Dominican Peso",
  dzd: "Algerian Dinar",
  egp: "Egyptian Pound",
  ern: "Eritrean Nakfa",
  etb: "Ethiopian Birr",
  eur: "Euro",
  fjd: "Fijian Dollar",
  fkp: "Falkland Island Pound",
  gbp: "British Pound",
  gel: "Georgian Lari",
  ghs: "Ghanaian Cedi",
  gip: "Gibraltar Pound",
  gmd: "Gambian Dalasi",
  gnf: "Guinean Franc",
  gtq: "Guatemalan Quetzal",
  gyd: "Guyanese Dollar",
  hkd: "Hong Kong Dollar",
  hnl: "Honduran Lempira",
  hrk: "Croatian Kuna",
  htg: "Haitian Gourde",
  huf: "Hungarian Forint",
  idr: "Indonesian Rupiah",
  ils: "Israeli Shekel",
  inr: "Indian Rupee",
  iqd: "Iraqi Dinar",
  irr: "Iranian Rial",
  isk: "Icelandic Krona",
  jmd: "Jamaican Dollar",
  jod: "Jordanian Dinar",
  jpy: "Japanese Yen",
  kes: "Kenyan Shilling",
  kgs: "Kyrgyzstani Som",
  khr: "Cambodian Riel",
  kmf: "Comorian Franc",
  kpw: "North Korean Won",
  krw: "South Korean Won",
  kwd: "Kuwaiti Dinar",
  kyd: "Caymanian Dollar",
  kzt: "Kazakhstani Tenge",
  lak: "Lao Kip",
  lbp: "Lebanese Pound",
  lkr: "Sri Lankan Rupee",
  lsl: "Basotho Loti",
  ltl: "Lithuanian Litas",
  lvl: "Latvian Lat",
  lyd: "Libyan Dinar",
  mad: "Moroccan Dirham",
  mdl: "Moldovan Leu",
  mga: "Malagasy Ariary",
  mkd: "Macedonian Denar",
  mnt: "Mongolian Tughrik",
  mop: "Macau Pataca",
  mro: "Mauritanian Ouguiya",
  mru: "Mauritanian Ouguiya",
  mur: "Mauritian Rupee",
  mvr: "Maldivian Rufiyaa",
  mwk: "Malawian Kwacha",
  mxn: "Mexican Peso",
  myr: "Malaysian Ringgit",
  mzn: "Mozambican Metical",
  nad: "Namibian Dollar",
  ngn: "Nigerian Naira",
  nio: "Nicaraguan Cordoba",
  nok: "Norwegian Krone",
  npr: "Nepalese Rupee",
  nzd: "New Zealand Dollar",
  omr: "Omani Rial",
  pab: "Panamanian Balboa",
  pen: "Peruvian Sol",
  pgk: "Papua New Guinean Kina",
  php: "Philippine Peso",
  pkr: "Pakistani Rupee",
  pln: "Polish Zloty",
  pyg: "Paraguayan Guarani",
  qar: "Qatari Riyal",
  ron: "Romanian Leu",
  rsd: "Serbian Dinar",
  rub: "Russian Ruble",
  rwf: "Rwandan Franc",
  sar: "Saudi Arabian Riyal",
  sbd: "Solomon Islander Dollar",
  scr: "Seychellois Rupee",
  sek: "Swedish Krona",
  sgd: "Singapore Dollar",
  shp: "Saint Helenian Pound",
  skk: "Slovak Koruna",
  sll: "Sierra Leonean Leone",
  sos: "Somali Shilling",
  std: "Sao Tomean Dobra",
  stn: "Sao Tomean Dobra",
  svc: "Salvadoran Colon",
  szl: "Swazi Lilangeni",
  thb: "Thai Baht",
  tjs: "Tajikistani Somoni",
  tmt: "Turkmenistani Manat",
  tnd: "Tunisian Dinar",
  try: "Turkish Lira",
  ttd: "Trinidadian Dollar",
  twd: "Taiwan New Dollar",
  tzs: "Tanzanian Shilling",
  uah: "Ukrainian Hryvnia",
  ugx: "Ugandan Shilling",
  usd: "US Dollar",
  uyu: "Uruguayan Peso",
  uzs: "Uzbekistani Som",
  ves: "Venezuelan Bolívar",
  vnd: "Vietnamese Dong",
  xaf: "Central African CFA Franc BEAC",
  xcd: "East Caribbean Dollar",
  xof: "CFA Franc",
  yer: "Yemeni Rial",
  zar: "South African Rand",
  zmk: "Zambian Kwacha",
  zmw: "Zambian Kwacha",
  zwd: "Zimbabwean Dollar",
  zwl: "Zimbabwean Dollar",
};
const userInput = document.querySelector("#autocomplete-input");
const userInput2 = document.querySelector("#autocomplete-input2");

const ulList = document.querySelector(".autocomplete-list");
const ulList2 = document.querySelector(".autocomplete-list2");

const convertedValueElement = document.querySelector(
  ".converted-value-element"
);


const retrieveValueFromObject = () => {
  // Extract all keys of the 'countries' object and create an array of keys.
  countryNames = Object.keys(countries).map((key) => countries[key]);

  // coverting array in desending order
  countryNames = countryNames.sort((a, b) => b.localeCompare(a));
};

retrieveValueFromObject();

// *********************

const onInputChange = (e) => {
  let value = "";
  let clickInput = e.target.id;

  //User typed input
  if (e.target.id === "autocomplete-input") {
    value = userInput.value.toLowerCase();
  }
  if (e.target.id === "autocomplete-input2") {
    value = userInput2.value.toLowerCase();
  }

  filteredNames = [];

  if (value === "") {
    removeAutoCompleteDropdown(clickInput);
    return;
  }


  countryNames.forEach((countryName) => {
    if (countryName.substr(0, value.length).toLowerCase() === value) {
      filteredNames.push(countryName);
    }
  });

  //Populating the filteredNames array, array contain user matched countries
  // countryNames.forEach((countryName) => {
  //   if (countryName.toLowerCase().includes(value)) {
  //     filteredNames.push(countryName);
  //   }
  // });

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

userInput2.addEventListener("click", handleInputClick);
userInput2.addEventListener("input", onInputChange);

// *********************

const createAutoCompleteDropdown = (liItems, clickInput) => {
  removeAutoCompleteDropdown(clickInput);

  if (clickInput === "autocomplete-input") {
    liItems.forEach((liItem) => {
      ulList.insertAdjacentHTML(
        "afterbegin",
        `<li><button>${liItem}</button></li>`
      );
    });

    let dropdownBtns = document.querySelectorAll(".autocomplete-list button");
    dropdownBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => onCountryButtonClick(e, clickInput));
    });
  }

  if (clickInput === "autocomplete-input2") {
    liItems.forEach((liItem) => {
      ulList2.insertAdjacentHTML(
        "afterbegin",
        `<li><button>${liItem}</button></li>`
      );
    });

    let dropdownBtns2 = document.querySelectorAll(".autocomplete-list2 button");
    dropdownBtns2.forEach((btn) => {
      btn.addEventListener("click", (e) => onCountryButtonClick(e, clickInput));
    });
  }
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

let btnHTML, btnHTML2;
const onCountryButtonClick = (e, clickInput) => {
  e.preventDefault();

  if (clickInput === "autocomplete-input") {
    btnHTML = e.target.innerHTML;
    userInput.value = btnHTML;
  }

  if (clickInput === "autocomplete-input2") {
    btnHTML2 = e.target.innerHTML;
    userInput2.value = btnHTML2;
  }

  if (btnHTML !== undefined && btnHTML2 !== undefined) {
    findKey(btnHTML, btnHTML2);
  }

  removeAutoCompleteDropdown(clickInput);
};

// *********************

swapCountry = () => {
  // Basic swapping logic
  // a=5,b=7,c=0
  // c=a
  // a=b
  // b=c

  // console.log(a,b)

  let btnHTML3;

  btnHTML3 = btnHTML;
  btnHTML = btnHTML2;
  btnHTML2 = btnHTML3;

  userInput.value = btnHTML;
  userInput2.value = btnHTML2;

  if (btnHTML !== undefined && btnHTML2 !== undefined) {
    findKey(btnHTML, btnHTML2);
  }
};

let switchBtn = document.querySelector(".swap");
switchBtn.addEventListener("click", swapCountry);

// *********************

const callAPI = async (countryCode1, countryCode2) => {
  let exchangeRatesURL = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${countryCode1}/${countryCode2}.json`;

  try {
    let exchangeRatePromise = fetch(exchangeRatesURL);

    let exchangeRawData = (await exchangeRatePromise).json();
    let exchangeValue = await exchangeRawData;

    // API return the value in below format
    //    {
    //      "date": "2023-12-16",
    //      "inr": 83.02737928
    //    }

    let convertedValue = exchangeValue[countryCode2];

    convertedValueElement.innerHTML = convertedValue;

    // let convertedDate =  exchangeValue.date
    // currentDate.innerHTML= convertedDate
    // document.querySelector(".current-Date").style.visibility = "visible"
  } catch (error) {
    console.log("Error occure while fetching API");
    console.log(error);
    convertedValueElement.innerHTML =
      "Unable to fetch exchange rate. Please try again later.";
  }
};

// *********************

const findKey = (country1, country2) => {
  console.log(country1);
  console.log(country2);

  //Finding the key from value
  let countryCode1 = Object.keys(countries).find((value) => {
    return countries[value] === country1;
  });

  let countryCode2 = Object.keys(countries).find((value) => {
    return countries[value] === country2;
  });

  callAPI(countryCode1, countryCode2);
};



// *****************************************
// TODO: keyboard listener and deappering list after clicking on body
