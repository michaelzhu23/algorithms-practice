function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let appleCount = 0;
  let orangeCount = 0;
  for (let i = 0; i < apples.length; i++) {
    const appleDistance = apples[i] + a;
    if (appleDistance >= s && appleDistance <= t) {
      appleCount++;
    }
  }
  for (let j = 0; j < oranges.length; j++) {
    const orangeDistance = oranges[j] + b;
    if (orangeDistance >= s && orangeDistance <= t) {
      orangeCount++;
    }
  }
  console.log(appleCount);
  console.log(orangeCount);
}
