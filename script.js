const container = document.getElementById("grid");

function createGrid(size) {

    container.innerHTML = ""; 

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
    }

}

const button = document.getElementById("button")
button.addEventListener("click", function() {
    let gridSize = parseInt(prompt("Please enter grid size (e.g., 2 for 2x2):"), 10);

    if (gridSize < 0 | gridSize > 100) {
        alert("Please enter a valid number between 1 and 100.")
        return
    }

    createGrid(gridSize)
})

createGrid(16) // The normal