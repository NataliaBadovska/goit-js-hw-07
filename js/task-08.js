const input = document.querySelector('input');
const btnRender = document.querySelector('[data-action="render"]');
const btnDestroy = document.querySelector('[data-action="destroy"]');
const boxes = document.querySelector('#boxes');

btnRender.addEventListener('click', createBoxes);
btnDestroy.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
    amount = input.value;
    let width = 30;
    
    for (let i = 0; i < amount; i += 1){
        
        const div = document.createElement('div');
        //div.style.width = '' + (width + i*10) +'px';
        div.style.width = '' + width +'px';
        div.style.height = div.style.width; 
        div.style.backgroundColor = getRandomColor();
        boxes.appendChild(div);
      
        width = width + 10;
    }
}

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i += 1) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function destroyBoxes(event) {
    boxes.innerHTML = '';
}

