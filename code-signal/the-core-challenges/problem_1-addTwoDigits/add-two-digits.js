function addTwoDigits(n) {
  // convert number to string
  // separate each number into different variables
  // convert each variable back to number
  // add the 2 numbers
  const nToString = n + "";
  return parseInt(nToString[0]) + parseInt(nToString[1]);
}

function addTwoDigits2(n) {
  return Math.floor(n / 10) + n % 10;
}
