//Encapsulation

//Function Programming
let baseSalary = 55000
let overTime = 10
let overTimeRate = 20

const employeeWage = (baseSalary,overTime,overTimeRate) =>{
    return baseSalary + (overTime * overTimeRate)
}

console.log(employeeWage(baseSalary,overTime,overTimeRate))

// *************************************************************



//OOP programming
let employee = {
    baseSalary: 55000,
    overTime: 10,
    overTimeRate: 20,
    getWage: function(){
        return this.baseSalary + (this.overTime * this.overTimeRate)
    }
}

console.log(employee.getWage())

