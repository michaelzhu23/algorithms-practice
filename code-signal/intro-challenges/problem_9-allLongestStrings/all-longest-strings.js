function allLongestStrings(inputArray) {
  // create a variable that stores length of longest string set to an initial value of 0
  // create new empty array to store all longest strings
  // loop thru input array and compare string length of current index to created variable and if greater than, set to current index's string's length
  // loop thru input array a 2nd time and push elements into empty array if string length equals longest string length
  // return new array with all longest strings
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
