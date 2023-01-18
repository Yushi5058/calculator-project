const numbers = document.querySelectorAll('.numbers');
const operators = document.querySelectorAll('.operators');
const allClear = document.querySelector('.clear');
const deleteNum = document.querySelector('.delete');
const equalSign = document.querySelector('.equal');
const output = document.getElementById('output');
let firstNumber = '';
let secondNumber = '';
let operator = '';
let intermediateResult = '';

output.textContent = '0';

allClear.addEventListener('click', () => {
        firstNumber = '';
        secondNumber = '';
        operator = '';
        output.textContent = '0';
});

deleteNum.addEventListener('click', () => {
    if (secondNumber !== '') {
        secondNumber = secondNumber.substring(0, secondNumber.length - 1);
    } else if (operator !=='') {
        operator = operator.substring(0, operator.length - 1);
    }
    else {
        firstNumber = firstNumber.substring(0, firstNumber.length - 1);
    }
    output.textContent = firstNumber + operator + secondNumber;
})

numbers.forEach((button) => {
    button.addEventListener('click', (event) => {
        const buttonValue = event.target.textContent;
       if (firstNumber === '') {
        firstNumber += buttonValue;
        output.textContent = firstNumber;
       } else {
        seoncdNumber += buttonValue;
        output.textContent = firstNumber + operator + secondNumber;
       }
    });
});

operators.forEach((button) => {
    button.addEventListener('click', (event) => {
        operator = event.target.textContent;
        output.textContent = firstNumber + operator;
    });
});

equalSign.addEventListener('click', () => {
    if (firstNumber !== '' && secondNumber !== '' && operator !== '') {
        evaluateSinglePair();
        output.textContent = intermediateResult;
        firstNumber = intermediateResult.toString();
        secondNumber = '';
        operator = '';
    } else {
        output.textContent = 'Invalid input';
    }

});


function evaluateSinglePair() {
    if (firstNumber !== '' && secondNumber !== '' && operator !== '') {
        firstNumber = parseFloat(firstNumber);
        secondNumber = parseFloat(secondNumber);
        switch (operator) {
            case '+':
                intermediateResult = firstNumber + secondNumber;
                break;
            case '-':
                intermediateResult = firstNumber - secondNumber;
                break;
            case '*':
                intermediateResult = firstNumber * secondNumber;
                break;
            case '÷':
                intermediateResult = firstNumber / secondNumber;
                break;
            default:
                intermediateResult = 'Invalid operator';
        }
    } else {
       intermediateResult = 'Invalid input';
    }
}
 










