function palindromeRearranging(inputString) {
  const obj = {};
  let count = 0;
  for (let i = 0; i < inputString.length; i++) {
    if (obj[inputString[i]] === undefined) {
      obj[inputString[i]] = 1;
    } else {
      obj[inputString[i]]++;
    }
  }

  for (let letter in obj) {
    if (obj[letter] % 2 !== 0) {
      count++;
    }
  }

  return count <= 1 ? true : false;
}
