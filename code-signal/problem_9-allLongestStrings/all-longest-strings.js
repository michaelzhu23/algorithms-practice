function allLongestStrings(inputArray) {
  let longestString = 0;
  const newArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length > longestString) {
      longestString = inputArray[i].length;
    }
  }
  for (let j = 0; j < inputArray.length; j++) {
    if (inputArray[j].length === longestString) {
      newArray.push(inputArray[j]);
    }
  }
  return newArray;
}
