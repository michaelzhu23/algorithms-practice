function recreateMap(array, filterFunction) {
  const filteredArray = [];
  for (let i = 0; i < array.length; i++) {
    if (filterFunction(array[i], i, array)){
      filteredArray.push(array[i]);
    }
  }
  return filteredArray;
}
