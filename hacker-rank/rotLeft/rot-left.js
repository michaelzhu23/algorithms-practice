function rotLeft(a, d) {
  while (d > 0) {
    const shiftedElement = a.shift();
    a.push(shiftedElement);
    d--;
  }
  return a;
}
