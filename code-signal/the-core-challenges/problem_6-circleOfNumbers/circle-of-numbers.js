function circleOfNumbers(n, firstNumber) {
  // opposite number of firstNumber is always half of n away
  // if firstNumber is >= half of n, subtract half of n to find the opposite number
  // if firstNumber is < half of n, add half of n to find the opposite number
  if (firstNumber >= n / 2) {
    return firstNumber - n / 2;
  } else {
    return firstNumber + n / 2;
  }
}
