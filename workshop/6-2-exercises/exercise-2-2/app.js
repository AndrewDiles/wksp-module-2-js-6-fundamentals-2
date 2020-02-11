// Exercise 2.2 - the Custom Grid
// ------------

// Use the grid code you wrote in 2.1

// Objectives
// Allow the user to create cells on the board based on values he/she inputs.
// - Ask the user the number of ROWS and COLUMNS
// - Use those values to generate a grid

// Hints
// - use the 'blur' event
// - one event listener per input

// If you need extra hints, see somebody... :)


const board = document.getElementById('board');
const inputRows = document.getElementById('rows-input');
const inputColumns = document.getElementById('columns-input');


let columnCount = 10;
let rowCount = 10;
let maxCells = 100;
let currentCells = 100;
let tempstr = '';

board.style.width = board.style.height = '600px';
board.style.gridTemplateColumns = board.style.gridTemplateRows = '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr';
for (i=0; i<100; i++){
    const cell = document.createElement('div')
    cell.id = `cell${i}`;
    cell.classList.add('cell');
    board.appendChild(cell);
}
//above is base 10x10 scenario

const refreshCells = function(){
    // Honestly I do not know how to destroy objects.  I figure making them invisible will do... except I will have issues with cell id numbers...
    // maybe I have to display / not display numbers depending on how many numbers have been made..
    // that ended up being what I did using a series of conditionals

    // document.getElementsByClassName('cell').forEach(element => {element.style.display = 'none';});
    if (rowCount*columnCount > maxCells) {
        for (i=maxCells; i<rowCount*columnCount; i++){
            const cell = document.createElement('div')
            cell.id = `cell${i}`;
            cell.classList.add('cell');
            board.appendChild(cell);
        }
        maxCells = rowCount*columnCount;
    }
    else if (rowCount*columnCount === maxCells) {}
    else if (rowCount*columnCount < maxCells){
        if (rowCount*columnCount > currentCells){
            for (i=currentCells; i<rowCount*columnCount; i++) {
                document.getElementById(`cell${i}`).style.display = 'inline-block';
            }
        }
        else if (currentCells > rowCount*columnCount) {
            for (i=currentCells-1; i===rowCount*columnCount; i--){
                document.getElementById(`cell${i}`).style.display = 'none';
            }
        }

    }    
    // for (i=0; i<rowCount*columnCount; i++){
    //     const cell = document.createElement('div')
    //     cell.id = `cell${i}`;
    //     cell.classList.add('cell');
    //     board.appendChild(cell);
    // }
    currentCells = rowCount*columnCount;
}


const refreshColumns = function(){
    console.log(event);
    if (inputColumns.value > 0){
        tempstr = '';
        for (i=0; i<inputColumns.value; i++){
            tempstr += '1fr ';
        }
        board.style.gridTemplateColumns = tempstr;
        columnCount = inputColumns.value;
        refreshCells();
    }
    else (inputColumns.innerText = ' Plz, i > 0')
}

const refreshRows = function(){
    console.log(inputRows.value);
    if (inputRows.value > 0){
        tempstr = '';
        for (i=0; i<inputRows.value; i++){
            tempstr += '1fr ';
        }
        board.style.gridTemplateRows = tempstr;
        rowCount = inputRows.value;
        refreshCells();
    }
    else (inputRows.innerText = ' Plz, i > 0')
}


inputColumns.addEventListener('blur', refreshColumns);
inputRows.addEventListener('blur', refreshRows)
