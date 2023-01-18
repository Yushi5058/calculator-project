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
let intermediateResult = '';

output.textContent = '0';

allClear.addEventListener('click', () => {
        firstNumber = '';
        secondNumber = '';
        operator = '';
        output.textContent = '0';
});

deleteNum.addEventListener('click', () => {
    if (operator === '' && secondNumber === '') {
        firstNumber = firstNumber.substring(1);  
    } else if (operator !== '' && secondNumber !== '' ) {
        secondNumber = secondNumber.substring(1);
    } else if (operator !=='' && secondNumber === '') {
        operator = operator.substring(1);
    }
    else {
        output.textContent = 'invalid input!';
    }
    output.textContent = firstNumber + operator + secondNumber;
})

numbers.forEach((button) => {
    button.addEventListener('click', (event) => {
        const buttonValue = event.target.textContent;
       if (operator !== '') {
        if (secondNumber.length > 0) {
            evaluateSinglePair();
        }
        secondNumber += buttonValue;
        output.textContent = firstNumber + operator + secondNumber;
       } else {
        firstNumber += buttonValue;
        output.textContent = firstNumber;
       }
    });
});

operators.forEach((button) => {
    button.addEventListener('click', (event) => {
        operator = event.target.textContent;
        output.textContent += operator;
    });
});

equalSign.addEventListener('click', () => {
    if (firstNumber !== '' && secondNumber !== '') {
        evaluateSinglePair();
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
        output.textContent = intermediateResult.toString();
    } else {
        output.textContent = 'Invalid input';
    }
}
 










