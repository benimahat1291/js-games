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

Array.prototype.forEach.call(tableCell, (cell) => {
    cell.addEventListener("click", changeColor);
    cell.style.backgroundColor = "white";
})

function changeColor(e) {
    let column = e.target.cellIndex;
    let row = [];
    for (let i = 5; i > -1; i--) {
        if (tableRow[i].children[column].style.backgroundColor === "white") {
            row.push(tableRow[i].children[column]);
            if (currentPlayer === 1) {
                row[0].style.backgroundColor = "red";
                if (verticalCheck()) {
                    return (alert("red winner"));
                }
                return currentPlayer = 2;
            } else {
                row[0].style.backgroundColor = "blue";
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

function diagnolCheck(){
    
}

