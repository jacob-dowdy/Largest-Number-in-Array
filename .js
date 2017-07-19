function largestOfFour(arr) {
  var bigNumArr = [];
  for (i = 0;i < arr.length; i++) {
    var largestNum = arr[i][0];
    for (j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > largestNum) {
        largestNum = arr[i][j];
      }
    }
    bigNumArr[i] = largestNum;
  }
  return bigNumArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
