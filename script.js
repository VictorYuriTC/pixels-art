/* Generating board */

function generateBoard() {
  const boardLines = 5;
  for (let i = 0; i < boardLines * boardLines; i += 1) {
    const board = document.getElementById('pixel-board');
    const generatePixel = document.createElement('div');
    generatePixel.classList = 'pixel';
    generatePixel.style.backgroundColor = 'white';
    board.appendChild(generatePixel);
  }
}

/* Defining "black" as standard selected color */

function standardColor() {
  const black = document.getElementById('black');
  black.classList.toggle('selected');
}

/* Removing and selecting a color */

function selectColor(selectedColor) {
  const colors = document.querySelectorAll('.color');
  colors.forEach((item) => {
    item.classList.remove('selected');
  });
  selectedColor.target.classList.add('selected');
}

function selectColorClicking() {
  const colors = document.querySelectorAll('.color');
  colors.forEach((item) => {
    item.addEventListener('click', selectColor);
  });
}

/* Painting pixels */

function paintPixel(event) {
  const selected = document.querySelector('.selected');
  const selectedColor = window.getComputedStyle(selected);
  const cssColor = selectedColor.getPropertyValue('background-color');
  const paintedPixel = event;
  paintedPixel.target.style.backgroundColor = cssColor;
}

function paintPixelClicking() {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', paintPixel);
  }
}

/* Adding a button to clear the entire board */

function createButton() {
  const board = document.getElementById('pixel-board');
  const generateButton = document.createElement('button');
  generateButton.id = 'clear-board';
  generateButton.innerText = 'Limpar';
  generateButton.style.display = 'block';
  document.body.insertBefore(generateButton, board);
}

function resetButton() {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
    document.body.style.backgroundColor = 'white';
  }
}

function resetButtonClicking() {
  const button = document.getElementById('clear-board');
  button.addEventListener('click', resetButton);
}

/* Loading webpage and invoking functions */

window.onload = function startingPixelArt() {
  createButton();
  generateBoard();
  paintPixelClicking();
  resetButtonClicking();
  selectColorClicking();
  standardColor();
};
