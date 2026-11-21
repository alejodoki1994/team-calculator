// Student B (feature/logic): implement calculator behavior in this file.
// For example, read the two inputs and the selected operation.
// Then calculate the result and update #result.

const button = document.querySelector('#calculate');
const result = document.querySelector('#result');

button.addEventListener('click', () => {

  const firstValue = document.querySelector('#numberA').value;
  const secondValue = document.querySelector('#numberB').value;
  const operation = document.querySelector('#operation').value;

  if (firstValue.trim() === '' || secondValue.trim() === '') {
    result.textContent = 'Please enter a valid number in both fields.';
    return;
  }

  const firstNumber = Number(firstValue);
  const secondNumber = Number(secondValue);

  if (!Number.isFinite(firstNumber) || !Number.isFinite(secondNumber)) {
    result.textContent = 'Please enter a valid number in both fields.';
    return;
  }

  if (operation === '+') {
    const sum = firstNumber + secondNumber;
    result.textContent = `${firstNumber} + ${secondNumber} = ${sum}`;
  } else if (operation === '-') {
    const difference = firstNumber - secondNumber;
    result.textContent = `${firstNumber} - ${secondNumber} = ${difference}`;
  } else if (operation === '*') {
    const product = firstNumber * secondNumber;
    result.textContent = `${firstNumber} × ${secondNumber} = ${product}`;
  } else if (operation === '/') {
    if (secondNumber === 0) {
      result.textContent = 'Cannot divide by zero.';
      return;
    }

    const quotient = firstNumber / secondNumber;
    result.textContent = `${firstNumber} ÷ ${secondNumber} = ${quotient}`;
  } else {
    result.textContent = 'Please select a valid operation.';
  }
});
