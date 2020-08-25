function birthdayCakeCandles(ar) {
  // find highest number in input array with Math.max() using the spread operator
  // declare a variable starting with value of 0 to count total number of highest number
  // loop thru array and if current index = highest number, increment count by 1
  // return count variable
  let highestCandle = Math.max(...ar);
  let count = 0;
  for (let i = 0; i < ar.length; i++) {
    if (ar[i] === highestCandle) {
      count++
    }
  }
  return count;
}
