createGrid();

const button = document.querySelector('button');
button.addEventListener('click', function() {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => item.style.backgroundColor = 'white');
});

function createGrid() {
    const container = document.querySelector('#container');
    console.log(container);

    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            const div = document.createElement('div');
            div.setAttribute('class', 'grid-item');
            div.setAttribute('data-grid', `[${i},${j}]`)
            div.addEventListener('mouseover', (e) => e.target.style.backgroundColor = 'black');
            container.appendChild(div);
        }
        
    }
}