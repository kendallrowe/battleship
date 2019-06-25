const generateBoard = function() {
  let boardArray = new Array(10);
  
  // Iterate through each row of array
  for (let row = 0; row < 10; row++) {
    // Create new array for each row
    boardArray[row] = new Array(10);
    for (let column = 0; column < 10; column++) {
      // Create array for each cell storing the player, ship type, and if a shot has been fired array
      boardArray[row][column] = ["none","",false];
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
};

// Function to check if a ship is present at current coordinates
const shipIsHere = function(shipCoord, row, column) {
  if (shipCoord[0] === row && shipCoord[1] === column) {
    return true;
  } else {
    return false;
  }
};

// Take input array of shot coordinates, request another shot if it's already been hit, update board if not
// Notify if shot was a hit or a miss
const fireShot = function(battleBoard, shotCoordinates) {

};


console.log(generateBoard());


// Main function to actually play the game
const playGame = function(){
  
}
