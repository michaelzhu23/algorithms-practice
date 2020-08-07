// v = d/j
// d = v*j
// x1 + v1*j = x2 + v2*j
// simplify and solve for j
// v1j - v2j = x2 - x1
// j(v1 - v2) = x2 - x1
// j = x2 - x1 / v1 - v2

function kangaroo(x1, v1, x2, v2) {
  if (v2 > v1) {
    return "NO";
  }
  if ((x2 - x1) % (v1 - v2) === 0) {
    return "YES"
  } else {
    return "NO"
  }
}
