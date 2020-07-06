function adjacentElementsProduct(inputArray) {
  let largestProduct = inputArray[0] * inputArray[1]
  for (let i = 0; i < inputArray.length; i++) {
    const currentAdjacentProduct = inputArray[i] * inputArray[i + 1];
    if (currentAdjacentProduct > largestProduct) {
      largestProduct = currentAdjacentProduct;
    }
  }
  return largestProduct;
}
