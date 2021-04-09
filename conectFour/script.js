//selectors
const tableRow = document.getElementsByTagName('tr');
const tableCell = document.getElementsByTagName('td');
const tableSlot = document.querySelector('.slot');
const playerTurn = document.querySelector(".player_turn");
const reset = document.querySelector(".reset");

for(let i=0; i< tableCell.length; i++){
    tableCell[i].addEventListener('click', (e) => {
        console.log(`row${e.target.parentElement.rowIndex}, col${e.target.cellIndex}`)
    })
}