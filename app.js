/*CALCULATOR
    1. Functions:
        - add
        - subtract
        - multiply
        - divide*/

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function operate(operator, num1, num2){
    if(operator === '+') return add(num1, num2);

    if(operator === '-') return subtract(num1, num2);

    if(operator === '*') return multiply(num1, num2);

    if(operator === '/') return divide(num1, num2);
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        add,
        subtract,
        multiply,
        divide,
    };
}

const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll(".button");
buttons.forEach((button)=>{
    button.addEventListener("click", ()=>{
    screen.textContent += button.textContent;
});
});

const keys = "0123456789/*-+"
document.addEventListener("keydown", (event) => {
    if(keys.includes(event.key)){
        screen.textContent += event.key;
    }
    if(event.key === 'Enter') calculate();
    if(event.key === 'Backspace') backspacePressed();
});

const clear = document.querySelector("#clear");
clear.addEventListener("click", ()=>{
    screen.textContent = "";
});

const equal = document.querySelector("#equal");
equal.addEventListener("click", calculate());

function calculate(){
    let operationString = screen.textContent;
    screen.textContent = "";
    operationString = operationString.replace("=", "");
    console.log(operationString);
    const operator = operationString.match(/[/+\-*]/)[0];
    console.log(operator);
    let [num1, num2] = operationString.split(operator).map(Number);
    console.log(num1);
    console.log(num2);
    screen.textContent = (operate(operator, num1, num2));
}

const backspace = document.querySelector("#backspace");
backspace.addEventListener("click", backspacePressed());

function backspacePressed(){
    screen.textContent = screen.textContent.substring(0, screen.textContent.length - 1);
}