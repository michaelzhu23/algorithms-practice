function commonCharacterCount(s1, s2) {
  // create counter variable to count common characters that starts at 0
  // split and sort both input strings into sorted array
  // use nested for loop to compare each element of one array with all elements of the other array
  // if characters are equal, increment counter variable by 1 and remove the element from the index of the array from the outer for loop so that the next element can be compared without duplicating comparisons
  // return counter array
  let counter = 0;
  const s1Array = s1.split("").sort();
  const s2Array = s2.split("").sort();
  for (let i = 0; i < s1Array.length; i++) {
    for (let j = 0; j < s2Array.length; j++) {
      if (s1Array[i] === s2Array[j]) {
        counter++;
        s1Array.splice(i, 1);
      }
    }
  }
  return counter;
}
