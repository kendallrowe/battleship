// const alphabetOrder = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

// Takes a current index number and increases or decreases as needed. Resettingvalue back to min as required.
const moveVerticalOrHorizontal = function(indexNum, direction) {
  let max = direction === "up" || direction === "down" ? 9 : 10;
  let min = direction === "up" || direction === "down" ? 0 : 1;

  if (direction === "down" || direction === "right") {
    indexNum++;
  } else {
    indexNum--;
  }
  
  if (indexNum > max || indexNum < min) {
    return NaN;
  }
 
  return indexNum;
};

const convertCoordinatesToNum = function(coordinates) {
  return [alphabetOrder.indexOf(coordinates.charAt(0)), parseInt(coordinates.substring(1), 10)];
};

const convertNumToCoordinates = function(coordArray) {
  return alphabetOrder[coordArray[0]] + coordArray[1];
};

// module.exports = { alphabetOrder, moveVerticalOrHorizontal, convertCoordinatesToNum, convertNumToCoordinates };