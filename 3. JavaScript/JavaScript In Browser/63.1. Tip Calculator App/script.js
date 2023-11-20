let tolAmtInput = document.querySelector(".card1-div1 input")
let tipArr =  document.querySelectorAll("div.card1-div2 input")
let numPeople = document.querySelector(".card1-div3 input")


const cal = async() =>{
    let p1 = new Promise((resolve)=>{
        return tolAmtInput.addEventListener("input", ()=>{
            let tolAmtValue = tolAmtInput.value
            tolAmtValue = Number.parseInt(tolAmtValue)
            confirm.log(tolAmtValue)
            resolve(tolAmtValue)
        })
    })

    
    
    let p2 = new Promise((resolve)=>{
        return tipArr.forEach(element => {
            element.addEventListener("click", ()=>{
                let selectedTipAmt = element.value
                selectedTipAmt = selectedTipAmt.replace('%', '')
                selectedTipAmt = Number.parseInt(selectedTipAmt)
                console.log(selectedTipAmt)
                resolve(selectedTipAmt)
            })
        });
    })
    
    
    let p3 = new Promise((resolve)=>{
      return numPeople.addEventListener("input", ()=>{
        let numPeopleValue = numPeople.value
        numPeopleValue = Number.parseInt(numPeopleValue)
        console.log(numPeopleValue)  
        resolve(numPeopleValue)
    })
    })
    
    
}



// let perPersonTotalAmount = tolAmtValue+(selectedTipAmt/100*tolAmtInput)

// let perPersonTotalAmountSelector = document.querySelector(".tip-amount-person-span")


