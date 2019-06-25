const generateBoard = function(ship1, ship2) {
  let boardArray = new Array(10);
  
  // Iterate through each row of array
  for (let row = 0; row < 10; row++) {
    // Create new array for each row
    boardArray[row] = new Array(10);
    for (let column = 0; column < 10; column++) {
      // Check for ship1 and ship2
      if (shipIsHere(ship1, row, column) === true) {
        boardArray[row][column] = 1;
      } else if (shipIsHere(ship2, row, column) === true) {
        boardArray[row][column] = 1;
      } else {
        boardArray[row][column] = 0;
      }
    }
  }
  return boardArray;
};

// Function to check if a ship is present at current coordinates
const shipIsHere = function(shipCoord, row, column) {
  if (shipCoord[0] === row && shipCoord[1] === column) {
    return true;
  } else {
    return false;
  }
};

const fireShot = function(shipCoord)

// const queenThreat = function(chessBoard) {
//   let queen1 = new Array(2);
//   let queen1Found = false;
//   let queen2 = new Array(2);
//   let diagonalDirections = ["aboveLeft", "aboveRight", "belowLeft", "belowRight"];

//   // Iterate through board to find location of queens
//   // Iterate through each row of array
//   for (let row = 0; row < 8; row++) {
//     for (let column = 0; column < 8; column++) {
//       if (chessBoard[row][column] === 1) {
//         if (queen1Found === false) {
//           queen1Found = true;
//           queen1 = [row, column];
//         }  else {
//           queen2 = [row, column];
//         }
//       }
//     }
//   }
//   // If the queens are on the same row or column, return true - there is a threat
//   if (queen1[0] === queen2[0] || queen1[1] === queen2[1]){
//     return true;
//   }
//   // Iterate through diagonals using queen one as starting point to check for threats
//   for (let i = 0; i < 4; i++) {
//     if (checkDiagonals(chessBoard, queen1, diagonalDirections[i]) === true) {
//       return true;
//     }
//   }

//   return false;
// }

// Object holding methods to determine logical check of whether current square is on the chessboard when checking each diagonal
// const rowInBoundsCheck = {
//   aboveLeft: function(currentRow, currentCol) { return currentRow >= 0 && currentCol >= 0 },
//   aboveRight: function(currentRow, currentCol) { return currentRow >= 0 && currentCol <= 7 },
//   belowLeft: function(currentRow, currentCol) { return currentRow <= 7 && currentCol >= 0 },
//   belowRight: function(currentRow, currentCol) { return currentRow <= 7 && currentCol <= 7 }
// }

let generatedBoard = generateBoard([0, 5], [5, 0]);
console.log(generatedBoard);

generatedBoard = generateBoard([0, 0], [5, 7]);
console.log(generatedBoard);
