// const { alphabetOrder, moveVerticalOrHorizontal, convertCoordinatesToNum, convertNumToCoordinates } = require("./helpers");
// Constructor function constaining closure function to generate spaces on the board
class PlayerBoard {

  constructor(playerNumber) {
    this.createSpace = this.createSpace(-1, 1);
    this.playerNumber = playerNumber;
    this.boardSpaces = {};
    this.generateBoardSpaces();
  }

  // Create an empty board array for a player storing null vegetable type and shot fired within each cell
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
    this.imageUri = '/assets/soil-patch.png';
  }

  fireShot() {
    if (this.hasBeenShot) {
      console.log("Oops! Looks like you've already shot there. Try picking another spot.");
    }

    if (this.vegetable) {
      this.vegetable.vegeIsShot(this.coordinateLabel);
    }
    this.hasBeenShot = true;
  }
}

// Class container for all vegetable objects for a given player. Generates vegetables and can control any given vegetable movement functionality
// Win condition driven through finishVege/engame
class PlayerGarden {
  constructor(playerNumber) {
    this.playerNumber = playerNumber;
    this.eggplant = new Eggplant(this);
    this.cucumber = new Cucumber(this);
    this.carrot = new Carrot(this);
    this.corn = new Corn(this);
    this.broccoli = new Broccoli(this);
    this.finishedVegetables = [];
  }

  finishVege(vegeType) {
    this.finishedVegetables.push(vegeType);
    if (this.finishedVegetables.length === 5) {
      this.endGame(this.playerNumber);
    }
  }

  endGame(playerNumber) {
    console.log(`${playerNumber} loses!`);
  }
}

// General vegetable class, contains functionality to place and track shots on a given vegetable. Update garden object when a given vegetable is sunk
class Vegetable {
  constructor(maxHitAmount, playerGarden) {
    this.spacesHit = [];
    this.maxHits = maxHitAmount;
    this.garden = playerGarden;
  }

  vegeIsShot(shotCoordinates) {
    this.spacesHit.push(shotCoordinates);
    if (this.spacesHit.length === this.maxHits) {
      this.garden.finishVege(this.type);
    }
  }

  placeVege(coordinates, playerBoard, orientation) {
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
      if (playerBoard.boardSpaces[coordinates].vegetable || coordinatesArray.findIndex(Number.isNaN) !== -1) {
        console.log("Make sure to pick a valid placement!");
        return;
      }

      coordinates = convertNumToCoordinates(coordinatesArray);
    }
    for (let tile of toBePlacedTileArray) {
      playerBoard.boardSpaces[tile].vegetables = this;
    }
  }
}

// Individual vegetables types
class Eggplant extends Vegetable {
  constructor(playerGarden) {
    super(5, playerGarden);
    this.type = "eggplant";
  }
}

class Cucumber extends Vegetable {
  constructor(playerGarden) {
    super(4, playerGarden);
    this.type = "cucumber";
  }
}

class Carrot extends Vegetable {
  constructor(playerGarden) {
    super(3, playerGarden);
    this.type = "carrot";
  }
}

class Corn extends Vegetable {
  constructor(playerGarden) {
    super(3, playerGarden);
    this.type = "corn";
  }
}

class Broccoli extends Vegetable {
  constructor(playerGarden) {
    super(2, playerGarden);
    this.type = "broccoli";
  }
}



// Driver code
const startNewGame = function() {


  let playerOneVegetables = new PlayerGarden("Player 1");
  let playerOneBoard = new PlayerBoard("Player 1");
  let playerTwoBoard = new PlayerBoard("Player 2");
  let playerTwoVegetables = new PlayerGarden("Player 2");
  // playerOneVegetables.placeVege("cucumber", playerOneBoard, ["A1", "A2", "A3", "A4", "A5"]);

  playerOneVegetables.cucumber.placeVege("E5", playerOneBoard, "left");
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
  // console.log(playerOneVegetabless);No
  
  // console.log(playerTwoVegetables);
  // console.log(playerTwoBoard);

};

// const test = startNewGame();