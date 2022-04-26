const black = document.getElementById('color-black');
const red = document.getElementById('color-red');
const pink = document.getElementById('color-pink');
const purple = document.getElementById('color-purple');

const color = document.getElementsByClassName('color');
const board = document.getElementById('pixel-board');

for (let i = 0; i < 25; i += 1) {
  const newPixel = document.createElement('li');
  newPixel.className = 'pixel';
  board.appendChild(newPixel);
}

window.onload = function startPixelArt() {
  return black.classList.toggle('selected');
};

const colors = [black, red, pink, purple];

color.onclick = function searchSelectedColor() {
  black.classList.remove('selected');
  for (let i = 0; i < colors.length; i += 1) {
    colors[i].onclick = function changeSelectedColor() {
      return colors[i].classList.toggle('selected');
    };
  }
};

const reset = document.getElementById('clear-board');

reset.onmouseover = function buttonIce() {
  reset.style.background = '#ace2ef';
};

reset.onmouseleave = function buttonWhite() {
  reset.style.background = 'white';
};
