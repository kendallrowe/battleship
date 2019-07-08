const alphabetOrder = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]

const moveVerticalOrHorizontal = function(indexNum, direction) {
  let max = direction === "up" || direction === "down" ? 9 : 10;
  let min = direction === "up" || direction === "down" ? 0 : 1;

  if (direction === "down" || direction === "right") {
    if (indexNum === max) return NaN;
    indexNum++;
    return indexNum;
  }

  if (indexNum === min) return NaN;  
  indexNum--;
  return indexNum;
}
console.log(moveVerticalOrHorizontal(1, "up"));
const convertCoordinatesToNum = function(coordinates) {
  return [alphabetOrder.indexOf(coordinates.charAt(0)), parseInt(coordinates.charAt(1), 10)]
};

const convertNumToCoordinates = function(coordArray) {
  return alphabetOrder[coordArray[0]] + coordArray[1];
}

module.exports = { alphabetOrder, moveVerticalOrHorizontal, convertCoordinatesToNum, convertNumToCoordinates };