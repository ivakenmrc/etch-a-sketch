let gridSize = 16;

const board = document.querySelector(".board");
const boardWidth = board.getBoundingClientRect().width;
const boardHeight = board.getBoundingClientRect().height;

const changeGridSizeButton = document.querySelector("#grid-size-btn");


board.addEventListener("mouseover", (e) => {
    const target = e.target;

    if (board.contains(target)) {
        colorize(target, "#333")
    }
})


changeGridSizeButton.addEventListener("click" , () => { 
    do {
        gridSize = Number(prompt("Choose size between 2 - 100"));
    } while (gridSize < 2 || gridSize > 100);

    updateGrid();
})



function updateGrid() {
    board.innerHTML = "";
    createGrid()
}


function createGrid() {
    
    for (let i = 0; i < gridSize ** 2; i++) {
        const div = document.createElement("div");
        div.style.width = boardWidth / gridSize + "px";
        div.style.height = boardHeight / gridSize + "px";
        board.appendChild(div);
    }
}

function colorize(target, color) {
    target.style.backgroundColor = color;
}


createGrid()