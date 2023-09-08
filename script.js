const container = document.querySelector(".container")
const gridColumn = (document.createElement("div"))
const gridPiece = document.createElement("div")
gridColumn.classList.toggle("gridColumn")
gridPiece.classList.toggle("gridPiece")
const resetButton = document.querySelector(".reset-button")

resetButton.addEventListener("click", reset)

function reset() {
    while(container.firstChild) {
        container.removeChild(container.firstChild)
    }
    while(gridColumn.firstChild){
        gridColumn.removeChild(gridColumn.firstChild)
    }
    while(gridPiece.firstChild){
        gridPiece.removeChild(gridPiece.firstChild)
    }
    let numSetGrid = +prompt("Digita un numero no mayor a 100")
    if (numSetGrid <= 100) {
    setGridColumn(numSetGrid)
    setGridRow(numSetGrid)
    } else {
        alert("Try Again")
    }
    addHoverClass()
}

function setGridColumn(amountGridPiece){
    for (let i = 0; i < amountGridPiece; i++) {
        gridColumn.appendChild(gridPiece.cloneNode(true))
    }
    container.appendChild(gridColumn)
}

function setGridRow(amountRowGrid) {
    for (let i = 0; i < amountRowGrid-1; i++) {
        container.appendChild(gridColumn.cloneNode(true))
    }
}

function addHoverClass(){
    const tempGridPiece = document.querySelectorAll(".gridPiece")
    tempGridPiece.forEach(element => {
        element.addEventListener("mouseover", (e) => {
            e.target.classList.toggle("setHover")
        })
    });
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
