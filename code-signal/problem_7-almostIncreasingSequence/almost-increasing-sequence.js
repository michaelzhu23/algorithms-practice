function almostIncreasingSequence(sequence) {
  let counter = 0;
  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] <= sequence[i - 1]) {
      counter++;
      if (sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1]) {
        counter++;
      }
    }
  }
  if (counter > 1) {
    return false;
  } else {
    return true;
  }
}
