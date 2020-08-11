function isLucky(n) {
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
