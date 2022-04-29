/* Declaration and CSS of main elements */

const board = document.querySelector('#pixel-board');
const boardStyle = board.style;
boardStyle.display = 'block';
boardStyle.height = '220px';
boardStyle.width = '220px';
const colorPalette = document.getElementById('color-palette');
colorPalette.style.display = 'block';

/* Generating board and changing pixels' cursor style */

function generateBoard(boardLines) {
  for (let i = 0; i < boardLines * boardLines; i += 1) {
    const generatePixel = document.createElement('div');
    generatePixel.classList = 'pixel';
    generatePixel.style.backgroundColor = 'white';
    generatePixel.style.border = 'black solid 1px';
    generatePixel.style.cursor = 'cell';
    generatePixel.style.display = 'inline-block';
    generatePixel.style.height = '40px';
    generatePixel.style.width = '40px';
    board.appendChild(generatePixel);
  }
}

/* Creating an input bar to generate a new board with
a chosen number between 5 and 50, including 5 and 50 */

/* function selectNewBoardSize() {
  const generateInput = document.createElement('input');
  generateInput.id = 'board-size';
  generateInput.min = '5';
  generateInput.max = '50';
  generateInput.placeholder = 'Change board size';
  generateInput.type = 'number';
  generateInput.style.display = 'inline-block';
  generateInput.style.width = '140px';
  document.body.insertBefore(generateInput, board);
  const generateBoardButton = document.createElement('button');
  generateBoardButton.id = 'generate-board';
  generateBoardButton.innerText = 'VQV';
  document.body.insertBefore(generateBoardButton, board);
}
selectNewBoardSize(); */

/* Removing board in order to create a new board */

function removeBoard() {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].remove();
  }
}

/* Generating a new board with selectBoardSize's input */

function generateNewBoard() {
  const boardSize = document.querySelector('#board-size').value;
  const newBoard = Number(boardSize);
  if (boardSize === '' && boardSize === 0) {
    alert('Board inválido!');
  } else {
    removeBoard();
    generateBoard(newBoard);
  }
}

function generateNewBoardClicking() {
  const boardButton = document.querySelector('#generate-board');
  boardButton.addEventListener('click', generateNewBoard);
}

/* Defining "black" as standard selected color */

function standardColor() {
  const black = document.getElementById('black');
  black.classList.toggle('selected');
}

/* Removing and selecting a color */

function selectColor(selectedColor) {
  const allColors = document.querySelectorAll('.color');
  allColors.forEach((item) => {
    item.classList.remove('selected');
  });
  selectedColor.target.classList.add('selected');
}

function selectColorClicking() {
  const allColors = document.querySelectorAll('.color');
  allColors.forEach((item) => {
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

function createClearButton() {
  const generateClearButton = document.createElement('button');
  generateClearButton.id = 'clear-board';
  generateClearButton.innerText = 'Limpar';
  generateClearButton.style.display = 'block';
  generateClearButton.style.padding = '5px';
  document.body.insertBefore(generateClearButton, board);
/*   function changeClearButtonStyle() {
    const clearButton = document.getElementById('clear-board');
    clearButton.onmouseover = function buttonColorIce() {
      clearButton.style.backgroundColor = '#c6dff3';
      clearButton.style.cursor = 'pointer';
    };
    clearButton.onmouseout = function buttonColorWhite() {
      clearButton.style.backgroundColor = 'white';
    };
  }
  changeClearButtonStyle(); */
}

function clearBoard() {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}

function clearBoardClicking() {
  const clearButton = document.getElementById('clear-board');
  clearButton.addEventListener('click', clearBoard);
}

/* Loading webpage and invoking functions */

window.onload = function startingPixelArt() {
  createClearButton();
  generateBoard(5);
  generateNewBoardClicking();
  paintPixelClicking();
  clearBoardClicking();
  selectColorClicking();
  standardColor();
};
