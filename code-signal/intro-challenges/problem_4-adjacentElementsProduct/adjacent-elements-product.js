function adjacentElementsProduct(inputArray) {
  // declare variable with value assigned to product of the first 2 array elements
  // loop thru array starting from index 1 and multiple by next index
  // if product at current loop index > value of variable outside of loop, reassign value of variable to current product in loop
  // return variable after the loop, which should have the value of the largest product
  let largestProduct = inputArray[0] * inputArray[1]
  for (let i = 1; i < inputArray.length; i++) {
    const currentAdjacentProduct = inputArray[i] * inputArray[i + 1];
    if (currentAdjacentProduct > largestProduct) {
      largestProduct = currentAdjacentProduct;
    }
  }
  return largestProduct;
}
