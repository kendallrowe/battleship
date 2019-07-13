const { alphabetOrder, moveVerticalOrHorizontal, convertCoordinatesToNum, convertNumToCoordinates } = require("./helpers"); 
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

  fireShot() {
    if (this.hasBeenShot) {
      console.log("Oops! Looks like you've already shot there. Try picking another spot.");
    }

    if (this.ship) {
      this.ship.shipIsShot(this.coordinateLabel);
    }
    this.hasBeenShot = true;
  }
}

class PlayerFleet {
  constructor(playerNumber) {
    this.playerNumber = playerNumber
    this.carrier = new Carrier(this);
    this.battleship = new Battleship(this);
    this.cruiser = new Cruiser(this);
    this.submarine = new Submarine(this);
    this.destroyer = new Destroyer(this);
    this.sunkShips = [];
  }

  sinkShip(shipType) {
    this.sunkShips.push(shipType);
    if (this.sunkShips.length === 1) {
      this.endGame(this.playerNumber);
    }
  }

  endGame(playerNumber) {
    console.log(`${playerNumber} loses!`)
  }
}

class Ship {
  constructor(maxHitAmount, playerFleet) {
    this.spacesHit = []
    this.maxHits = maxHitAmount;
    this.fleet = playerFleet;
  }

  shipIsShot(shotCoordinates) {
    this.spacesHit.push(shotCoordinates);
    if (this.spacesHit.length === this.maxHits) {
      this.fleet.sinkShip(this.type);
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
  }
}

class Carrier extends Ship {
  constructor(playerFleet) {
    super(5, playerFleet);
    this.type = "carrier";
  }
}

class Battleship extends Ship {
  constructor(playerFleet) {
    super(4, playerFleet);
    this.type = "battleship";
  }
}

class Cruiser extends Ship {
  constructor(playerFleet) {
    super(3, playerFleet);
    this.type = "cruiser";
  }
}

class Submarine extends Ship {
  constructor(playerFleet) {
    super(3, playerFleet);
    this.type = "submarine";
  }
}

class Destroyer extends Ship {
  constructor(playerFleet) {
    super(2, playerFleet);
    this.type = "destroyer";
  }
}



// Driver code
const startNewGame = function() {


  let playerOneShips = new PlayerFleet("Player 1");
  let playerOneBoard = new PlayerBoard("Player 1");
  let playerTwoBoard = new PlayerBoard("Player 2");
  let playerTwoShips = new PlayerFleet("Player 2");
  // playerOneShips.placeShip("battleship", playerOneBoard, ["A1", "A2", "A3", "A4", "A5"]);

  playerOneShips.battleship.placeShip("E5", playerOneBoard, "left");
  playerOneBoard.boardSpaces.E5.fireShot();
  playerOneBoard.boardSpaces.E4.fireShot();
  playerOneBoard.boardSpaces.A7.fireShot();
  playerOneBoard.boardSpaces.J4.fireShot();
  playerOneBoard.boardSpaces.D9.fireShot();
  playerOneBoard.boardSpaces.D9.fireShot();


  playerOneBoard.boardSpaces.E3.fireShot();
  playerOneBoard.boardSpaces.E2.fireShot();
  console.log(playerOneBoard);


  // console.log(playerOneBoard);
  // console.log(playerOneShips);
  
  // console.log(playerTwoShips);
  // console.log(playerTwoBoard);

};



const test = startNewGame();