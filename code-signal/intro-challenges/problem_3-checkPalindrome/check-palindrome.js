function checkPalindrome(inputString) {
  let isPalindrome;
  for (let i = 0, j = inputString.length - 1; i < inputString.length; i++, j--) {
    if (inputString[i] !== inputString[j]) {
      return false;
    } else {
      isPalindrome = true;
    }
  }
  return isPalindrome;
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
