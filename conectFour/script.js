//selectors
let tableRow = document.getElementsByTagName('tr');
let tableCell = document.getElementsByTagName('td');
let tableSlot = document.querySelector('.slot');
let reset = document.querySelector(".reset");

for (let i = 0; i < tableCell.length; i++) {
    tableCell[i].addEventListener('click', (e) => {
        // console.log(`row${e.target.parentElement.rowIndex}, col${e.target.cellIndex}`);
    })
}

let currentPlayer = 1;

reset.addEventListener("click", startGame)
startGame()

function startGame(){
  Array.prototype.forEach.call(tableCell, (cell) => {
    cell.addEventListener("click", changeColor);
    cell.style.backgroundColor = "white";
})  
}



function changeColor(e) {

    let column = e.target.cellIndex;
    let row = [];
    for (let i = 5; i > -1; i--) {
        if (tableRow[i].children[column].style.backgroundColor === "white") {
            row.push(tableRow[i].children[column]);
            if (currentPlayer === 1) {
                row[0].style.backgroundColor = "red";
                checkWinner(winner ="red")
                return currentPlayer = 2;
            } else {
                row[0].style.backgroundColor = "blue";
                checkWinner(winner="blue")
                return currentPlayer = 1;
            }
        }
    }
}
//returns that all the paramenters are not white
function colorMatchCheck(one, two, three, four) {
    console.log(one, two , three, four)
    return (one === two && one === three && one === four && one !== "white")
}

function checkWinner(winner){
    if (drawCheck()){
        return(alert("Its been a DRAW"))
    }
    if(horizontalCheck() || verticalCheck() || diagonalCheck1() || diagonalCheck2()){
        return (alert(`${winner} is the Winner!`))
    }
}

function horizontalCheck() {
    for (let row = 0; row < tableRow.length; row++) {
        for (let col = 0; col < 4; col++) {
            let one = tableRow[row].children[col].style.backgroundColor;
            let two = tableRow[row].children[col+1].style.backgroundColor;
            let three = tableRow[row].children[col+2].style.backgroundColor;
            let four = tableRow[row].children[col+3].style.backgroundColor;
            if (colorMatchCheck(one, two, three, four)) {
                return true;
            }
        }
    }
};

function verticalCheck() {
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 7; col++) {
            let one = tableRow[row].children[col].style.backgroundColor;
            let two = tableRow[row+1].children[col].style.backgroundColor;
            let three = tableRow[row+2].children[col].style.backgroundColor;
            let four = tableRow[row+3].children[col].style.backgroundColor;
            if (colorMatchCheck(one, two, three, four)) {
                return true;
            }
        }
    }
};

function diagonalCheck1(){
    for(let col=0; col < 4; col++){
        for(let row = 0; row < 3; row++){
            let one = tableRow[row].children[col].style.backgroundColor;
            let two = tableRow[row+1].children[col+1].style.backgroundColor;
            let three = tableRow[row+2].children[col+2].style.backgroundColor;
            let four = tableRow[row+3].children[col+3].style.backgroundColor;
            if (colorMatchCheck(one, two, three, four)) {
                return true;
            }
        }
    }
}

function diagonalCheck2(){
    for(let col=0; col < 4; col++){
        for(let row = 5; row > 2; row--){
            let one = tableRow[row].children[col].style.backgroundColor;
            let two = tableRow[row-1].children[col+1].style.backgroundColor;
            let three = tableRow[row-2].children[col+2].style.backgroundColor;
            let four = tableRow[row-3].children[col+3].style.backgroundColor;
            if (colorMatchCheck(one, two, three, four)) {
                return true;
            }
        }
    }
}

function drawCheck(){
    let fullCells = [];
    for(let cell=0; cell < tableCell.length; cell++){
        if(tableCell[cell].style.backgroundColor !== "white"){
            fullCells.push(tableCell[cell])
        }  
    }

    if(fullCells.length === tableCell.length){
        return true
    }
}

