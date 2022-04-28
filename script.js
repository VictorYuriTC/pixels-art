/* Generating board and changing pixels' cursor style */

function generateBoard() {
  const board = document.getElementById('pixel-board');
  const boardLines = 5;
  for (let i = 0; i < boardLines * boardLines; i += 1) {
    const generatePixel = document.createElement('div');
    generatePixel.classList = 'pixel';
    generatePixel.style.backgroundColor = 'white';
    board.appendChild(generatePixel);
  }
  const generateInput = document.createElement('input');
  generateInput.id = 'board-size';
  generateInput.placeholder = 'Change board size';
  generateInput.style.width = '140px';
  document.body.insertBefore(generateInput, board);
  const generateButton = document.createElement('button');
  generateButton.id = 'generate-board';
  generateButton.innerText = 'VQV';
  document.body.insertBefore(generateButton, board);
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

/* Cleaning the board with a button and changing its style */

function createButton() {
  const board = document.getElementById('pixel-board');
  const generateButton = document.createElement('button');
  generateButton.id = 'clear-board';
  generateButton.innerText = 'Limpar';
  generateButton.style.display = 'block';
  generateButton.style.padding = '5px';
  document.body.insertBefore(generateButton, board);
/*   function changeButtonStyle() {
    const button = document.getElementById('clear-board');
    button.onmouseover = function buttonColorIce() {
      button.style.backgroundColor = '#c6dff3';
      button.style.cursor = 'pointer';
    };
    button.onmouseout = function buttonColorWhite() {
      button.style.backgroundColor = 'white';
    };
  }
  changeButtonStyle(); */
}

function resetButton() {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
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
