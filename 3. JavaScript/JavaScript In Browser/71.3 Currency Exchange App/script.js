todo: "use following API more features"

// // ALL currency
// // let currencies = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json"

// // exchange to inr
// // let exchange = https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/inr.json

// // DAte
// // https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/2023-01-01/currencies/eur.json


// ****************************************************


let dropDown_1 =   document.querySelector("#dropdown-1")
let dropDown_2 =   document.querySelector("#dropdown-2")
let currentDate =  document.querySelector(".current-Date")

let convertedValueElement = document.querySelector(".converted-value-element")

// import countries from "./countries"
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

for(i in countries){
  let option1 = document.createElement("option")
  let option2 = document.createElement("option")

  option1.text = countries[i]
  option2.text = countries[i]

  dropDown_1.append(option1)
  dropDown_2.append(option2)
}

const callAPI = async(countryCode1,countryCode2)=>{

let exchangeRatesURL = (`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${countryCode1}/${countryCode2}.json`)

try {
  let exchangeRatePromise = fetch(exchangeRatesURL)

  let exchangeRawData = (await exchangeRatePromise).json()
  let exchangeValue = (await exchangeRawData)
  let convertedValue =  exchangeValue[countryCode2]
 

  convertedValueElement.innerHTML = convertedValue

 // let convertedDate =  exchangeValue.date
  // currentDate.innerHTML= convertedDate
  // document.querySelector(".current-Date").style.visibility = "visible"


} catch (error) {
  console.log("Error occure while fetching API")
  console.log(error)
  convertedValueElement.innerHTML = "Unable to fetch exchange rate. Please try again later."
}

}


const findKey = (country1, country2)=>{
  let countryCode1 = Object.keys(countries).find((value)=>{
    return countries[value] === country1;
  })

  let countryCode2 = Object.keys(countries).find((value)=>{
    return countries[value] === country2;
  })
  // console.log(countryCode1,countryCode2)

  callAPI(countryCode1,countryCode2)
}



const handleUserInput = async()=>{
 
let value1 = dropDown_1.value
let value2 = dropDown_2.value

if(value1 && value2){
  // console.log(value1)
  // console.log(value2)
  findKey(value1,value2)
}
}

dropDown_1.addEventListener("input",handleUserInput)
dropDown_2.addEventListener("input",handleUserInput)


