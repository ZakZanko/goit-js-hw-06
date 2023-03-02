document.body.style.backgroundColor = '#abbbc4';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controls = document.querySelector('controls');
const inputNumberEl = document.querySelector('[type="number"]');
const createBtnEl = document.querySelector('button[data-create]');
const destroyBtnEl = document.querySelector('button[data-destroy]');
const divBoxesEl = document.getElementById('boxes');
divBoxesEl.style.display = 'flex';
divBoxesEl.style.flexWrap = 'wrap';
divBoxesEl.style.alignItems = 'center';
divBoxesEl.style.marginTop = '30px';

inputNumberEl.addEventListener('input', toogleValue);
createBtnEl.addEventListener('click', () => {
  createBoxes(Number(inputNumberEl.value));
});
destroyBtnEl.addEventListener('click', destroyBoxesMarkup);

let inputValue = 0;
function toogleValue(event) {
  inputValue = event.currentTarget.value;
  console.log(inputValue);
}

function createBoxes(amount) {
  let divArray = [];
  let sizeDefault = 30;
  for (let i = 0; i < amount; i += 1) {
    sizeDefault += 10;
    const divElement = document.createElement('div');
    divElement.classList = 'item';
    divElement.style.height = `${sizeDefault}px`;
    divElement.style.width = `${sizeDefault}px`;
    divElement.style.marginRight = '30px';
    divElement.style.marginBottom = '30px';
    divElement.style.backgroundColor = getRandomHexColor();
    divArray.push(divElement);
    // divBoxesEl.appendChild(divElement);
  }
  return divBoxesEl.append(...divArray);
}

function destroyBoxesMarkup() {
  inputNumberEl.value = '';
  return (divBoxesEl.innerHTML = '');
}