/* Getting the colors' ids and the board id */

const black = document.getElementById('color-black');

/* Creating a loop to generate pixels using appendChild */

function generateBoard() {
  const boardLines = 5;
  for (let i = 0; i < boardLines * boardLines; i += 1) {
    const board = document.getElementById('pixel-board');
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    board.appendChild(pixel);
  }
}
generateBoard();

/* Starting the pixel art project with the color black selected */

window.onload = function startPixelArt() {
  black.classList.toggle('selected');
};

/* Creating a function to change the selected color */

function changeColor(newColor) {
  const allColors = document.querySelectorAll('.color');
  allColors.forEach((item) => {
    item.classList.remove('selected');
  });
  newColor.target.classList.add('selected');
}
function changeColorClicking() {
  const allColors = document.querySelectorAll('.color');
  allColors.forEach((item) => {
    item.addEventListener('click', changeColor);
  });
}
changeColorClicking();

/* Creating a function to paint the pixels according to the selected color */

function paintPixel() {
  const pixel = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].addEventListener('click', changeColorClicking);
  }
}
paintPixel();

/* Creating the reset button and changing its style */

function createButton() {
  const resetButton = document.createElement('button');
  const board = document.getElementById('pixel-board');
  resetButton.id = 'clear-board';
  resetButton.innerText = 'Limpar';
  document.body.insertBefore(resetButton, board);

  function changeButton() {
    resetButton.onmouseover = function buttonIce() {
      resetButton.style.background = '#ace2ef';
      resetButton.style.cursor = 'pointer';
    };
    resetButton.onmouseleave = function buttonWhite() {
      resetButton.style.background = 'white';
    };
  }
  changeButton();
}
createButton();

/* Adding an event listener to the reset button */

function resetBoard() {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}

function clear() {
  const clearBoard = document.querySelector('#clear-board');
  clearBoard.addEventListener('click', resetBoard);
}
clear();
