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

function matchingPair2(arr, num) {
  // create empty array to store matching pair
  // create empty object to store each array element as properties with value of true
  // loop thru array to add property of each element to object
  // loop thru array again to check for number corresponding to current array index that equals to the 2nd argument within object
  // if corresponding number exists, push both numbers into empty array
  // return array
  const matchArray = []
  const object = {}
  for (let i = 0; i < arr.length; i++) {
    object[arr[i]] = true;
  }
  for (let j = 0; j < arr.length; j++) {
    if (object[num - arr[j]] === true) {
      matchArray.push(arr[j], num - arr[j])
      return matchArray;
    }
  }
  return matchArray;
}
