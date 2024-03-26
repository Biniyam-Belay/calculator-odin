document.addEventListener('DOMContentLoaded', function() {
  const display = document.getElementById('display');
  const numKeys = document.querySelectorAll('.num-key');
  const operatorKeys = document.querySelectorAll('.operator');
  const clearKey = document.querySelector('.clear');
  const calculateKey = document.querySelector('.calculate');

  let currentOperand = '';
  let firstOperand = null;
  let secondOperand = null;
  let currentOperator = null;
  let result = null;

  numKeys.forEach(key => {
    key.addEventListener('click', () => {
      currentOperand += key.textContent;
      display.value = currentOperand;
    });
  });

  operatorKeys.forEach(key => {
    key.addEventListener('click', () => {
      if (firstOperand === null) {
        firstOperand = parseFloat(currentOperand);
        currentOperator = key.value;
        currentOperand = '';
        display.value = '';
      } else if (currentOperand !== '') {
        secondOperand = parseFloat(currentOperand);
        result = operate(firstOperand, currentOperator, secondOperand);
        display.value = result;
        firstOperand = result;
        currentOperator = key.value;
        currentOperand = '';
      }
    });
  });

  calculateKey.addEventListener('click', () => {
    if (currentOperand !== '') {
      secondOperand = parseFloat(currentOperand);
      result = operate(firstOperand, currentOperator, secondOperand);
      display.value = result;
      firstOperand = null;
      secondOperand = null;
      currentOperator = null;
      currentOperand = result.toString();
    }
  });

  clearKey.addEventListener('click', () => {
    currentOperand = '';
    firstOperand = null;
    secondOperand = null;
    currentOperator = null;
    display.value = '';
  });

  function operate(a, operator, b) {
    switch (operator) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '*':
        return a * b;
      case '/':
        return a / b;
      default:
        return null;
    }
  }
});
