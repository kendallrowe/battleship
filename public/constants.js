const alphabetOrder = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
const placementIsValid = function(coordinates, direction, length) {
  let max = direction === "up" || direction === "down" ? 9 : 10;
  let min = direction === "up" || direction === "down" ? 0 : 1;

  // Extract coordinates array and determine whether it is a vertical or horizontal move
  let coordArray = convertCoordinatesToNum(coordinates);
  let numberToIncrement = (direction === "up" || direction === "down") ? coordArray[0] : coordArray[1];
  
  // Determine if we should increase or decrease our value based on direction ship is being placed
  length = (direction === "right" || direction === "down") ? length : -length;

  numberToIncrement += length;
  if (numberToIncrement < min || numberToIncrement > max) {
    return "Invalid";
  }
  return "Valid";
}

const moveVerticalOrHorizontal = function(indexNum, direction) {
  let max = direction === "up" || direction === "down" ? 9 : 10;
  let min = direction === "up" || direction === "down" ? 0 : 1;

  if (direction === "down" || direction === "right") {
    indexNum++;
    return indexNum;
  }

  indexNum--;
  return indexNum;
}

const convertCoordinatesToNum = function(coordinates) {
  return [alphabetOrder.indexOf(coordinates.charAt(0)), parseInt(coordinates.substring(1), 10)]
};

const convertNumToCoordinates = function(coordArray) {
  return alphabetOrder[coordArray[0]] + coordArray[1];
}

module.exports = { alphabetOrder, placementIsValid, moveVerticalOrHorizontal, convertCoordinatesToNum, convertNumToCoordinates };