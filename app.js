const body = document.querySelector('body');
const buttons = document.querySelectorAll('button');
const headings = document.querySelectorAll('h1');

const returnRandomRBG =()=>{
    let r = Math.floor((Math.random()*255));
    let g = Math.floor((Math.random()*255));
    let b = Math.floor((Math.random()*255));
    return `rgb(${r},${g},${b})`;
}

function colorRandomly() {
    this.style.backgroundColor = returnRandomRBG();
    this.style.color = returnRandomRBG();
}

for (let button of buttons) {
    button.addEventListener('click', colorRandomly)
}

for (let heading of headings) {
    heading.addEventListener('click', colorRandomly)
}


