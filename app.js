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

const operate = function(operator, num1, num2){
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

module.exports = {
    add,
    subtract,
    multiply,
    divide,
};