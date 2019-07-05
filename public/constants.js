const alphabetOrder = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]

const verticalMove = function(indexNum, increase) {
  if (increase === true) {
    indexNum === 9 ? -1 : indexNum;
    return indexNum++;
  }

  indexNum === 0 ? 10 : indexNum;
  return indexNum--;
}

const convertCoordinatesToNum = function(coordinates) {
  return [alphabetOrder.indexOf(coordinates.charAt(0)), parseInt(coordinates.charAt(1), 10)]
};

module.exports = { alphabetOrder, convertCoordinatesToNum };