createGrid(16);
let currentColor = 'black';

const clearButton = document.querySelector('#btn-clear');
clearButton.addEventListener('click', function() {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => item.style.setProperty('--base', 'white'));
});

const eraserButton = document.querySelector('#btn-erase');
eraserButton.addEventListener('click', () => {
    currentColor = 'white';
    eraserButton.classList.toggle('active');
});

const rainbowButton = document.querySelector('#btn-rainbow');
rainbowButton.addEventListener('click', () => {
    currentColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    rainbowButton.classList.toggle('active');
});

const colorSelect = document.querySelector('#color-select');
colorSelect.addEventListener('change', () => currentColor = colorSelect.value);

const sizeSlider = document.querySelector('#size-slider');
const sizeSliderLabel = document.querySelector('#lbl-size');
sizeSlider.addEventListener('change', () => {
    createGrid(sizeSlider.value)
    sizeSliderLabel.textContent = sizeSlider.value + "x" + sizeSlider.value;
});
sizeSlider.addEventListener('mousemove', () => sizeSliderLabel.textContent = sizeSlider.value + "x" + sizeSlider.value);

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
            div.addEventListener('mouseover', (e) => {
                if(rainbowButton.classList.contains('active')) {
                    currentColor = "#" + Math.floor(Math.random()*16777215).toString(16);
                } else if (eraserButton.classList.contains('active')) {
                    currentColor = "white";
                }
                e.target.style.setProperty('--base', currentColor);
            });
            container.appendChild(div);
        }
        
    }
}