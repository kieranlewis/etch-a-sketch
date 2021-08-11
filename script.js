createGrid(16);

const button = document.querySelector('button');
button.addEventListener('click', function() {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => item.style.backgroundColor = 'white');

    const size = prompt('Enter size of grid');
    createGrid(size);
});

function createGrid(size) {
    const container = document.querySelector('#container');
    container.style.gridTemplateColumns = `repeat(${size}, 25px)`
    
    //deleting current grid
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }

    //creating new grid
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const div = document.createElement('div');
            div.setAttribute('class', 'grid-item');
            div.setAttribute('data-grid', `[${i},${j}]`)
            div.addEventListener('mouseover', (e) => e.target.style.backgroundColor = 'black');
            container.appendChild(div);
        }
        
    }
}