// Student B (feature/logic): implement calculator behavior in this file.
// For example, read the two inputs and the selected operation.
// Then calculate the result and update #result.

const button = document.querySelector('#calculate');
const result = document.querySelector('#result');

button.addEventListener('click', () => {
    const firstNumber = document.querySelector('#numberA').value;
  const secondNumber = document.querySelector('#numberB').value;
  const operation = document.querySelector('#operation').value;
  result.textContent = `${firstNumber} ${operation} ${secondNumber}`;
});
