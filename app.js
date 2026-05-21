/*CALCULATOR
    1. Functions:
        - add
        - subtract
        - multiply
        - divide*/

const add = function(a, b){
    return a + b;
}

const subtract = function(a, b){
    return a - b;
}

const multiply = function(a, b){
    return a * b;
}

const divide = function(a, b){
    return a / b;
}

let operator, num1, num2;

const operate = function(){
    if(operator === '+'){
        return add(num1, num2);
    }

    if(operator === '-'){
        return subtract(num1, num2);
    }

    if(operator === '*'){
        return multiply(num1, num2);
    }

    if(operator === '/'){
        return divide(num1, num2);
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        add,
        subtract,
        multiply,
        divide,
    };
}

const clear = document.querySelector("#clear");
const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll(".button");

buttons.forEach((button)=>{
    button.addEventListener("click", ()=>{
    screen.textContent += button.textContent;
});
});