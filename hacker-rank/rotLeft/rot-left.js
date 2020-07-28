function rotLeft(a, d) {
  while (d > 0) {
    a.push(a.shift());
    d--;
  }
  return a;
}

function rotLeft2(a, d) {
  return a.slice(d).concat(a.slice(0, d));
}

function rotLeft3(a, d) {
  return a.slice(d).concat(a.splice(0, d));
}
