/* Declaring and changing the style of main elements */

const board = document.querySelector('#pixel-board');
const boardStyle = board.style;
boardStyle.display = 'block';
boardStyle.maxHeight = '220px';
boardStyle.maxWidth = '220px';
const colorPalette = document.getElementById('color-palette');
colorPalette.style.display = 'block';

/* Generating board and changing pixels' cursor style */

function generateBoard(boardLines) {
  for (let i = 0; i < boardLines * boardLines; i += 1) {
    const generatePixel = document.createElement('div');
    generatePixel.classList = 'pixel';
    board.appendChild(generatePixel);
  }
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

/* Removing board in order to create a new board */

function removeBoard() {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].remove();
  }
}

/* Creating an input bar to generate a new board with
a chosen number between 5 and 50, including 5 and 50 */

function selectNewBoardSize() {
  const generateBoardInput = document.createElement('input');
  generateBoardInput.id = 'board-size';
  generateBoardInput.min = 1;
  generateBoardInput.max = 50;
  generateBoardInput.placeholder = 'Alterar tamanho do quadro';
  generateBoardInput.type = 'number';
  generateBoardInput.style.display = 'inline-block';
  generateBoardInput.style.padding = '5px';
  generateBoardInput.style.width = '195px';
  document.body.insertBefore(generateBoardInput, board);
  const generateBoardButton = document.createElement('button');
  generateBoardButton.id = 'generate-board';
  generateBoardButton.innerText = 'VQV';
  generateBoardButton.style.padding = '5px';
  document.body.insertBefore(generateBoardButton, board);
}

/* Generating a new board with selectBoardSize's input */

function generateNewBoard() {
  const boardSize = document.querySelector('#board-size').value;
  boardSize.min = 5;
  boardSize.max = 50;
  if (boardSize === ''/*  || boardSize == 0 */) {
    alert('Board inválido!');
  } else if (boardSize < 5) {
    removeBoard();
    generateBoard(5);
  } else if (boardSize > 50) {
    removeBoard();
    generateBoard(50);
  } else {
    removeBoard();
    generateBoard(boardSize);
  }
  paintPixelClicking();
}

function generateNewBoardClicking() {
  const boardButton = document.querySelector('#generate-board');
  boardButton.addEventListener('click', generateNewBoard);
}

/* Removing and selecting a color */

function selectColor(selectedColor) {
  const color = document.querySelectorAll('.color');
  color.forEach((item) => {
    item.classList.remove('selected');
  });
  selectedColor.target.classList.add('selected');
}

function selectColorClicking() {
  const color = document.querySelectorAll('.color');
  color.forEach((item) => {
    item.addEventListener('click', selectColor);
  });
}

/* Cleaning the board with a button and changing its style */

function createClearButton() {
  const generateClearButton = document.createElement('button');
  generateClearButton.id = 'clear-board';
  generateClearButton.innerText = 'Limpar';
  document.body.insertBefore(generateClearButton, board);
  function changeClearButtonStyle() {
    generateClearButton.onmouseover = function buttonColorIce() {
      generateClearButton.style.backgroundColor = '#c6dff3';
      generateClearButton.style.cursor = 'pointer';
    };
    generateClearButton.onmouseout = function buttonColorWhite() {
      generateClearButton.style.backgroundColor = 'white';
    };
  }
  changeClearButtonStyle();
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

/* Selecting black as the standard color */

function generateBlackColor() {
  const insertBlackColor = document.createElement('div');
  insertBlackColor.classList.add('color');
  insertBlackColor.classList.add('selected');
  insertBlackColor.style.background = 'black';
  colorPalette.appendChild(insertBlackColor);
}

/* Choosing 3 random colors to be shown in the color palette along
with the black color using hexcolor numbers and letters (using
only numbers is also possible) */

/* Source: https://www.codegrepper.com/code-examples/javascript/random+letter+in+javascript+generator */
function generateRandomColor() {
  let randomColor = '#';
  const hexCharacters = '0123456789ABCDEF';
  for (let i = 0; i < 6; i += 1) {
    randomColor += hexCharacters.charAt(Math.random() * hexCharacters.length);
  }
  return randomColor;
}

function changeRandomColor(numberColors) {
  let standardNumberColors = numberColors;
  standardNumberColors = 3;
  for (let i = 0; i < standardNumberColors; i += 1) {
    const insertRandomColor = document.createElement('div');
    insertRandomColor.classList.add('color');
    insertRandomColor.classList.add('created-color');
    insertRandomColor.style.background = generateRandomColor();
    colorPalette.appendChild(insertRandomColor);
  }
}

/* Changing colors from the palette color */

function removeRandomColor() {
  const insertedRandomColor = document.querySelectorAll('.created-color');
  if (insertedRandomColor.length >= 3) {
    for (let i = 0; i < insertedRandomColor.length; i += 1) {
      insertedRandomColor[i].remove();
    }
  }
}

function changeRandomColorClicking() {
  const generateChangeColorButton = document.createElement('button');
  generateChangeColorButton.id = 'color-button';
  generateChangeColorButton.innerText = 'Gerar paleta de cores aleatoriamente';
  generateChangeColorButton.style.display = 'block';
  generateChangeColorButton.style.padding = '5px';
  const boardSize = document.querySelector('#board-size');
  document.body.insertBefore(generateChangeColorButton, boardSize);
  generateChangeColorButton.addEventListener('click', removeRandomColor);
  generateChangeColorButton.addEventListener('click', changeRandomColor);
  generateChangeColorButton.addEventListener('click', selectColorClicking);
}

/* Adding new colors to the palette without removing
any color and limiting the amount of colors to 200 */

function randomColorsAmount() {
  const generateAddColorInput = document.createElement('input');
  generateAddColorInput.id = 'add-color-input';
  generateAddColorInput.placeholder = 'Quantidade de novas cores';
  generateAddColorInput.type = 'number';
  generateAddColorInput.value = '1';
  document.body.insertBefore(generateAddColorInput, colorPalette);
  const generateAddColorButton = document.createElement('button');
  generateAddColorButton.id = 'add-color-button';
  generateAddColorButton.innerHTML = 'Adicionar novas cores à paleta atual';
  document.body.insertBefore(generateAddColorButton, colorPalette);
}

function limitColorsAmount() {
  const insertedRandomColor = document.querySelectorAll('.created-color');
  if (insertedRandomColor.length > 200) {
    for (let i = 201; i <= insertedRandomColor.length; i += 1) {
      insertedRandomColor[i].remove();
    }
  }
}

function randomColorsAmoutClicking() {
  const addColorButton = document.querySelector('#add-color-button');
  addColorButton.addEventListener('click', changeRandomColor);
  addColorButton.addEventListener('click', limitColorsAmount);
}

/* Loading webpage and invoking functions */

window.onload = function startingPixelArt() {
  selectNewBoardSize();
  createClearButton();
  generateBlackColor();
  generateBoard(5);
  generateNewBoardClicking();
  changeRandomColor();
  changeRandomColorClicking();
  randomColorsAmount();
  randomColorsAmoutClicking();
  paintPixelClicking();
  clearBoardClicking();
  selectColorClicking();
};
