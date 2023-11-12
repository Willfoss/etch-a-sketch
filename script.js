let grid = document.querySelector("#grid");

function createGrid(size) {
    grid.style.gridTemplateColumns=`repeat(${size},1fr)`;
    grid.style.gridTemplateRows=`repeat(${size},1fr)`;
    for (let i=1; i<=size*size; i++){
        const square = document.createElement("div");
        square.classList.add("gridSquare");
        square.addEventListener("mouseover", changeColour);
        grid.appendChild(square);
    }
}

function changeColour(e) {
    let redValue = Math.floor(Math.random()*256);
    let greenValue = Math.floor(Math.random()*256);
    let blueValue = Math.floor(Math.random()*256);
    if (e.type==="mouseover"){
        e.target.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    }
}
window.onload = () => {
    createGrid(16);
}

let btn = document.querySelector("#size-button");
btn.addEventListener("click", howManySquares);

function howManySquares(){
    size = +prompt("How many squares per side should the grid contain? (max 100)", 16);
    clearGrid();
    createGrid(size);
    return (size);
}

function clearGrid(){
    grid.innerHTML="";
}
