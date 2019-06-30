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
  // Create an empty board array for a player storing null ship type and shot fired within each cell
  this.generateBoardSpaces = function(playerNumber) {
    const createSpace = this.createSpace(-1, 1);

    for (let i = 1; i <= 100; i++) {
      this[createSpace()] = {hasBeenShot: false};
    }
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
  this.type = shipType,
  this.calcMaxHits = function() {
    const shipTypeMaximums = {
      carrier: 5,
      battleship: 4,
      cruiser: 3,
      submarine: 3,
      destroyer: 2
    };
    
    return shipTypeMaximums[this.type];
  },
  this.maxHits = this.calcMaxHits(),
  this.numberOfHits = 0,
  this.placeShip = function(ship, playerBoard, coordinates) {
    this[ship].spaces = coordinates;
    coordinates.forEach(function(coordinate) {
      playerBoard[coordinate].ship = ship;
    });
  }
}

function PlayerFleet(playerNumber) {
  this.player = playerNumber;
  // Create fleet of ships for a player and store in object
  this.generateShips = function() {
    const shipTypes = ["carrier", "battleship", "cruiser", "submarine", "destroyer"];

    for (let i = 0; i < shipTypes.length; i++) {
      this[shipTypes[i]] = new Ship(shipTypes[i], this.player);
    }
  }
}

const startNewGame = function() {

  let playerOneBoard = new PlayerBoard("Player 1");
  playerOneBoard.generateBoardSpaces("Player 1");
  let playerTwoBoard = new PlayerBoard("Player 2");
  playerTwoBoard.generateBoardSpaces("Player 2");

  let playerOneShips = new PlayerFleet("Player 1");
  playerOneShips.generateShips();
  let playerTwoShips = new PlayerFleet("Player 2");
  playerTwoShips.generateShips()

  // playerOneShips.placeShip("battleship", playerOneBoard, ["A1", "A2", "A3", "A4", "A5"]);

  console.log(playerOneBoard);
  console.log(playerOneShips);

  console.log(playerTwoBoard);
  console.log(playerTwoShips);

};

const test = startNewGame();