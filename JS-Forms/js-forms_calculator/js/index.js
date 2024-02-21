console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return parseInt(a) + parseInt(b);
}

function subtract(a, b) {
  return parseInt(a) - parseInt(b);
}

function multiply(a, b) {
  return parseInt(a) * parseInt(b);
}

function divide(a, b) {
  return parseInt(a) / parseInt(b);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const numbers = Object.fromEntries(formData);
  console.log(numbers);
  let result;
  switch (numbers.operator) {
    case 'addition':
      result = add(numbers.numberA, numbers.numberB)
      break
    case 'subtraction':
      result = subtract(numbers.numberA, numbers.numberB)
      break
    case 'multiplication':
      result = multiply(numbers.numberA, numbers.numberB)
      break
    case 'division':
      result = divide(numbers.numberA, numbers.numberB)
      break
  }
  resultOutput.textContent = result;
});