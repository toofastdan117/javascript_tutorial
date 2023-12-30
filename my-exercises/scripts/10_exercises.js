// 10c 
const testButton = document.querySelector('.js-button')
console.log(testButton.classList.contains('js-button'))


// 10d-f
document.querySelector('.js-toggle-gaming').classList.remove('is-toggled')
document.querySelector('.js-toggle-music').classList.remove('is-toggled')
document.querySelector('.js-toggle-tech').classList.remove('is-toggled')

let buttonList = [];
function toggleButton(category) {
  const buttonCategory = `js-toggle-${category}`;
  buttonList.push(buttonCategory);
  const activeElement = document.querySelector(`.${buttonCategory}`);
  if (!activeElement.classList.contains('is-toggled')) {
    activeElement.classList.add('is-toggled');
    if (buttonList.length > 1) {
      const prevElement = document.querySelector(`.${buttonList[0]}`);
      prevElement.classList.remove('is-toggled');
      buttonList.shift();
    }
  } else {
    activeElement.classList.remove('is-toggled');
    buttonList = [];
  }
}


// 10h
function calculateTotal() {
  const inputElement = document.querySelector('.js-cost-input');
  const errorTotalCost = document.querySelector('.js-total-cost');
  let cost = Number(inputElement.value);
  if (cost < 0) {
    errorTotalCost.innerHTML = 'Error: cost cannot be less than $0';
    errorTotalCost.classList.add('error-message');
  }
  else if (cost < 40 && cost > 0) {
    cost = cost + 10;
    document.querySelector('.js-total-cost')
      .innerHTML = `$${cost}`
    errorTotalCost.classList.remove('error-message');
  }
  else {
    document.querySelector('.js-total-cost')
      .innerHTML = `$${cost}`
    errorTotalCost.classList.remove('error-message');
  }
}

function handleCostKeydown(event) {
  if (event.key === 'Enter') {
    calculateTotal();
  }
}


// 10i-j
let calculation = localStorage.getItem('calc') || ''
document.querySelector('.js-calculation').innerHTML = calculation;

function updateCalculation(num) {
  calculation = calculation += num;
  document.querySelector('.js-calculation').innerHTML = calculation;
  localStorage.setItem('calc', calculation);
  console.log(calculation);
}

function equals() {
  calculation = eval(calculation);
  document.querySelector('.js-calculation').innerHTML = calculation;
  localStorage.setItem('calc', calculation);
  console.log(calculation);
}

function clearCalculation() {
  calculation = ''; 
  document.querySelector('.js-calculation').innerHTML = calculation;
  localStorage.setItem('calc', calculation);
  console.log('Cleared.');
}