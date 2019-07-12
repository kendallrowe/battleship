const { alphabetOrder, moveVerticalOrHorizontal, convertCoordinatesToNum, convertNumToCoordinates } = require("./constants"); 
// Constructor function constaining closure function to generate spaces on the board
class PlayerBoard {

  constructor(playerNumber) {
    this.createSpace = this.createSpace(-1, 1);
    this.playerNumber = playerNumber;
    this.boardSpaces = {};
    this.generateBoardSpaces();
  }

  // Create an empty board array for a player storing null ship type and shot fired within each cell
  generateBoardSpaces() {
    let coordinateLabel;
    for (let i = 1; i <= 100; i++) {
      coordinateLabel = this.createSpace();
      this.boardSpaces[coordinateLabel] = new BoardSpace();
      this.boardSpaces[coordinateLabel].coordinateLabel = coordinateLabel;
    }

  }

  // Closure function to create a label for a space object (ie. A1, A2, etc.)
  createSpace(alphaIndex, row) {
    return function() {
      if (alphaIndex === 9) {
        row++;
        alphaIndex = -1;
      }
      alphaIndex++;

      return alphabetOrder[alphaIndex] + row;
    };
  }
}

class BoardSpace {
  constructor() {
    this.hasBeenShot = false;
  }

  fireShot(shotCoordinates) {
    if (this.hasBeenShot) {
      return "Oops! Looks like you've already shot there. Try picking another spot.";
    }

    if (this.shipOnSpace) {
      this.boardSpaces[shotCoordinates].shipOnSpace.spacesHit.shipIsShot(shotCoordinates);

    }
  }
}

class PlayerFleet {
  constructor(playerNumber) {
    this.shipsRemaining = 5;
    this.playerNumber = playerNumber
    this.carrier = new Carrier();
    this.battleship = new Battleship();
    this.cruiser = new Cruiser();
    this.submarine = new Submarine();
    this.destroyer = new Destroyer();
  }
}

class Ship {
  constructor(maxHitAmount) {
    this.spacesHit = []
    this.maxHits = maxHitAmount;
  }

  shipIsShot(shotCoordinates) {
    this.spacesHit.push(shotCoordinates);
    if (this.spacesHit.length === this.maxHits) {

    }
  }

  placeShip(coordinates, playerBoard, orientation) {
    let coordinatesArray = [];
    let toBePlacedTileArray = [];

    for (let i = 1; i <= this.maxHits; i++) {
      toBePlacedTileArray.push(coordinates);
      
      coordinatesArray = convertCoordinatesToNum(coordinates);
      // Adjust current coordinate array based on the specified orientation
      switch (orientation) {
        case "up":
          coordinatesArray[0] = moveVerticalOrHorizontal(coordinatesArray[0], "up"); 
          break;
        case "right":
          coordinatesArray[1] = moveVerticalOrHorizontal(coordinatesArray[1], "right");
          break;
        case "down":
          coordinatesArray[0] = moveVerticalOrHorizontal(coordinatesArray[0], "down");
          break;
        case "left":
          coordinatesArray[1] = moveVerticalOrHorizontal(coordinatesArray[1], "left");
          break;
      }

      if (playerBoard.boardSpaces[coordinates].ship || coordinatesArray.findIndex(Number.isNaN) !== -1) {
        console.log("Make sure to pick a valid placement!");
        return;
      }

      coordinates = convertNumToCoordinates(coordinatesArray);
    }
    for (let tile of toBePlacedTileArray) {
      playerBoard.boardSpaces[tile].ship = this;
    };    

    console.log(playerBoard);
  }
}

class Carrier extends Ship {
  constructor() {
    super(5);

  }
}

class Battleship extends Ship {
  constructor() {
    super(4);
  }
}

class Cruiser extends Ship {
  constructor() {
    super(3);
  }
}

class Submarine extends Ship {
  constructor() {
    super(3);
  }
}

class Destroyer extends Ship {
  constructor() {
    super(2);
  }
}


// Driver code
const startNewGame = function() {


  let playerOneShips = new PlayerFleet("Player 1");
  let playerOneBoard = new PlayerBoard("Player 1");
  let playerTwoBoard = new PlayerBoard("Player 2");
  let playerTwoShips = new PlayerFleet("Player 2");
  // playerOneShips.placeShip("battleship", playerOneBoard, ["A1", "A2", "A3", "A4", "A5"]);

  console.log(playerOneShips);
  console.log(playerOneBoard);
  playerOneShips.battleship.placeShip("E5", playerOneBoard, "left");
  // console.log(playerTwoShips);
  // console.log(playerTwoBoard);

};

const test = startNewGame();