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

const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const zero = document.querySelector("#zero");

const addSymbol = document.querySelector("#add");
const subtractSymbol = document.querySelector("#subtract");
const multiplySymbol = document.querySelector("#multiply");
const divideSymbol = document.querySelector("#divide");
const clear = document.querySelector("#clear");

const screen = document.querySelector(".screen");

one.addEventListener("click", ()=>{
    screen.textContent += "1";
});

two.addEventListener("click", ()=>{
    screen.textContent += "2";
});

three.addEventListener("click", ()=>{
    screen.textContent += "3";
});

four.addEventListener("click", ()=>{
    screen.textContent += "4";
});

five.addEventListener("click", ()=>{
    screen.textContent += "5";
});

six.addEventListener("click", ()=>{
    screen.textContent += "6";
});

seven.addEventListener("click", ()=>{
    screen.textContent += "7";
});

eight.addEventListener("click", ()=>{
    screen.textContent += "8";
});

nine.addEventListener("click", ()=>{
    screen.textContent += "9";
});

zero.addEventListener("click", ()=>{
    screen.textContent += "0";
});

clear.addEventListener("click", ()=>{
    screen.textContent = "";
});

addSymbol.addEventListener("click", ()=>{
    screen.textContent += " + ";
});

subtractSymbol.addEventListener("click", ()=>{
    screen.textContent += " - ";
});

multiplySymbol.addEventListener("click", ()=>{
    screen.textContent += " x ";
});

divideSymbol.addEventListener("click", ()=>{
    screen.textContent += " ÷ ";
});