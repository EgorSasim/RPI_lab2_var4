let $leftShiftArrow = document.querySelector('.main-slider-control-panel-arrow-part-left-arrow');
let $rightShiftArrow = document.querySelector('.main-slider-control-panel-arrow-part-right-arrow');

$mvLine = document.getElementById('mvLine');


function shiftRight(container){
    let last = container.children[container.children.length - 1];
    container.insertBefore(last, container.children[0]);
}

function shiftLeft(container){
    let first = container.children[0];
    container.insertBefore(first, container.children[container.children.length]);
}

$rightShiftArrow.onclick = () => {
    shiftRight($mvLine);
    shiftRight($mvLine);
}

$leftShiftArrow.onclick = () =>{
    shiftLeft($mvLine); 
    shiftLeft($mvLine);
}

document.addEventListener('keydown', (event) => {
    if (event.keyCode == 37){
        shiftLeft($mvLine);
        shiftLeft($mvLine);
    }
    if(event.keyCode == 39){
        shiftRight($mvLine);
        shiftRight($mvLine)
        
    }
})