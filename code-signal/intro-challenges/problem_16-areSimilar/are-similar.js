function areSimilar(a, b) {
  let sumA = 0;
  let sumB = 0;
  let unequalElements = 0;
  for (let i = 0; i < a.length; i++) {
    if (!b.includes(a[i])) {
      return false;
    }
    if (a[i] !== b[i]) {
      unequalElements++;
    }
    sumA += a[i];
    sumB += b[i];
  }
  if (unequalElements > 2 || sumA !== sumB) {
    return false;
  }
  if (unequalElements < 3 && sumA === sumB) {
    return true;
  }
}
