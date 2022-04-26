/* Getting the colors' ids and the board id */

const black = document.getElementById('color-black');

/* Creating a loop to generate pixels using appendChild */

const boardLines = 5;
for (let i = 0; i < boardLines * boardLines; i += 1) {
  const board = document.getElementById('pixel-board');
  const pixel = document.createElement('div');
  pixel.className = 'pixel';
  board.appendChild(pixel);
}

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

/* Coding lines to create the reset button */

function createButton() {
  const board = document.getElementById('pixel-board');
  const reset = document.createElement('button');
  reset.id = 'clear-board';
  reset.innerText = 'Limpar';
  document.body.insertBefore(reset, board);
}
createButton();

/* Changing the button style */

function changeButton() {
  const reset = document.createElement('button');
  reset.onmouseover = function buttonIce() {
    reset.style.background = '#ace2ef';
    reset.style.cursor = 'pointer';
  };
  reset.onmouseleave = function buttonWhite() {
    reset.style.background = 'white';
  };
}
changeButton();

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
