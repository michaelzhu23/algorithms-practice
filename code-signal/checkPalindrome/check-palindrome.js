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
