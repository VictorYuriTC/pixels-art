const black = document.getElementById('color-black');
const red = document.getElementById('color-red');
const pink = document.getElementById('color-pink');
const purple = document.getElementById('color-purple');
const board = document.getElementById('pixel-board');

/* A loop for created to generate pixels using appendChild */

for (let i = 0; i < 25; i += 1) {
  const newPixel = document.createElement('li');
  newPixel.className = 'pixel';
  board.appendChild(newPixel);
}

/* Starting the pixel art project with the color black selected */

window.onload = function startPixelArt() {
  black.classList.toggle('selected');
};

/* Function to change the selected color */

function changeColor(event) {
  black.classList.remove('selected');
  red.classList.remove('selected');
  pink.classList.remove('selected');
  purple.classList.remove('selected');
  event.target.classList.add('selected');
}

document.querySelectorAll('.color').forEach((item) => {
  item.addEventListener('click', changeColor);
});

/* Lines to create the reset button */

const reset = document.createElement('button');
reset.id = 'clear-board';
reset.innerText = 'Limpar';
document.body.insertBefore(reset, board);

/* Lines to change the button style */

reset.onmouseover = function buttonIce() {
  reset.style.background = '#ace2ef';
  reset.style.cursor = 'pointer';
};

reset.onmouseleave = function buttonWhite() {
  reset.style.background = 'white';
};

/* Adding an event listener to the reset button */

function resetColors() {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}

const clearBoard = document.querySelector('#clear-board');
function clear() {
  clearBoard.addEventListener('click', resetColors);
}
clear();
