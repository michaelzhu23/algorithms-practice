function highestDigit(number) {
  // convert number to string in order to iterate thru each digit
  // create variable to compare and store highest digit
  // loop thru string to compare with variable and set variable to current string digit to variable if higher
  // convert highest digit variable back to number and return
  const string = number + "";
  let highest = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] > highest) {
      highest = string[i]
    }
  }
  return parseInt(highest);
}
