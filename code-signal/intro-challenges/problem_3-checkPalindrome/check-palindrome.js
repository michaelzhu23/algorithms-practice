function checkPalindrome(inputString) {
  // loop thru string and check letter on opposite ends to see if they're equal
  // if equal, continue loop. else return false
  // if loop finishes, return true because string is palindrome since loop did not return false
  for (let i = 0, j = inputString.length - 1; i < inputString.length; i++, j--) {
    if (inputString[i] !== inputString[j]) {
      return false;
    }
  }
  return true;
}

function checkPalindrome2(inputString) {
  let reversedString = "";
  for (let i = inputString.length - 1; i >= 0; i--) {
    reversedString += inputString[i]
  }
  if (reversedString === inputString) {
    return true;
  } else {
    return false;
  }
}

function checkPalindrome3(inputString) {
  return inputString === inputString.split('').reverse().join('');
}
