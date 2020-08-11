function arrayChange(inputArray) {
  let moveCount = 0;
  for (let i = 1; i < inputArray.length; i++) {
    if (inputArray[i] <= inputArray[i - 1]) {
      moveCount += inputArray[i - 1] - inputArray[i] + 1;
      inputArray[i] += inputArray[i - 1] - inputArray[i] + 1;
    }
  }
  return moveCount;
}
