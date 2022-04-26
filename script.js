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
  const black = document.getElementById('color-black').style.backgroundColor;
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

function paintPixels() {
  const pixel = document.querySelectorAll('.pixel');
  const selectedColor = document.querySelectorAll('.selected').style.backgroundColor;
  const paintingColor = selectedColor.backgroundColor;
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].backgroundColor = paintingColor;
    console.log('oi');
  }
}

function paintPixelsClicking() {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', paintPixels);
  }
}
paintPixelsClicking();

/* Changing the cursor appeareance to its selected color */

/* function changeCursor(cursorColor) {
  const allColors = document.querySelectorAll('.color');
  allColors.forEach((item) => {
    item.classList.remove('selected');
  });
}
changeCursor(); */

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
