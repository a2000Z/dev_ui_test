document.addEventListener('DOMContentLoaded', () => {
  generateKeypad();
});

function generateKeypad() {
  const keypad = document.getElementById('keypad');
  keypad.innerHTML = '';
  const numbers = [...Array(10).keys()];
  shuffleArray(numbers);

  numbers.forEach(number => {
    const button = document.createElement('button');
    button.textContent = number;
    button.addEventListener('click', () => appendNumber(number));
    keypad.appendChild(button);
  });
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function appendNumber(number) {
  const inputField = document.getElementById('inputField');
  inputField.value += number;
}

function clearInput() {
  document.getElementById('inputField').value = '';
}
