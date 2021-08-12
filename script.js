createGrid(16);
let currentColor = 'black';

const clearButton = document.querySelector('#btn-clear');
clearButton.addEventListener('click', function() {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => item.style.setProperty('--base', 'white'));

    const size = prompt('Enter size of grid');
    if (size >= 100) {
        alert('Too big!');
    } else {
        createGrid(size);
    }
});

function changeColor(color) {
    currentColor = color;
}

const eraserButton = document.querySelector('#btn-erase');
eraserButton.addEventListener('click', () => currentColor = 'white');

function createGrid(size) {
    const container = document.querySelector('#container');
    container.style.setProperty('--grid-cols', size);
    
    //deleting current grid
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }

    //creating new grid
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const div = document.createElement('div');
            div.setAttribute('class', 'grid-item');
            div.addEventListener('mouseover', (e) => e.target.style.setProperty('--base', currentColor));
            container.appendChild(div);
        }
        
    }
}