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
    addHoverClass()
    } else {
        alert("Try Again")
    }
    
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
    let tempGridPiece = document.querySelectorAll(".gridPiece")
    tempGridPiece.forEach(element => {
        element.addEventListener("mouseover", (e) => {
// Ejercicio "Extra Credit", despues de 10 iteraciones el cuadro debe quedar negro
            changeColor(e)
// Codigo para que los cuadros cambien de color aleatorio.
// primera parte "Extra Credit"
            // e.target.style.backgroundColor = 
            // `rgb(
            // ${randomNumber(0, 99)}, 
            // ${randomNumber(0, 99)}, 
            // ${randomNumber(0, 99)}
            // )`;
        })
    });
}

function changeColor(e){
    if (e.target.style.backgroundColor == "") {e.target.style.backgroundColor = rgbColor(100)} 
    
    switch (e.target.style.backgroundColor) {
        case rgbColor(100):
            e.target.style.backgroundColor = rgbColor(90)
            break;
            case rgbColor(90):
                e.target.style.backgroundColor = rgbColor(80)
                break;
                case rgbColor(80):
                    e.target.style.backgroundColor = rgbColor(70)
                    break;
                    case rgbColor(70):
                        e.target.style.backgroundColor = rgbColor(60)
                        break;
                        case rgbColor(60):
                            e.target.style.backgroundColor = rgbColor(50)
                            break;
                            case rgbColor(50):
                                e.target.style.backgroundColor = rgbColor(40)
                                break;
                                case rgbColor(40):
                                    e.target.style.backgroundColor = rgbColor(30)
                                    break;
                                    case rgbColor(30):
                                        e.target.style.backgroundColor = rgbColor(20)
                                        break;
                                        case rgbColor(20):
                                            e.target.style.backgroundColor = rgbColor(10)
                                            break;
                                            case rgbColor(10):
                                                e.target.style.backgroundColor = rgbColor(0)
                                                break;
    }
}
    
    
    // else if (e.target.style.backgroundColor == rgbColor(100)) {
    //     e.target.style.backgroundColor = rgbColor(90)
    // } else if (e.target.style.backgroundColor == rgbColor(90)) {
    //     e.target.style.backgroundColor = rgbColor(50)
    // }


    



function rgbColor(num1){
    return `rgb(${num1}, ${num1}, ${num1})`;
}


function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

