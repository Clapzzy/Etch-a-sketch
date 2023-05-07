const container = document.querySelector('.container');
const resetBtn = document.querySelector('.reset');
const slider = document.querySelector('#slider');
const output = document.querySelector('#output');
const grid = document.createElement('div');
grid.classList.add('grid');

let size = 32;

make_grid();

function make_grid() {
  grid.style.gridTemplateColumns = `repeat(${slider.value}, 1fr)`
  grid.style.gridTemplateRows = `repeat(${slider.value}, 1fr)`;
  console.log(slider.value);
  container.appendChild(grid);
  for(let i = 0; i < slider.value * slider.value; i++){
    const row = document.createElement('div');
    row.classList.add('row');
    row.addEventListener('mouseenter', handlePixelHover);
    row.addEventListener('mousedown', handlePixelHover);
    grid.appendChild(row);
  }
}

function handlePixelHover(event) {
  event.target.style.backgroundColor = 'black';
}

const pixels = document.querySelectorAll('.row');
resetBtn.addEventListener('click', () => {
  grid_remove();
  make_grid();
});

function grid_remove(){
  grid.innerHTML = '';
}

function handleSliderChange() {
  const sliderValue = slider.value;
  output.textContent = `${sliderValue} x ${sliderValue}`;
}
slider.addEventListener('input', () => {
  handleSliderChange();
  grid_remove();
  make_grid();
});


