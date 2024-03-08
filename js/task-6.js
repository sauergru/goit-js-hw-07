function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector('#controls');
const input = controls.querySelector('input[type="number"]');
const createBtn = controls.querySelector('button[data-create]');
const destroyBtn = controls.querySelector('button[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

createBtn.addEventListener('click', handleBtn);
destroyBtn.addEventListener('click', destroyBoxes);

function handleBtn() {
  const amount = parseInt(input.value);
  if (amount >= 1 && amount <= 100) {
    destroyBoxes();
    createBoxes(amount);
    input.value = '';
  }
}

function createBoxes(amount) {
  const boxesHTML = [];
  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    const color = getRandomHexColor();
    boxesHTML.push(`<div style="width: ${size}px; height: ${size}px; background-color: ${color};"></div>`);
  }
  boxesContainer.insertAdjacentHTML('beforeend', boxesHTML.join(''));
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}
