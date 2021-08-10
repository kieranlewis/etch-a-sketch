createGrid();

function createGrid() {
    const container = document.querySelector('#container');
    console.log(container);

    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            const div = document.createElement('div');
            div.textContent = `Div: [${i},${j}]`;
            console.log(div);
            container.appendChild(div);
        }
        
    }
}