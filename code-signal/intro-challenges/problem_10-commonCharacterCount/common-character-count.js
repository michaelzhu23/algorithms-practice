function commonCharacterCount(s1, s2) {
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
