const numbers = document.querySelectorAll('.numbers');
const operators = document.querySelectorAll('.operators');
const allClear = document.querySelector('.clear');
const deleteNum = document.querySelector('.delete');
const equalSign = document.querySelector('.equal');
const output = document.getElementById('output');
let outputValue = '';
let firstNumber = '';
let secondNumber = '';
let operator = '';
let result = '';

output.textContent = '0';

allClear.addEventListener('click', () => {
        firstNumber = '';
        secondNumber = '';
        operator = '';
        output.textContent = '0';
});

deleteNum.addEventListener('click', () => {
    if (operator === '') {
        firstNumber = firstNumber.substring(1);
    /* } else if (operator === '+' || operator === '-' || operator === '*' || operator === '÷') {
        operator = operator.substring(1); */
    } else {
        secondNumber = secondNumber.substring(1);
    }
    output.textContent = firstNumber + operator + secondNumber;
})

numbers.forEach((button) => {
    button.addEventListener('click', (event) => {
        const buttonValue = event.target.textContent;
        if (operator === '') {
            firstNumber += buttonValue;
            output.textContent = firstNumber;
        } else {
            secondNumber += buttonValue;
            output.textContent = firstNumber + operator + secondNumber;
        }
    });
});

operators.forEach((button) => {
    button.addEventListener('click', (event) => {
        operator = event.target.textContent;
        output.textContent = operator;
    });
});

equalSign.addEventListener('click', () => {
    if (firstNumber !== '' && secondNumber !== '') {
    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);
    switch (operator) {
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
        case '÷':
            result = firstNumber / secondNumber;
            break;
        default:
            result = 'Invalid operator';
    }
    output.textContent = result.toString();
    firstNumber = result;
    secondNumber = '';
    operator = '';
} else {
    output.textContent = 'Invalid input';
}
});
 










