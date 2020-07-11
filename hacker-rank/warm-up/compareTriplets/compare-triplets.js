function compareTriplets(a, b) {
  const comparison = [0, 0];
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      comparison[0]++
    } else if (a[i] < b[i]) {
      comparison[1]++;
    }
  }
  return comparison;
}
