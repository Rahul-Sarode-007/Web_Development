let tolAmtInput = document.querySelector(".card1-div1 input");
let numPeopleInput = document.querySelector(".card1-div3 input");

let tipArr = document.querySelectorAll("div.card1-div2 input");
let customTipInput = document.querySelectorAll("div.card1-div2 input")[5];

let selectedTipAmt = 0;
let a = 0;

let myBtn = document.querySelector("button");


tolAmtInput.addEventListener("input", function () {
  calculatePerPerson();
});

numPeopleInput.addEventListener("input", function () {
  calculatePerPerson();
});

customTipInput.addEventListener("input", () => {
  a = 1;
  calculatePerPerson();
});

tipArr.forEach((element) => {
  element.addEventListener("click", () => {
   
    //reseting defult color
    tipArr.forEach((oldElement) => {
      oldElement.style.background = "hsl(183, 100%, 15%)"; //dark green
      oldElement.style.color = "white";
    });
    customTipInput.style.background = "hsl(189, 41%, 97%)"; //white
    customTipInput.style.color = "hsl(183, 100%, 15%)"; //dark green


    
    if (element != customTipInput) {
      element.style.background = "#26c2ad"; // light green
      element.style.color = "hsl(183, 100%, 15%)"; // light green
      selectedTipAmt = element.value;
      selectedTipAmt = selectedTipAmt.replace("%", "");
      selectedTipAmt = Number.parseFloat(selectedTipAmt);
      calculatePerPerson();
      console.log("hi");
    }
  });
});

const calculatePerPerson = () => {
  let tolAmtValue = Number.parseFloat(tolAmtInput.value);
  let numPeopleValue = Number.parseFloat(numPeopleInput.value);

  if(numPeopleValue==0){
    document.querySelector(".can_not_zero").style.visibility = "visible"
    document.querySelector(".num_people").style.outline = "2px solid #ca6b4e";
  }
  if(numPeopleValue!=0){
    document.querySelector(".can_not_zero").style.visibility = "hidden"
    document.querySelector(".num_people").style.outline = "2px solid #9fe8df";
  }


  if (a == 1) {
    selectedTipAmt = Number.parseFloat(customTipInput.value);
    console.log(a);
  }

  let perPerson =
    (tolAmtValue + (selectedTipAmt / 100) * tolAmtValue) / numPeopleValue;

  let perPersonTip = ((selectedTipAmt / 100) * tolAmtValue) / numPeopleValue;

  if (!isNaN(perPerson) && isFinite(perPerson)) {
    document.querySelector(".tip-amount-person-span").innerHTML =
      "$" + perPerson.toFixed(2);
    document.querySelector(".tip-amount-dollor-span").innerHTML =
      "$" + perPersonTip.toFixed(2);
  }

  
  if(isFinite(tolAmtValue) &&  isFinite(numPeopleValue) && isFinite(selectedTipAmt)){
    myBtn.style.background = "#26c2ad";
  }
};


//Reset Button Logic
myBtn.addEventListener("click", () => {
  a = 0;
  tolAmtInput.value = "";
  numPeopleInput.value = "";
  customTipInput.value = "";

  tipArr.forEach((oldElement) => {
    oldElement.style.background = "hsl(183, 100%, 15%)";
    oldElement.style.color = "white";


    tipArr[5].style.background = "hsl(189, 41%, 97%)";

    document.querySelector(".tip-amount-person-span").innerHTML = "$0.00";
    document.querySelector(".tip-amount-dollor-span").innerHTML = "$0.00";
    document.querySelector(".can_not_zero").style.visibility = "hidden"
    myBtn.style.background = "#0d686d"
    document.querySelector(".num_people").style.outline = "2px solid #9fe8df";
  });
});


