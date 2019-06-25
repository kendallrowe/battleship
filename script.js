

const generateBoard = function(ship1, ship2) {
  let boardArray = new Array(10);
  
  // Iterate through each row of array
  for (let row = 0; row < 10; row++) {
    // Create new array for each row
    boardArray[row] = new Array(10);
    for (let column = 0; column < 10; column++) {
    }
  }
  return boardArray;
};

const placeShipOnBoard = function(currentBoard, shipStart, shipEnd) {
  // Check for ship1 and ship2
  if (shipIsHere(ship1, row, column) === true) {
    boardArray[row][column] = 1;
  } else if (shipIsHere(ship2, row, column) === true) {
    boardArray[row][column] = 1;
  } else {
    boardArray[row][column] = 0;
  }
}

// Function to check if a ship is present at current coordinates
const shipIsHere = function(shipCoord, row, column) {
  if (shipCoord[0] === row && shipCoord[1] === column) {
    return true;
  } else {
    return false;
  }
};

const fireShot = function(battleBoard, shotCoordinates) {
  if 
}

let generatedBoard = generateBoardAndShips([0, 5], [5, 0]);
console.log(generatedBoard);

generatedBoard = generateBoardAndShips([0, 0], [5, 7]);
console.log(generatedBoard);


// Main function to actually play the game
const playGame = function(){
  
}
