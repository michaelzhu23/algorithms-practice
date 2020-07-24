function sockMerchant(n, ar) {
  let pairs = 0;
  const sorted = ar.sort((a, b) => a - b);
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] === sorted[i + 1]) {
      pairs++;
      sorted.splice(i, 1)
    }
  }
  return pairs;
}
