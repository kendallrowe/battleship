// Create an empty board array for a player storing null ship type and shot fired within each cell
const generateBoard = function() {
  let boardArray = new Array(10);
  
  // Iterate through each row of array
  for (let row = 0; row < 10; row++) {
    // Create new array for each row
    boardArray[row] = new Array(10);
    for (let column = 0; column < 10; column++) {
      // Create array for each cell storing ship type and if a shot has been fired array
      boardArray[row][column] = ["",false];
    }
  }
  return boardArray;
};

const placeShipOnBoard = function(currentBoard, vertical, shipType, shipStart) {
  // Check whether a ship is already in the specified location

  // If space is empty, update board array to reflect location of the ship

  // Update shipStatus for player to represent coordinates of the type of ship
  
};

// Tiles length of each ship type, start and end coordinates of ship, boolean of whether it has been sunk
const shipStatus = {
  carrier: [[], 5],
  battleship: [[], 4],
  cruiser: [[],3],
  submarine: [[], 3],
  destroyer: [[], 2]
}

// Function to check if a ship is present at current coordinates
const shipIsHere = function(currentBoard, coordinates) {
  
};

// Take input array of shot coordinates, request another shot if it's already been hit, update board if not
// Notify if shot was a hit or a miss
const fireShot = function(battleBoard, shotCoordinates) {

};

// Main function to actually play the game
const playGame = function(){
  let player1Board = setUpShips("player1");
  let player2Board = setUpShips("player2");
};

const setUpShips = function(player) {
  let shipsRemaining = ["carrier", "battleship", "cruiser", "submarine", "destroyer"]
  let playerBoard = generateBoard();

  // Iterate through all ships for the player
  for (let i = 0; i < shipsRemaining.length; i++) {
    // Update player board with locations
    playerBoard = placeShipOnBoard(playerBoard, 1, shipsRemaining[i], 2);
    
  }
};