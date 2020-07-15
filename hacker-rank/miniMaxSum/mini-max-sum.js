function miniMaxSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum - Math.max(...arr), sum - Math.min(...arr));
}
