function matchingPair(arr, num) {
  const matchArray = []
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === num) {
        matchArray.push(arr[i], arr[j]);
        return matchArray;
      }
    }
  }
  return matchArray;
}
