function isLucky(n) {
  // convert number into string
  // call Array.from on the string to convert to array with each number as an element
  // use map method to call Number function on each number to convert each element back to a number
  // save new array to variable
  // find half of array length
  // create variables to store sum of each half
  // loop thru each half of the array and add to respective sums
  // compare the sums
  // return true if equal, false if not
  const numberArray = Array.from(n.toString()).map(Number);
  const half = numberArray.length / 2;
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < numberArray.length - half; i++) {
    sum1 += numberArray[i]
  }
  for (let j = half; j < numberArray.length; j++) {
    sum2 += numberArray[j]
  }
  if (sum1 === sum2) {
    return true;
  } else {
    return false;
  }
}
