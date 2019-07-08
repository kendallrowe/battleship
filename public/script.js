const { alphabetOrder, placementIsValid, moveVerticalOrHorizontal, convertCoordinatesToNum, convertNumToCoordinates } = require("./constants"); 
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

    for (let i = 1; i <= 100; i++) {
      this.boardSpaces[this.createSpace()] = new BoardSpace();
    }

  }

  createSpace(alphaIndex, row) {
  
    return function() {
      // console.log(alphaIndex);
      // console.log(row);
      if (alphaIndex === 9) {
        row++;
        alphaIndex = -1;
      }
      alphaIndex++;

      return alphabetOrder[alphaIndex] + row;
    };
  }

  fireShot(shotCoordinates) {
    if (this.boardSpaces[shotCoordinates].hasBeenShot) {
      return "Oops! Looks like you've already shot there. Try picking another spot.";
    }

    if (this.boardSpaces[shotCoordinates].shipOnSpace) {
      this.boardSpaces[shotCoordinates].shipOnSpace.spacesHit.shipIsShot(shotCoordinates);

    }
  }

}

class BoardSpace {
  constructor() {
    this.hasBeenShot = false;
  }
}

class PlayerFleet {
  constructor(playerNumber) {
    // this.generateShips();
    this.shipsRemaining = 5;
    this.playerNumber = playerNumber
    this.carrier = new Carrier();
    this.battleship = new Battleship();
    this.cruiser = new Cruiser();
    this.submarine = new Submarine();
    this.destroyer = new Destroyer();
  }
  // // Create fleet of ships for a player and store in object
  // generateShips() {
  //   const shipTypes = ["carrier", "battleship", "cruiser", "submarine", "destroyer"];

  //   for (let i = 0; i < shipTypes.length; i++) {
  //     this[shipTypes[i]] = new Ship(shipTypes[i], this.player);
  //   }
  // }
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

    // Reject placement if it goes out of bounds
    if (placementIsValid(coordinates, orientation, this.maxHits) === "Invalid") {
      console.log("Make sure to pick a valid placement!");
      return;
    }

    for (let i = 1; i <= this.maxHits; i++) {
      playerBoard.boardSpaces[coordinates].ship = this;
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
      

      coordinates = convertNumToCoordinates(coordinatesArray);
    }
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

  // console.log(playerOneShips);
  // console.log(playerOneBoard);
  playerTwoShips.battleship.placeShip("J5", playerOneBoard, "right");
  // console.log(playerTwoShips);
  // console.log(playerTwoBoard);

};

const test = startNewGame();