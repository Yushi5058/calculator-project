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
let operatorPressed = false;
let decimalPressed = false;

output.textContent = '';
outputResetValue = output.textContent;

allClear.addEventListener('click', () => {
        firstNumber = '';
        secondNumber = '';
        operator = '';
        operatorPressed = false;
        intermediateResult = '';
        output.textContent = '';
});

/* deleteNum.addEventListener('click', () => {
    if (secondNumber !== '' && secondNumber.length > 0) {
        secondNumber = secondNumber.substring(0, secondNumber.length - 1);
    } else if (operator !=='') {
        operator = operator.substring(0, operator.length - 1);
    }
    else if (firstNumber !== '' && firstNumber.length > 0) {
        firstNumber = firstNumber.substring(0, firstNumber.length - 1);
    } else {
        firstNumber = firstNumber.substring(0, firstNumber);
    }
    output.textContent = firstNumber + operator + secondNumber;
}); */


numbers.forEach((button) => {
    button.addEventListener('click', (event) => {
        const buttonValue = event.target.textContent;
        if (buttonValue === '.') {
            if((firstNumber === '' && secondNumber === '') || (firstNumber.includes('.') && operatorPressed === false) || (secondNumber.includes('.') && operatorPressed === true) || (firstNumber.includes('.') && operatorPressed === true && secondNumber === '')) {
                return;
            }
        }
        if (firstNumber === '') {
            if (firstNumber.length < 5) {
                firstNumber += buttonValue;
                output.textContent = firstNumber;
            }
        } else {
            if (operatorPressed) {
                if (secondNumber.length < 5) {
                    secondNumber += buttonValue;
                    output.textContent = firstNumber + operator + secondNumber;
                }
            } else {
                if (firstNumber.length < 5) {
                    firstNumber += buttonValue;
                    output.textContent = firstNumber;
                }
            }
        }
    });
});

operators.forEach((button) => {
    button.addEventListener('click', (event) => {
        if(firstNumber !== '' && secondNumber !== '' && operator !== '') {
             evaluateSinglePair();
            firstNumber = intermediateResult;
            operator = event.target.textContent;
            operatorPressed = true;
            output.textContent = firstNumber + operator;

        } else if (firstNumber !== '') {
            operator = event.target.textContent;
            operatorPressed = true;
            output.textContent = firstNumber + operator;
        }
    })
})


equalSign.addEventListener('click', () => {
    if (firstNumber !== '' && secondNumber !== '' && operator !== '') {
        evaluateSinglePair();
        output.textContent = intermediateResult;
        secondNumber = '';
        operator = '';
        operatorPressed = false;
    } else if (firstNumber !== '' && operator !== '' && secondNumber !== '' && this.clicked != true) {
        evaluateSinglePair();
        output.textContent = intermediateResult;
        firstNumber = intermediateResult;
        secondNumber = '';
        operator = ''
        operatorPressed = false;
    } else if (firstNumber === '' && secondNumber === '' && operator === ''){
        output.textContent = 'Input is empty';
    } else {
        output.textContent = 'ERROR MATH';
    }

});

function evaluateSinglePair() {
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
    if (firstNumber.toString().includes('.') || secondNumber.toString().includes('.')) {
        intermediateResult = intermediateResult.toFixed(2);
    } 
    if (operator === '÷' && secondNumber === 0) {
        intermediateResult = 'ERROR'
    }
    firstNumber = intermediateResult;
    secondNumber = '';
    }


