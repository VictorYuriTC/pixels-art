/* Declaring and changing the style of main elements */

const board = document.querySelector('#pixel-board');
const boardStyle = board.style;
boardStyle.display = 'block';
boardStyle.height = '220px';
boardStyle.width = '220px';
const colorPalette = document.getElementById('color-palette');
colorPalette.style.display = 'block';

/* Chosing 3 random colors to be shown in the color palette
along with the black color (only using numbers) */

/* function to be added */

/* Chosing 3 random colors to be shown in the color palette
along with the black color (using numbers and letters */

function generateBlackColor() {
  const insertBlackColor = document.createElement('div');
  insertBlackColor.classList.add('color');
  insertBlackColor.classList.add('selected');
  insertBlackColor.style.background = 'black';
  colorPalette.appendChild(insertBlackColor);
}

/* Source: https://www.codegrepper.com/code-examples/javascript/random+letter+in+javascript+generator */
function generateRandomColor() {
  let randomColor = `${'#'}`;
  const hexCharacters = '0123456789ABCDEF';
  for (let i = 0; i < 6; i += 1) {
    randomColor += hexCharacters.charAt(Math.random() * hexCharacters.length);
  }
  return randomColor;
}

function changeRandomColor() {
  for (let i = 0; i < 3; i += 1) {
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
  const colorButton = document.createElement('button');
  colorButton.id = 'color-button';
  colorButton.innerText = 'Gerar paleta de cores aleatoriamente';
  colorButton.style.display = 'block';
  colorButton.style.padding = '5px';
  const boardSize = document.querySelector('#board-size');
  document.body.insertBefore(colorButton, boardSize);
  colorButton.addEventListener('click', removeRandomColor);
  colorButton.addEventListener('click', changeRandomColor);
}

/* Generating board and changing pixels' cursor style */

function generateBoard(boardLines) {
  for (let i = 0; i < boardLines * boardLines; i += 1) {
    const generatePixel = document.createElement('div');
    generatePixel.classList = 'pixel';
    generatePixel.style.backgroundColor = 'white';
    generatePixel.style.border = 'black solid 1px';
    generatePixel.style.cursor = 'cell';
    generatePixel.style.display = 'inline-block';
    generatePixel.style.height = '2.5em';
    generatePixel.style.width = '2.5em';
    board.appendChild(generatePixel);
  }
}

/* Removing board in order to create a new board */

function removeBoard() {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].remove();
  }
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

/* Creating an input bar to generate a new board with
a chosen number between 5 and 50, including 5 and 50 */

function selectNewBoardSize() {
  const generateInput = document.createElement('input');
  generateInput.id = 'board-size';
  generateInput.min = 1;
  generateInput.max = 50;
  generateInput.placeholder = 'Alterar tamanho do quadro';
  generateInput.type = 'number';
  generateInput.style.display = 'inline-block';
  generateInput.style.padding = '5px';
  generateInput.style.width = '180px';
  document.body.insertBefore(generateInput, board);
  const generateBoardButton = document.createElement('button');
  generateBoardButton.id = 'generate-board';
  generateBoardButton.innerText = 'VQV';
  generateBoardButton.style.padding = '5px';
  document.body.insertBefore(generateBoardButton, board);
}
selectNewBoardSize();

/* Generating a new board with selectBoardSize's input */

function generateNewBoard() {
  const boardSize = document.querySelector('#board-size').value;
  boardSize.min = 5;
  boardSize.max = 50;
  const newBoard = Number(boardSize);
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
    generateBoard(newBoard);
  }
  paintPixelClicking();
}

function generateNewBoardClicking() {
  const boardButton = document.querySelector('#generate-board');
  boardButton.addEventListener('click', generateNewBoard);
}

/* Loading webpage and invoking functions */

window.onload = function startingPixelArt() {
  createClearButton();
  generateBlackColor();
  generateBoard(5);
  generateNewBoardClicking();
  changeRandomColor();
  changeRandomColorClicking();
  paintPixelClicking();
  clearBoardClicking();
  selectColorClicking();
};
