function matrixElementsSum(matrix) {
  let sum = 0;
  let column0 = false;
  let column1 = false;
  let column2 = false;
  let column3 = false;
  let column4 = false;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0 && j === 0) {
        column0 = true;
      } else if (matrix[i][j] === 0 && j === 1) {
        column1 = true;
      } else if (matrix[i][j] === 0 && j === 2) {
        column2 = true;
      } else if (matrix[i][j] === 0 && j === 3) {
        column3 = true;
      } else if (matrix[i][j] === 0 && j === 4) {
        column4 = true;
      }

      if (column0) {
        matrix[i][0] = 0;
      }
      if (column1) {
        matrix[i][1] = 0;
      }
      if (column2) {
        matrix[i][2] = 0;
      }
      if (column3) {
        matrix[i][3] = 0;
      }
      if (column4) {
        matrix[i][4] = 0;
      }

      sum += matrix[i][j]
    }
  }
  return sum;
}

function matrixElementsSum2(matrix) {
  // declare variable for sum assigned to initial value of 0
  // loop thru matrix vertically
  // if value at current position = 0, break out of current loop so nothing else under gets add
  // else add value at current position to sum variable
  // return sum
  let sum = 0;
  for (let i = 0; i < matrix[0].length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[j][i] === 0) {
        break;
      } else {
        sum += matrix[j][i];
      }
    }
  }
  return sum;
}
