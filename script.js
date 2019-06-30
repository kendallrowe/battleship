// Constructor function constaining closure function to generate spaces on the board
function PlayerBoard(playerNumber) {
  this.player = playerNumber;
  this.createSpace = function(alphaIndex, row) {
    const alphabetOrder = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  
    return function() {
      if (alphaIndex === 9) {
        row++;
        alphaIndex = -1;
      }
      alphaIndex++;

      return alphabetOrder[alphaIndex] + row;
    };
  },
  // Take input array of shot coordinates, request another shot if it's already been hit, update board if not
  // Notify if shot was a hit or a miss
  this.fireShot = function(shotCoordinates) {
  
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
    };

    return shipTypeMaximums[shipType];
  },
  this.placeShip = function(coordinates) {

  },
  this.className;
}

// Create fleet of ships for a player and store in object
const generateShips = function(playerNumber) {
  const shipTypes = ["carrier", "battleship", "cruiser", "submarine", "destroyer"];
  let playerShips = {player: playerNumber};

  shipTypes.forEach(function(shipType) {
    playerShips[shipType] = new Ship(shipType, playerNumber);
    playerShips[shipType].maxHits =  playerShips[shipType].calcMaxHits(shipType);
  });

  return playerShips;
};

// Create an empty board array for a player storing null ship type and shot fired within each cell
const generateBoard = function(playerNumber) {
  let playerBoard = new PlayerBoard(playerNumber);
  const createSpace = playerBoard.createSpace(-1, 1);

  for (let i = 1; i <= 100; i++) {
    playerBoard[createSpace()] = {hasBeenShot: false};
  }

  return playerBoard;
};

const startNewGame = function() {
  let playerOneBoard = generateBoard("Player 1");
  let playerTwoBoard = generateBoard("Player 2");

  let playerOneShips = generateShips("Player 1");
  let playerTwoShips = generateShips("Player 2");

  console.log(playerOneBoard);
  console.log(playerOneShips);

  console.log(playerTwoBoard);
  console.log(playerTwoShips);

};

const test = startNewGame();