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
let previousResult1 = '';
let previousResult2 = '';

output.textContent = '0';

allClear.addEventListener('click', () => {
        firstNumber = '';
        secondNumber = '';
        operator = '';
        operatorPressed = false;
        intermediateResult = '';
        output.textContent = '0';
});

deleteNum.addEventListener('click', () => {
    if (secondNumber !== '' && secondNumber.length > 0) {
        secondNumber = secondNumber.substring(0, secondNumber.length - 1);
    } else if (operator !=='') {
        operator = operator.substring(0, operator.length - 1);
    }
    else if (firstNumber !== '' && firstNumber.length > 0) {
        firstNumber = firstNumber.substring(0, firstNumber.length - 1);
    };
    output.textContent = firstNumber + operator + secondNumber;
});


numbers.forEach((button) => {
    button.addEventListener('click', (event) => {
        const buttonValue = event.target.textContent;
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
        if(parseFloat(firstNumber) !== '' && !operatorPressed) {
            operator = event.target.textContent;
            operatorPressed = true;
            output.textContent = firstNumber + operator;
        }
    });
});



equalSign.addEventListener('click', () => {
    if (firstNumber !== '' && secondNumber !== '' && operator !== '') {
        evaluateSinglePair();
        output.textContent = intermediateResult;
        firstNumber = '';
        secondNumber = '';
        operator = '';
        operatorPressed = false;
        if (previousResult1 === '') {
            previousResult1 = intermediateResult;
        } else {
            previousResult2 = intermediateResult;
        }
    } else {
        output.textContent = 'Invalid input';
    }

});


/* function evaluateSinglePair() {
    if (firstNumber !== '' && secondNumber !== '' && operator !== '') {
        firstNumber = parseFloat(firstNumber);
        secondNumber = parseFloat(secondNumber);
        switch (operator) {
            case '+':
                intermediateResult = peeviousResult + firstNumber + secondNumber;
                break;
            case '-':
                intermediateResult = peeviousResult - firstNumber - secondNumber;
                break;
            case '*':
                intermediateResult = peeviousResult * firstNumber * secondNumber;
                break;
            case '÷':
                intermediateResult = peeviousResult / firstNumber / secondNumber;
                break;
            default:
                intermediateResult = 'Invalid operator';
        }
    } else {
       intermediateResult = 'Invalid input';
    }
} */
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
    firstNumber = intermediateResult;
    secondNumber = '';
}
