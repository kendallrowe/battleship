// Constructor function constaining closure function to generate spaces on the board
function PlayerBoard() {
  this.createSpace = function(alphaIndex, row) {
    const alphabetOrder = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
  
    return function() {
      if (alphaIndex === 9) {
        row++;
        alphaIndex = -1;
      }
      alphaIndex++;

      return alphabetOrder[alphaIndex] + row;
    }
  }
}

// Ship constructor function
function Ship(shipType, playerNumber) {
  this.player = playerNumber,
  this.spaces = [],
  this.maxHits = 0;
  this.numberOfHits = 0;
  this.type = shipType,
  this.calcMaxHits = function(shipType) {
    const shipTypeMaximums = {
      carrier: 5,
      battleship: 4,
      cruiser: 3,
      submarine: 3,
      destroyer: 2
    }

    return shipTypeMaximums[shipType];
  }
  this.className
}

// Create fleet of ships for a player and store in object
const generateShips = function(playerNumber) {
  const shipTypes = ["carrier", "battleship", "cruiser", "submarine", "destroyer"];
  let playerShips = {player: playerNumber}

  shipTypes.forEach(function(shipType) {
    playerShips[shipType] = new Ship(shipType, playerNumber);
    playerShips[shipType].maxHits =  playerShips[shipType].calcMaxHits(shipType);
  }); 

  console.log(playerShips);
}

// Create an empty board array for a player storing null ship type and shot fired within each cell
const generateBoard = function() {
  let playerBoard = new PlayerBoard();
  const createSpace = playerBoard.createSpace(-1, 1);

  for (let i = 1; i <= 100; i++) {
    playerBoard[createSpace()] = {hasBeenShot: false};
  }

  return playerBoard;
};

const test = generateShips("Player1");

console.log(test);

const placeShipOnBoard = function(currentBoard, vertical, shipType, shipStart) {
  // Check whether a ship is already in the specified location

  // If space is empty, update board array to reflect location of the ship

  // Update shipStatus for player to represent coordinates of the type of ship
  
};


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