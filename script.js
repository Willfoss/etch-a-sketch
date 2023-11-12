let grid = document.querySelector("#grid");

function createGrid(size) {
    grid.style.gridTemplateColumns=`repeat(${size},1fr)`;
    grid.style.gridTemplateRows=`repeat(${size},1fr)`;
    for (let i=1; i<=size*size; i++){
        const square = document.createElement("div");
        square.classList.add("gridSquare");
        //square.style.backgroundColor("white");
        square.addEventListener("mouseover", changeColour);
        grid.appendChild(square);
    }
}

function changeColour(e) {
    if (e.type==="mouseover"){
        e.target.style.backgroundColor = "grey";
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
