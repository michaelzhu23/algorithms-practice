function centuryFromYear(year) {
  let century = Math.floor(year / 100);
  if (year % 100) {
    century++;
  }
  return century;
}

function centuryFromYear2(year) {
  return Math.ceil(year / 100)
}
