function highestDigit(number) {
  const string = number + "";
  let highest = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] > highest) {
      highest = string[i]
    }
  }
  return parseInt(highest);
}
