let currentVal = ''; // Define currentVal outside the function to make it global

function display(value) {
  let displayElement = document.getElementById('display');

  if (value === '=') {
    let equation = currentVal;
    currentVal = eval(equation);
    displayElement.textContent = currentVal;
  } else if (value === 'C') {
    currentVal = '';
    displayElement.textContent = '';
  } else {
    currentVal += value;
    displayElement.textContent = currentVal;
  }
}

function clearDisplay() {
  currentVal = '';
  document.getElementById('display').textContent = '';
}
