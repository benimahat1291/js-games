//selectors
let tableRow = document.getElementsByTagName('tr');
let tableCell = document.getElementsByTagName('td');
let tableSlot = document.querySelector('.slot');
let reset = document.querySelector(".reset");

for(let i=0; i< tableCell.length; i++){
    tableCell[i].addEventListener('click', (e) => {
        console.log(`row${e.target.parentElement.rowIndex}, col${e.target.cellIndex}`);
    })
}

let currentPlayer = 1;

Array.prototype.forEach.call(tableCell, (cell) => {
    cell.addEventListener("click", changeColor);
    cell.style.backgroundColor = "white";
})

function changeColor(e){
    let column = e.target.cellIndex;
    let row = [];
    for(let i=5; i > -1; i--){
        if(tableRow[i].children[column].style.backgroundColor === "white"){
            row.push(tableRow[i].children[column]);
            console.log(row[0])
            if(currentPlayer === 1){
                row[0].style.backgroundColor = "red";
                return currentPlayer = 2;
            } else {
                row[0].style.backgroundColor = "blue";
                return currentPlayer = 1;
            }
        }
    }
}