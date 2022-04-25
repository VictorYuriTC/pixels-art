const black = document.getElementById('color-black');
const red = document.getElementById('color-red');
const pink = document.getElementById('color-pink');
const purple = document.getElementById('color-purple');

const color = document.querySelectorAll('.color');
const pixel = document.querySelectorAll('.pixel');
const reset = document.getElementById('clear-board');

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

reset.onclick = function resetBoard() {
  pixel.style.backgroundColor = 'white';
};
