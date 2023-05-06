const columns = 16;
const rows = 16;

const container = document.querySelector('.container');

const grid = document.createElement('div');
grid.className = 'grid';

function giveColor(event) {
    event.target.style.backgroundColor = 'black';
    console.log('colored');
}

for (var i = 0; i < columns; ++i) {
    var column = document.createElement('div'); // create column
    column.className = 'column';
    for (var j = 0; j < rows; ++j) {
        var row = document.createElement('div'); // create row
        row.className = 'row';
        column.appendChild(row); // append row in column
    }
    grid.appendChild(column); // append column inside grid
}
container.appendChild(grid);
const pixel = document.querySelectorAll('.row');
console.log(pixel);
pixel.forEach((pixel) => {
    pixel.addEventListener('mouseenter', giveColor);
  });
