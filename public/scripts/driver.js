$(document).ready(function(){
  const playerOneVegetables = new PlayerGarden("Player 1");
  const playerOneBoard = new PlayerBoard("Player 1");

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
});