function birthdayCakeCandles(ar) {
  let highestCandle = Math.max(...ar);
  let count = 0;
  for (let i = 0; i < ar.length; i++) {
    if (ar[i] === highestCandle) {
      count++
    }
  }
  return count;
}
