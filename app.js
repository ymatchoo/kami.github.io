const screenDisplay = document.querySelector('.screen')
const buttons = document.querySelectorAll('button')

let calculation = []
let accumlativeCalculation 


function calculate(button) {
    const value = button.textContent
    if (value === "CLEAR") {
        calculation = []
        screenDisplay.textContent = '.'
    } else if (value == "=") {
        console.log(accumlativeCalculation)
        screenDisplay.textContent = eval(accumlativeCalculation)
    } else {
        
    calculation.push(value)
    accumlativeCalculation = calculation.join('')
    screenDisplay.textContent = accumlativeCalculation 

    console.log(calculation)

    }

}

 buttons.forEach(button => button.addEventListener('click', ()=> calculate(button)) )