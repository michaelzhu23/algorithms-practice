function recreateMap(array, callbackFunction){
  const newArray = [];
  for (let i = 0; i < array.length; i++){
    newArray.push(callbackFunction(array[i], i, array))
  }
  return newArray;
}
