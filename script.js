const numbers = document.querySelectorAll('.numbers');
const operators = document.querySelectorAll('.operators');
const allClear = document.querySelector('.clear');
const deleteNum = document.querySelector('.delete');
const equalSign = document.querySelector('.equal');
const output = document.getElementById('output');
let outputValue = '';

numbers.forEach((button) => {
    button.addEventListener('click', (event) => {
        const buttonValue = event.target.textContent;
        if (outputValue === '0') {
            outputValue = buttonValue;
        } else if (outputValue.length < 5) {
        outputValue += buttonValue;
        output.textContent = outputValue;
}})
})





function add(x,y) {
    return x + y;
}
function substract(x,y) {
    return x - y;
}
function multiply(x,y) {
    return x * y;
}
function divide(x,y) {
    return x / y;
}

function operate(operator, x, y) {
    switch (operator) {
        case '+' :
            return add(x,y);
            break;
        case '-' :
            return substract(x,y);
            break;
        case '*' :
            return multiply(x,y);
            break;
        case '/':
            return divide(x,y);
            break;
        default:
            return 'Invalid operator';
        }
}







