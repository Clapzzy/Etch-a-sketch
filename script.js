const columns = 16;
const rows = 16;

const reset = document.querySelector('.reset');
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
pixel.forEach((pixel) => {
    pixel.addEventListener('mouseenter', giveColor);
});

console.log(reset);
reset.addEventListener('click', () => {
    console.log('test 1');
    pixel.forEach((pixel) => {
        console.log('test 2');
        if(pixel.style.backgroundColor == "black"){
            console.log('test 3');
            pixel.style.backgroundColor = '#c0c0c0';
        }
    });
})