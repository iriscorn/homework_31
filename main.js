const mainHeight = window.innerHeight - 100;
const mainWidth = window.innerWidth - 100;
const block = document.querySelector(".block");

function getRandomColor() {
    return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
}

setInterval(()=> {
    block.style.backgroundColor = getRandomColor();
}, 500);

setInterval(()=> {
    block.style.top = Math.floor(Math.random() * mainHeight) + "px";
    block.style.left = Math.floor(Math.random() * mainWidth) + "px";
}, 1000);