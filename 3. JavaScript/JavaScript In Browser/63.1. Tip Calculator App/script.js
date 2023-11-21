let tolAmtInput = document.querySelector(".card1-div1 input");
let numPeopleInput = document.querySelector(".card1-div3 input");
let selectedTipAmt = 0;

tolAmtInput.addEventListener("input", function () {
  calculatePerPerson();
});

numPeopleInput.addEventListener("input", function () {
  calculatePerPerson();
});

let tipArr = document.querySelectorAll("div.card1-div2 input");
tipArr.forEach((element) => {
  element.addEventListener("click", () => {
    tipArr.forEach((oldElement) => {
      oldElement.style.background = "hsl(183, 100%, 15%)";
    });
    tipArr[5].style.background = "hsl(189, 41%, 97%)";
    element.style.background = "hsl(172, 67%, 45%)";
    selectedTipAmt = element.value;
    selectedTipAmt = selectedTipAmt.replace("%", "");

    selectedTipAmt = Number.parseInt(selectedTipAmt);

    calculatePerPerson();
  });
});

const calculatePerPerson = () => {
  let tolAmtValue = Number.parseFloat(tolAmtInput.value);
  let numPeopleValue = Number.parseFloat(numPeopleInput.value);

  let perPerson =
    (tolAmtValue + (selectedTipAmt / 100) * tolAmtValue) / numPeopleValue;
  let perPersonTip = ((selectedTipAmt / 100) * tolAmtValue) / numPeopleValue;

  if (!isNaN(perPerson)) {
    document.querySelector(".tip-amount-person-span").innerHTML =
      "$" + perPerson.toFixed(2);
      document.querySelector(".tip-amount-dollor-span").innerHTML =
        "$" + perPersonTip.toFixed(2);
  }


};
